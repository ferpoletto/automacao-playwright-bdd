# language: pt
Funcionalidade: Autenticação no Sauce Demo

  Cenário 01: Login realizado com sucesso
    Dado que o usuário está na página de login
    Quando preenche o usuário "standard_user" e a senha "secret_sauce"
    Então deve visualizar a página de produtos

  Cenário 02: Login realizado com erro
    Dado que o usuário está na página de login
    Quando preenche o usuário "standard_user" e a senha "senha_errada"
    Então deve visualizar uma mensagem de erro

  Cenário 03: Login efetuado sem informar usuário 
    Dado que o usuário está na página de login
    Quando preenche o usuário "" e a senha "secret_sauce"
    Então deve visualizar uma mensagem de erro de usuário obrigatório

  Cenário 04: Login efetuado sem informar senha
    Dado que o usuário está na página de login
    Quando preenche o usuário "standard_user" e a senha ""
    Então deve visualizar uma mensagem de erro de senha obrigatória

  Cenário 05: Falha no login efetuado com usuário bloqueado
    Dado que o usuário está na página de login
    Quando preenche o usuário "locked_out_user" e a senha "secret_sauce"
    Então deve visualizar uma mensagem de erro de usuário bloqueado