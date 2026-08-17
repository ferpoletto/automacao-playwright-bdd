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
    await Then('deve visualizar uma mensagem de erro', null, { page }); 
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
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Dado que o usuário está na página de login","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando preenche o usuário \"standard_user\" e a senha \"senha_errada\"","stepMatchArguments":[{"group":{"start":19,"value":"\"standard_user\"","children":[{"start":20,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"senha_errada\"","children":[{"start":46,"value":"senha_errada","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então deve visualizar uma mensagem de erro","stepMatchArguments":[]}]},
]; // bdd-data-end