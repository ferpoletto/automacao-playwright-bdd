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