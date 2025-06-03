#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the script's directory (optional, if the script is not in the project root)
# cd "$(dirname "$0")"

echo "Installing dependencies..."
npm install

echo "Building the project..."
npm run build

echo "Starting the application on port 9000..."
npm run start