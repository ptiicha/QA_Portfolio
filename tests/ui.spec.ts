import { test, expect } from '@playwright/test';

test('accordions work', async ({ page, request }) => {
  // wake up Render (cold start)
  for (let i = 0; i < 5; i++) {
    const res = await request.get('https://qa-portfolio.onrender.com/topics');
    if (res.status() === 200) break;
    await new Promise(r => setTimeout(r, 2000));
}
  await page.goto('https://ptiicha.github.io/QA_Portfolio/');
  await page.waitForSelector('.accordion-title', { timeout: 15000 });

  const titles = page.locator('.accordion-title');
  const contents = page.locator('.accordion-content');

  const count = await titles.count();

  for (let i = 0; i < count; i++) {
    const title = titles.nth(i);
    const content = contents.nth(i);

    const text = await title.textContent();

    await test.step(`Accordion: ${text?.trim()}`, async () => {
      await expect(title).toBeVisible();
    
      await title.click();
      await expect(content).toHaveClass(/open/);
    
      await title.click();
      await expect(content).not.toHaveClass(/open/);
    });
  }
});