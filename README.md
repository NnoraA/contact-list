## Contacts app

### Setting up env

#### api

In the `api` folder there is a `.env.example` file copy and rename to `.env`.

Here is an example content to use the prefilled database and run the express server on port 3001:

```
DATABASE_URL="file:./dev.db"
PORT=3001
```

#### applicaton

In the `application` folder there is a `.env.example` file copy and rename to `.env.local`.

Here is an example if the server on port 3001:

```
API_URL="http://localhost:3001"
```

These env variables are required to run the application.

### How to run

Prerequisite: having installed `nvm` and `yarn` on your system

1. `nvm use` - makes sure that you use the same node version as well
2. `yarn` - installs all the deps
3. `yarn start` - starts standalone express server and next.js app in concurrent mode
4. vist localhost: `http://localhost:3000/contacts` to see the application
