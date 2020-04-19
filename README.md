<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.svg" width="300px" />
</h1>

<h3 align="center">
  Desafio final do 10º Bootcamp da Rocketseat. Repositório para entrega dos 3 módulos: Front, API e Mobile.
</h3>

<div align="center">
  <a href="#api">📊 API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#front">💻 Front</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#app">📱 App</a>
</div>

### 📊 API

<a name="api"></a>

1. Antes de rodar a API, você vai precisar rodar um banco de dados PostgreSQL localmente através do Docker e criar uma porta para utilizar a fila do Redis.

- Para isso, na raíz do projeto, execute o comando `docker-compose up -d` para criar os containers.

2. Acesse a pasta /api
3. Através do terminal, nessa pasta, execute o comando `yarn` para instalar as dependências necessárias.
4. No arquivo `.env.example`, renomear para `.env`.
5. Para utilização do SMTP com algum serviço externo como o Mailtrap, alterar as variáveis `MAIL_USER` e `MAIL_PASS` do `.env`.
6. Para utilização do Sentry, alterar a variável `SENTRY_DSN`.
7. Antes de iniciar a aplicação, executar nessa ordem, `yarn migrate` para criar as tabelas e `yarn seed` para criar o login do Admin(Front).
8. Em um terminal, executar o comando `yarn queue` para iniciar a fila do Redis (Utilizado para envio de emails).
9. Em outro terminal, executar o comando `yarn dev` para iniciar o servidor da API.

### 💻 Front

<a name="front"></a>

1. Acesse a pasta /front
2. Através do terminal, nessa pasta, execute o comando `yarn` para instalar as dependências necessárias.
3. Execute a aplicação com `yarn start` e conseguirá acessá-lo através do `localhost`.
4. Após ter seguidos os passos da API de criar as migrations e seeds, você poderá logar utilizando o login `admin@fastfeet.com` e a senha `123456`.

### 📱 App

<a name="app"></a>

## Importante: Foi desenvolvida somente para Android!

1. Acesse a pasta /mobile
2. Através do terminal, nessa pasta, execute o comando `yarn` para instalar as dependências necessárias.
3. Caso for utilizado para visualização em seu celular através do cabo USB ou Android Studio, seguir a ['Documentação'](https://react-native.rocketseat.dev/) da Rocketseat para criar seu ambiente de React Native.
4. Após o `adb` configurado e dispositivo conectado, executar o comando `react-native run-android` para iniciar o aplicativo no dispositivo conectado.

---

🚀 Rocketseat 🚀
