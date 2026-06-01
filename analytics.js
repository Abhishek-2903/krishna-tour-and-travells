import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
// Automatically detects production/development mode
// Debug mode is enabled in development for easier testing
inject({
  mode: 'auto', // Let Vercel automatically detect environment
  debug: false, // Set to true during development to see analytics events in console
});
