#!/bin/bash

# Load environment variables from .env file
set -a
source .env
set +a

# Build the application
echo "Building the application..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
npx vercel deploy --prod --token $VERCEL_TOKEN --yes

echo "Deployment completed!"
