import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Basic email validation
    if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)) {
        return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com', // Placeholder
      port: parseInt(process.env.SMTP_PORT || '587'),     // Placeholder
      secure: (process.env.SMTP_PORT === '465'), // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'user@example.com', // Placeholder
        pass: process.env.SMTP_PASS || 'password',       // Placeholder
      },
      tls: {
        // do not fail on invalid certs for local testing with self-signed certs
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      }
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || 'noreply@example.com'}>`, // Sender address (your app)
      replyTo: email, // User's email for easy reply
      to: process.env.MAIL_TO || 'your-email@example.com', // List of receivers (your designated email)
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;"/>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
      console.error('Nodemailer Error:', error);
      // Check for specific Nodemailer errors if needed
      if (error.code === 'EENVELOPE') {
        return NextResponse.json({ message: 'Error sending email: Invalid recipient email address in configuration (MAIL_TO).' }, { status: 500 });
      }
      if (error.code === 'EAUTH') {
        return NextResponse.json({ message: 'Error sending email: SMTP authentication failed. Check SMTP_USER and SMTP_PASS.' }, { status: 500 });
      }
      return NextResponse.json({ message: 'Error sending email. Please try again later.' }, { status: 500 });
    }

  } catch (error) {
    console.error('API Route Error:', error);
    if (error instanceof SyntaxError) { // JSON parsing error
        return NextResponse.json({ message: 'Invalid request format.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}
