// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Autenticação no Sauce Demo', () => {

  test('Login realizado com sucesso', async ({ Given, When, Then, page }) => { 
    await Given('que o usuário está na página de login', null, { page }); 
    await When('preenche o usuário "standard_user" e a senha "secret_sauce"', null, { page }); 
    await Then('deve visualizar a página de produtos', null, { page }); 
  });

  test('Login realizado com erro', async ({ Given, When, Then, page }) => { 
    await Given('que o usuário está na página de login', null, { page }); 
    await When('preenche o usuário "standard_user" e a senha "senha_errada"', null, { page }); 
    await Then('deve visualizar a mensagem de erro "Epic sadface: Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login efetuado sem informar usuário', async ({ Given, When, Then, page }) => { 
    await Given('que o usuário está na página de login', null, { page }); 
    await When('preenche o usuário "" e a senha "secret_sauce"', null, { page }); 
    await Then('deve visualizar a mensagem de erro "Epic sadface: Username is required"', null, { page }); 
  });

  test('Login efetuado sem informar senha', async ({ Given, When, Then, page }) => { 
    await Given('que o usuário está na página de login', null, { page }); 
    await When('preenche o usuário "secret_sauce" e a senha ""', null, { page }); 
    await Then('deve visualizar a mensagem de erro "Epic sadface: Password is required"', null, { page }); 
  });

  test('Falha no login efetuado com usuário bloqueado', async ({ Given, When, Then, page }) => { 
    await Given('que o usuário está na página de login', null, { page }); 
    await When('preenche o usuário "locked_out_user" e a senha "secret_sauce"', null, { page }); 
    await Then('deve visualizar a mensagem de erro "Epic sadface: Sorry, this user has been locked out."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado que o usuário está na página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Quando preenche o usuário \"standard_user\" e a senha \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"standard_user\"","children":[{"start":20,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"secret_sauce\"","children":[{"start":46,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Então deve visualizar a página de produtos","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Dado que o usuário está na página de login","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando preenche o usuário \"standard_user\" e a senha \"senha_errada\"","stepMatchArguments":[{"group":{"start":19,"value":"\"standard_user\"","children":[{"start":20,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"senha_errada\"","children":[{"start":46,"value":"senha_errada","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então deve visualizar a mensagem de erro \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":35,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":36,"value":"Epic sadface: Username and password do not match any user in this service","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Dado que o usuário está na página de login","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"Quando preenche o usuário \"\" e a senha \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"\"","children":[{"start":20,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"secret_sauce\"","children":[{"start":33,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Então deve visualizar a mensagem de erro \"Epic sadface: Username is required\"","stepMatchArguments":[{"group":{"start":35,"value":"\"Epic sadface: Username is required\"","children":[{"start":36,"value":"Epic sadface: Username is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Dado que o usuário está na página de login","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"Quando preenche o usuário \"secret_sauce\" e a senha \"\"","stepMatchArguments":[{"group":{"start":19,"value":"\"secret_sauce\"","children":[{"start":20,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"\"","children":[{"start":45,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Então deve visualizar a mensagem de erro \"Epic sadface: Password is required\"","stepMatchArguments":[{"group":{"start":35,"value":"\"Epic sadface: Password is required\"","children":[{"start":36,"value":"Epic sadface: Password is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Dado que o usuário está na página de login","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"Quando preenche o usuário \"locked_out_user\" e a senha \"secret_sauce\"","stepMatchArguments":[{"group":{"start":19,"value":"\"locked_out_user\"","children":[{"start":20,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"secret_sauce\"","children":[{"start":48,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Então deve visualizar a mensagem de erro \"Epic sadface: Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":35,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":36,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end