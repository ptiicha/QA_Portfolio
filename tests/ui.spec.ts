import { test, expect } from '@playwright/test';

test('accordion works', async ({ page, request }) => {
  // wake up Render (cold start)
  for (let i = 0; i < 5; i++) {
    const res = await request.get('https://qa-portfolio.onrender.com/topics');

    if (res.status() === 200) break;

    await new Promise(r => setTimeout(r, 2000));
}
  await page.goto('https://ptiicha.github.io/QA_Portfolio/');

  // have to wait at least one h3 because of free Render limitation
  await page.waitForSelector('.accordion-title', { timeout: 15000 });

  const title = page.locator('.accordion-title').first();
  await expect(title).toBeVisible();

  await title.click();

  const content = page.locator('.accordion-content').first();
  await expect(content).toHaveClass(/open/);

  await title.click();
  await expect(content).not.toHaveClass(/open/);
});