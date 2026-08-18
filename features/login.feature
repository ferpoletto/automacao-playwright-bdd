# language: pt
Funcionalidade: Autenticação no Sauce Demo
  
  @smoke
  Cenário: Login realizado com sucesso
    Dado que o usuário está na página de login
    Quando preenche o usuário "standard_user" e a senha "secret_sauce"
    Então deve visualizar a página de produtos
  
  Cenário: Login realizado com erro
    Dado que o usuário está na página de login
    Quando preenche o usuário "standard_user" e a senha "senha_errada"
    Então deve visualizar a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

  Cenário: Login efetuado sem informar usuário 
    Dado que o usuário está na página de login
    Quando preenche o usuário "" e a senha "secret_sauce"
    Então deve visualizar a mensagem de erro "Epic sadface: Username is required"

  Cenário: Login efetuado sem informar senha
    Dado que o usuário está na página de login
    Quando preenche o usuário "secret_sauce" e a senha ""
    Então deve visualizar a mensagem de erro "Epic sadface: Password is required"

  Cenário: Falha no login efetuado com usuário bloqueado
    Dado que o usuário está na página de login
    Quando preenche o usuário "locked_out_user" e a senha "secret_sauce"
    Então deve visualizar a mensagem de erro "Epic sadface: Sorry, this user has been locked out."