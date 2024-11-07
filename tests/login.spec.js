import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
    
  });

  test('Successful Login', async ({ page }) => {
    await loginPage.login('Akos', 'qwerty');
   
    await page.waitForLoadState('load');
    
    await expect(page.locator('xpath=/html/body/div[4]/div[2]/div/div/button[1]/div')).toHaveText('Home');
    
  });
});
