import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/hu/log-in.html');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.fill('input[name="login_email"]', 'testuser@example.com');
    await page.fill('input[name="login_password"]', 'Password1!');
    await page.click("#login_submit");

    await expect(page).toHaveURL(/.*my-profile.html/);
    await expect(page.locator('h1')).toHaveText('My profile');
  });

  test('should show error with invalid password', async ({ page }) => {
    await page.fill('input[name="login_email"]', 'testuser@example.com');
    await page.fill('input[name="login_password"]', 'wrongPassword');
    await page.click("#login_submit");

    await expect(page.locator('.error-message'))
      .toHaveText('Invalid username or password');
    await expect(page).toHaveURL(/.*login/);
  });

});
