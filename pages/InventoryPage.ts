import { type Page, type Locator } from '@playwright/test';

export class InventoryPage {
  // 1. Tipagem dos elementos
  readonly page: Page;
  readonly menu: Locator;
  readonly title: Locator;
  readonly logoutBTN: Locator;


  // 2. Construtor: inicializa a página e localiza os elementos
  constructor(page: Page) {
    this.page = page;
    this.menu = page.locator('//*[@id="react-burger-menu-btn"]');
    this.title = page.locator('.app_logo')
    this.logoutBTN = page.locator('//*[@id="logout_sidebar_link"]')
  }

  // 4. Métodos de ações do usuário
  async abrirMenu() {
    await this.menu.click();
  }

  async logout(){
    await this.menu.click();
    await this.logoutBTN.click();
  }


}