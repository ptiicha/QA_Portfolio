import { test, expect } from '@playwright/test';

test('accordion works', async ({ page }) => {
  await page.goto('https://ptiicha.github.io/QA_Portfolio/');

  // have to wait at least one h3 because of free Render limitation
  await page.waitForSelector('h3', { timeout: 15000 });

  const title = page.locator('h3');
  await expect(title).toBeVisible();

  await title.click();

  const content = page.locator('p');
  await expect(content).toBeVisible();

  await title.click();
  await expect(content).toBeHidden();
});