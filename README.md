# Gerenciador de Alunos

Este projeto é um sistema simples de gerenciamento de alunos, permitindo cadastrar, editar, excluir e listar alunos.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- Template Engine (como EJS ou Handlebars, dependendo da configuração do projeto)
- Flash Messages para exibição de mensagens de erro

## 📂 Estrutura do Projeto
```
|-- controllers/
|   |-- HomeController.js
|-- views/
|   |-- home/
|       |-- index.ejs (Página inicial com a lista de alunos)
|       |-- form.ejs (Formulário de cadastro/edição de aluno)
|-- routes/
|   |-- homeRoutes.js
|-- server.js (Arquivo principal do servidor)
```

## 🔧 Instalação e Execução
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```
5. Acesse no navegador:
   ```sh
   http://localhost:3000/home
   ```

## ✨ Funcionalidades
- Listagem de alunos
- Cadastro de novos alunos
- Edição de alunos existentes
- Exclusão de alunos
- Verificação de matrícula duplicada

## 📌 Rotas
| Método | Rota            | Descrição |
|--------|----------------|-----------|
| GET    | `/home/`       | Página inicial com a lista de alunos |
| GET    | `/home/form`   | Formulário de cadastro de aluno |
| POST   | `/home/salvar` | Salvar um novo aluno |
| GET    | `/home/editar/:id` | Formulário de edição de aluno |
| POST   | `/home/editar` | Salvar edição de aluno |
| GET    | `/home/excluir/:id` | Excluir aluno |

## 🛠️ Melhorias Futuras
- Implementação de um banco de dados (MongoDB, PostgreSQL, etc.)
- Autenticação de usuários
- API REST para integração com frontend

## 📝 Licença
Este projeto está sob a licença MIT. Sinta-se livre para contribuir! 🚀

