# tokenlab_test

## Como rodar a aplicação
* Para rodar o backend localmente:

Crie um container do docker com PostgreSQL
```
docker run --name tokenlab_postgres -e POSTGRES_PASSWORD=tokenlab -p 5432:5432 -d postgres
docker start tokenlab_postgres
```
Baixe as dependências utilizadas e rode o backend
```
yarn
yarn dev
```

* Para rodar o frontend
Baixe as dependências utilizadas e rode o frontend
```
yarn
yarn start
```

## Tecnologias utilizadas

- [NodeJS](https://nodejs.dev/)
- [ReactJS](https://reactjs.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Axios](https://github.com/axios/axios)
- [CORS](https://www.npmjs.com/package/cors)
- [PostgreSQL](https://www.postgresql.org/)


## Funcionalidades

- Criação de usuários
- Criação, atualização e remoção de eventos
- Listagem de eventos
- Criação de convites para usuários
- Login/Logout
