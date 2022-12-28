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

- Once you have added your db config as listed above, go to the src folder from your terminal and execute `yarn sequelize db:create` and then execute `yarn sequelize db:migrate`

## Database Design

- Airplane Table
- Flights Table
- Airports Table
- Cities Table

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many fligt but a flight belongs to one airport

## Tables

### City -> id, name, createdAt, updatedAt

### Airport -> id, name, address, city_id, createdAt, updatedAt

     Relationship -> A City has many airports but Airport belongs to a city (one to many)

```
   yarn sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

   yarn sequelize db:migrate

    yarn sequelize model:generate --name Flight --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer
```
