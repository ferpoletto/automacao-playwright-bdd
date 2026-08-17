import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Deve realizar login com sucesso no Sauce Demo', async ({ page }) => {
  // 1. Cria a instância da página de login
  const loginPage = new LoginPage(page);

  // 2. Executa as ações na tela
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. Validação (Assertion): verifica se foi redirecionado para o inventário
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Deve realizar login com falha no Sauce Demo', async ({ page }) => {
  // 1. Cria a instância da página de login
  const loginPage = new LoginPage(page);

  // 2. Executa as ações na tela
  await loginPage.goto();
  await loginPage.login('standard_user', '123');

  // 3. Validação (Assertion): verifica se foi redirecionado para o inventário
  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});



test('Deve realizar logout com sucesso no Sauce Demo', async ({ page }) => {
  // 1. Cria a instância da página de login
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // 2. Executa as ações na tela
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. Validação (Assertion): verifica se foi redirecionado para o inventário
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.screenshot({ path: 'evidencias/apos-login.png', fullPage: true });

  // 4.Deve clicar no menu e clicar em logout
  await inventoryPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});