<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio final do 10º Bootcamp da Rocketseat. Repositório para entrega dos 3 módulos: Front, API e Mobile.
</h3>

<div align="center">
  <a href="#instrucoes-de-uso">📦 Instruções de uso</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#api">📊 API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#front">💻 Front</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#app">📱 App</a>
</div>

### 📊 API

1. Antes de rodar a API, você vai precisar rodar um banco de dados PostgreSQL localmente através do Docker e criar uma porta para utilizar a fila do Redis.

- Para isso, utilize o comando `docker run --name <nome_do_container> -e POSTGRES_DB=fastfeet -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres` para criar o container do banco de dados.

Obs.: O nome do banco e senha podem ser alterados, porém deverá mudar no `.env` da API.
Obs².: Na minha máquina ocorre um erro com a porta 5432 quando vou rodar o container do `postgres`, nesses casos eu mudo de `5432:5432` para `5434:5432`.

- Utilize também o comando `docker run --name <nome_do_container> -p 6379:6379 -d -t redis:alpine` para criar o container do Redis.

2. Acesse a pasta /backend
3. Através do terminal, nessa pasta, execute o comando `yarn` para instalar as dependências necessárias.
4. No arquivo `.env.example`, renomear para `.env`.
5. Verificar se os dados estão Ok de acordo com o banco criado no container.
6. Para utilização do SMTP com algum serviço externo como o Mailtrap, alterar as variáveis `MAIL_USER` e `MAIL_PASS` do `.env`.
7. Para utilização do Sentry, alterar a variável `SENTRY_DSN`.
8. Em um terminal, executar o comando `yarn queue` para iniciar a fila do Redis.
9. Em outro terminal, executar o comando `yarn dev` para iniciar o servidor da API.

### 💻 Front

1. Acesse a pasta /frontend
2. Através do terminal, nessa pasta, execute o comando `yarn` para instalar as dependências necessárias.
3. Execute a aplicação com `yarn start` e conseguirá acessá-lo através do `localhost`.

### 📱 App

## Importante: Foi desenvolvida somente para Android!

1. Acesse a pasta /mobile
2. Através do terminal, nessa pasta, execute o comando `yarn` para instalar as dependências necessárias.
3. Caso for utilizado para visualização em seu celular através do cabo USB ou Android Studio, seguir a ['Documentação'](https://react-native.rocketseat.dev/) da Rocketseat para criar seu ambiente de React Native.
4. Após o `adb` configurado e dispositivo conectado, executar o comando `react-native run-android` para iniciar o aplicativo no dispositivo conectado.

---

🚀 Rocketseat 🚀
