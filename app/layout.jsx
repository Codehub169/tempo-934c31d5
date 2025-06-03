import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// Configure Inter font (secondary, for body text)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // CSS variable for Inter
  display: 'swap',
  weight: ['300', '400', '500', '700'] // Common weights for body text
});

// Configure Poppins font (primary, for headings)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // Common weights for headings
  variable: '--font-poppins', // CSS variable for Poppins
  display: 'swap',
});

export const metadata = {
  title: 'hueneu | Where stories find their aesthetic.',
  description: 'hueneu is a graphic design studio. Designs that whisper loud stories. We decode stories into intentional, balanced, and evocative designs.',
  keywords: 'graphic design, branding, packaging, social media, stationery, coffee table books, creative projects, design studio, hueneu, storytelling, aesthetic',
  authors: [{ name: 'hueneu Studio' }],
  // Open Graph and Twitter card metadata can be added here for better social sharing
  openGraph: {
    title: 'hueneu | Where stories find their aesthetic.',
    description: 'Designs that whisper loud stories.',
    // url: 'https://hueneu.com', // Replace with actual domain later
    // siteName: 'hueneu Studio',
    // images: [ /* Add images later */ ],
    type: 'website',
  },
  // twitter: { /* Add Twitter card data later */ },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon links - replace with actual favicons later */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Example */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
