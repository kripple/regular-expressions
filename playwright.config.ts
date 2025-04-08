import { defineConfig, devices } from '@playwright/test';

const port = 5173 as const;
const url = `http://localhost:${port}` as const;

export default defineConfig({
  fullyParallel: true,
  reporter: 'list',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  testDir: 'src/app',
  testMatch: '**/*.test.ts',
  use: {
    baseURL: url,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run start',
    url: url,
    reuseExistingServer: true,
  },
});
