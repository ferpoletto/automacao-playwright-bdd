
# 🎭 Playwright - Lista Rápida de Ações, Seletores e Asserções

Esta lista foi estruturada no formato direto **"Ação/Objetivo ➡️ Comando"** para facilitar consultas rápidas durante o desenvolvimento de testes e Page Objects.

---

## 🌐 1. Navegação e Controle da Página (`page`)

* **Navegar para um site:** `await page.goto('https://exemplo.com');`
* **Recarregar a página atual:** `await page.reload();`
* **Voltar para a página anterior:** `await page.goBack();`
* **Avançar no histórico:** `await page.goForward();`
* **Aguardar a URL mudar:** `await page.waitForURL('**/inventory.html');`
* **Aguardar a rede parar de fazer requisições:** `await page.waitForLoadState('networkidle');`
* **Aguardar um tempo fixo (evitar em produção):** `await page.waitForTimeout(3000);`
* **Tirar foto da página inteira:** `await page.screenshot({ path: 'foto.png', fullPage: true });`

---

## 🎯 2. Localizar Elementos na Tela (`Locators`)

* **Localizar botão pelo texto/nome:** `page.getByRole('button', { name: 'Login' })`
* **Localizar link pelo texto/nome:** `page.getByRole('link', { name: 'Logout' })`
* **Localizar título/cabeçalho pelo texto:** `page.getByRole('heading', { name: 'Produtos' })`
* **Localizar por texto visível na tela:** `page.getByText('Swag Labs')`
* **Localizar campo de texto pelo placeholder:** `page.getByPlaceholder('Username')`
* **Localizar campo de texto pelo rótulo/label:** `page.getByLabel('Nome de Usuário')`
* **Localizar por atributo data-testid:** `page.getByTestId('botao-enviar')`
* **Localizar por atributo customizado / data-test:** `page.locator('[data-test="username"]')`
* **Localizar por classe CSS:** `page.locator('.nome-da-classe')`
* **Localizar por ID CSS:** `page.locator('#meu-id')`
* **Filtrar um elemento que contém determinado texto:** `page.locator('.item').filter({ hasText: 'Mochila' })`
* **Pegar o primeiro de uma lista de elementos:** `page.locator('.item').first()`
* **Pegar o último de uma lista de elementos:** `page.locator('.item').last()`
* **Pegar o item na posição N de uma lista (0-indexado):** `page.locator('.item').nth(0)`

---

## ⚡ 3. Ações no Elemento (Cliques, Digitação e Interações)

* **Clicar em um elemento/botão:** `await elemento.click();`
* **Dar duplo clique:** `await elemento.dblclick();`
* **Clicar com o botão direito:** `await elemento.click({ button: 'right' });`
* **Digitar limpando o campo antes (rápido):** `await elemento.fill('meu texto');`
* **Digitar caractere por caractere (com delay):** `await elemento.pressSequentially('texto', { delay: 100 });`
* **Limpar o conteúdo de um campo:** `await elemento.clear();`
* **Pressionar uma tecla do teclado:** `await elemento.press('Enter');`
* **Marcar um checkbox ou radio button:** `await elemento.check();`
* **Desmarcar um checkbox:** `await elemento.uncheck();`
* **Selecionar opção em dropdown (<select>) por valor:** `await elemento.selectOption('valor');`
* **Selecionar opção em dropdown (<select>) por texto visível:** `await elemento.selectOption({ label: 'Texto Visivel' });`
* **Passar o mouse por cima (Hover):** `await elemento.hover();`
* **Focar o cursor no elemento:** `await elemento.focus();`
* **Destacar o elemento com borda visualmente:** `await elemento.highlight();`
* **Tirar print apenas do elemento:** `await elemento.screenshot({ path: 'elemento.png' });`

---

## 🔍 4. Asserções e Validações (`expect`)

* **Validar se o elemento está visível na tela:** `await expect(elemento).toBeVisible();`
* **Validar se o elemento está oculto/invisível:** `await expect(elemento).toBeHidden();`
* **Validar se o elemento está habilitado:** `await expect(elemento).toBeEnabled();`
* **Validar se o elemento está desabilitado:** `await expect(elemento).toBeDisabled();`
* **Validar se o checkbox está marcado:** `await expect(elemento).toBeChecked();`
* **Validar texto exato do elemento:** `await expect(elemento).toHaveText('Texto Exato');`
* **Validar se contém parte do texto:** `await expect(elemento).toContainText('trecho');`
* **Validar se o campo de texto está vazio:** `await expect(elemento).toBeEmpty();`
* **Validar o valor atual de um campo de texto (input):** `await expect(elemento).toHaveValue('valor');`
* **Validar quantidade de itens retornados:** `await expect(listaElementos).toHaveCount(6);`
* **Validar a URL atual da página:** `await expect(page).toHaveURL('https://exemplo.com/home');`
* **Validar se a URL contém um trecho (Regex):** `await expect(page).toHaveURL(/inventory.html/);`
* **Validar o título da aba/página:** `await expect(page).toHaveTitle('Swag Labs');`
* **Validar se o elemento possui determinado atributo:** `await expect(elemento).toHaveAttribute('data-test', 'error');`
* **Validar se o elemento possui determinada classe CSS:** `await expect(elemento).toHaveClass(/ativa/);`
* **Validar a negação de qualquer regra (usando .not):** `await expect(elemento).not.toBeVisible();`