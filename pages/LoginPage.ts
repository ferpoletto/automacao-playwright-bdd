import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
  // 1. Declaramos os tipos dos atributos da página
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;


  // 2. O construtor recebe a 'page' e mapeia onde cada elemento está
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]'); //
  
  }

  // 3. Método para acessar a página de login
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // 4. Método que executa a ação de login completa
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}