import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// 🥒 1. Define onde estão as features e os steps
const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.steps.ts',
});

export default defineConfig({
  testDir, // 👈 2. Conecta a pasta gerada pelo BDD ao executor do Playwright
  fullyParallel: true,
  reporter: 'html',

  use: {
    headless: false,
    trace: 'on',
    screenshot: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});