# Welcome to Flights Service

## Projects Setup

- Clone the project on your local
- Execute `yarn add` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following env variables:
  - `PORT=500`
- Inside the `src/config` folder create a new file `config.json` and then add the following json code:

```
{
"development": {
  "username": <YOUR_DB_LOGIN_NAME>,
  "password": <YOUR_DB_PASSWORD>,
  "database": "Flight_Search_DB_DEV",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
}

```
