import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd();

// 1. Contexto inicial: navegação
Given('que o usuário está na página de login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

// 2. Ação: preenchimento reutilizável para qualquer usuário e senha
When('preenche o usuário {string} e a senha {string}', async ({ page }, username: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

// 3. Validação de sucesso: URL de produtos
Then('deve visualizar a página de produtos', async ({ page }) => {
  await expect(page).toHaveURL(/inventory.html/);
});

// 4. Validação de falha: visibilidade da mensagem de erro
Then('deve visualizar uma mensagem de erro', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await expect(loginPage.errorMessage).toBeVisible();
});