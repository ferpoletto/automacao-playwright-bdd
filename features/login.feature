# language: pt
Funcionalidade: Autenticação no Sauce Demo

  Cenário: Login realizado com sucesso
    Dado que o usuário está na página de login
    Quando preenche o usuário "standard_user" e a senha "secret_sauce"
    Então deve visualizar a página de produtos

  Cenário: Login realizado com erro
    Dado que o usuário está na página de login
    Quando preenche o usuário "standard_user" e a senha "senha_errada"
    Então deve visualizar uma mensagem de erro

  # Cenário: Login efetuado sem informar usuário 
  #   Dado que o usuário está na página de login
  #   Quando preenche o usuário "" e a senha "secret_sauce"
  #   Então deve visualizar uma mensagem de erro de usuário obrigatório

  # Cenário: Login efetuado sem informar senha
  #   Dado que o usuário está na página de login
  #   Quando preenche o usuário "standard_user" e a senha ""
  #   Então deve visualizar uma mensagem de erro de senha obrigatória

  # Cenário: Falha no login efetuado com usuário bloqueado
  #   Dado que o usuário está na página de login
  #   Quando preenche o usuário "locked_out_user" e a senha "secret_sauce"
  #   Então deve visualizar uma mensagem de erro de usuário bloqueado