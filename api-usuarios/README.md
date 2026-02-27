# Quiz 02 - Aplicação de API - Arquitetura Monolitica

## Como baixar e rodar o projeto

**1. Clone o repositório:**

Utilizando HTTPS:
```bash
git clone https://github.com/ryan-menesesdev/API-Monolitico_CP3029395.git

```

Utilizando SSH:

```bash
git clone git@github.com:ryan-menesesdev/API-Monolitico_CP3029395.git

```

**2. Acesse a pasta do projeto:**

```bash
cd api-usuarios

```

**3. Instale as dependências:**

```bash
npm install

```

**4. Inicie o servidor:**

```bash
node src/app.js

```

---

## Rotas da API

Utilizar o **ThunderClient** ou o **Postman** para testar as seguintes rotas a partir de "http://localhost:3000":

| Método | Rota | O que faz |
| --- | --- | --- |
| **POST** | `/users` | Cria um novo usuário no sistema. |
| **GET** | `/users` | Lista todos os usuários cadastrados. |
| **GET** | `/users/:id` | Busca as informações de um usuário pelo ID. |
| **PUT** | `/users/:id` | Atualiza o nome e o status de um usuário. |
| **DELETE** | `/users/:id` | Altera o status do usuário para "inativo" (não deleta do banco). |

---

## Banco de Dados

Ao inicializar o projeto, o banco de dados é criado automaticamente.
Para visualizar a tabale e os dados salvos pode se utilizar ferramentas como o **DBeaver** para ler o arquivo
