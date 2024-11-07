import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000, // Set the global timeout for each test
  use: {
    baseURL: 'https://yoshii.home.ro', // Replace with your site URL
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure', // Take screenshots on failures
    video: 'retain-on-failure', // Record video on failures
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    // { name: 'firefox', use: { browserName: 'firefox' } },
    // { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});
 