# Projeto Final de BackEnd

## Base de Dados de um Jornal 

Este é o meu projeto final de BackEnd. O desafio que nos foi dado foi de criar uma REST API. 
A ideia base era que ela fosse capaz de exectur um CRUD: criar, ler, atualizar e apagar.

No meu caso utilizei:
Node.js para servidor
Express.js como framework
MongoDB (com Nongoose) para um modelo não relacional de base de dados

Consegui criar o CRUD e o readme.md até a dada prevista, sendo que faltam opções de validação até à data (15/06/2022)

###### Guia de utilização

A utilização do meu projeto pressupõe a instalação de Node.js e MongoDB

- Em primeiro lugar deve-se clonar o repositório do GIT para uma past local
- Num terminal novo deve-se fazer "npm install" para installar as dependências necessárias presentes no package.json
- Escrever "mongod --config /usr/local/etc/mongod.conf"
- Escrever "npm run start"
- Extra: se se tiver interesse testar através do ficheiro route.rest, no programa VS Studio Code pode-se instalar a extensão "REST Client" que permite testar o CRUD com os comandos deixados no acima citado ficheiro.

###### Exemplos de utilização da API

Para os Jornalistas:

Ao inserir o código abaixo, receberá de volta todos os jornalistas na base de dados:
```
GET http://localhost:3000/journalistRoute
```

Ao inserir o código abaixo, receberá de volta o jornalistas na base de dados que tiver o devido ID:
```
GET http://localhost:3000/journalistRoute/:journalistid
```

Ao inserir o código abaixo, será inserido um jornalista na base de dados respeitando o esquema estabelicido, como dado no exemplo abaixo:
```
POST http://localhost:3000/journalistRoute

{
    "name": "Nome do Jornalista",
    "job_function": "descritivo",
    "date_of_admission": 11112011,
    "birthday" : 11111911,
    "email" : "exemplo@gmail.com"
}
```

Ao inserir o código abaixo, será inserido um jornalista na base de dados respeitando o esquema estabelicido, como dado no exemplo abaixo:
```
PATCH http://localhost:3000/journalistRoute/:journalistid

{
    "name": "Outro Nome"    
}
```

Ao inserir o código abaixo, será apagado da base de dados o jornalista com o respetivo ID:
```
DELETE http://localhost:3000/journalistRoute/:journalistid
```

Estes exemplos são replicáveis para as Locations e para as Sections, bastanto apenas trocar `journalistRoute` no código, por `locationRoute` ou `sectionRoute`




