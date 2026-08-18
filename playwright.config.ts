import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

// 🥒 1. Define onde estão as features e os steps
const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.steps.ts',
});

const ENV = process.env.ENV || 'dev';
  dotenv.config({ path: path.resolve(__dirname, `.env.${ENV}`) });


export default defineConfig({
  testDir, // 👈 2. Conecta a pasta gerada pelo BDD ao executor do Playwright
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    ...devices['Desktop Chrome'],
    headless: true,
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