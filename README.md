## Descrição

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Desafio

- [x] Uma rota para listar os To Do's, com filtro por status
  - O filtro é opcional, quando não for informado a API deve retornar todos To Do's
- [x] Uma rota para criar o To Do, com validação dos campos do body. Essa rota deve retornar os dados do To Do que foi criado.
- [x] Uma rota para excluir um To Do. Essa rota deve retornar o response vazio.
- [ ] Uma rota para atualizar um To Do. Essa rota deve retornar os dados atualizados do To Do.
> Para simplificar, o armazenamento dos To Do's pode ser feito apenas em memória
```
ToDo = {
  id: string;
  title: string;
  body: string;
  status: 'todo' | 'doing' | 'done';
}
```

## Setup

```bash
$ npm install
```

## Executando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Executando os testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

