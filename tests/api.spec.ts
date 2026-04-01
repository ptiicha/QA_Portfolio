import { test, expect } from '@playwright/test';

test('GET /topics returns correct data', async ({ request }) => {
    let res;
  // retries because of Render
    for (let i = 0; i < 3; i++) {
      res = await request.get('https://qa-portfolio.onrender.com/topics');
  
      if (res.status() === 200) break;
  
      await new Promise(r => setTimeout(r, 2000));
    }
  
    expect(res).toBeTruthy();

    expect(res?.status()).toBe(200);
  
    const body = await res!.json();
  
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);

  //check response structure
  expect(body[0]).toHaveProperty('title');
  expect(body[0]).toHaveProperty('content');

  //check data types
  expect(typeof body[0].title).toBe('string');
  expect(typeof body[0].content).toBe('string');
});