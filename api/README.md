# Backend

No back-end da aplicação você pode utilizar o framework NodeJS que preferir, mas sempre criando uma API REST. Além disso, utilize banco relacional (SQL).

## Usuário / autenticação

- Deve ser possível o usuário se autenticar e criar sua conta na aplicação;
- O usuário pode ser administrador ou cliente, você pode adicionar uma coluna com o tipo
- de usuário na tabela de usuários;
- Quando um usuário se cadastra ele é automaticamente um cliente;
- Não deve ter cadastro de usuário admnistradores, crie um usuário administrador
- manualmente para utilizar a versão web do sistema;

## Cardápio

- O cardápio deve ser cadastrado através de API, você deve ter tabelas para armazenar produtos (pizza/bebidas/massas), tipo de produtos (sabor de pizza/marca de refrigerante) e tamanho do produto (cm para pizzas/ml para bebidas/P,M ou G para outros);
- Não existirá uma interface para cadastro dessas informações, mas você pode cadastrá-las usando o próprio Insomnia.
- O relacionamento entre tipo e tamanho define o valor do produto, ou seja, uma pizza média de 4 queijos pode custar diferente de uma pizza média de calabresa.
