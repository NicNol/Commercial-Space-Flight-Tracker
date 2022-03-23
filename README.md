# [Commercial Space Flight Tracker](http://csft.herokuapp.com/)

Commercial Space Flight Tracker is a DBMS admin portal. The project is intended for administrators of a fictional website and allows access to change entries in a real mySQL database using a custom-built GUI. You can access a demo of this project [here](http://csft.herokuapp.com/).

![Preview of Commercial Space Flight Tracker Table](/public/images/preview1.png?raw=true)
![Preview of Commercial Space Fight Tracker Data Entry Modal](/public/images/preview2.png?raw=true)


# API Calls

At this time, the API does not require an API key. Make API requests by sending HTTP requests to the desired URL.

URLs are relative to the hosting domain, currently: `http://csft.herokuapp.com/`

## Database Tables and Columns

Understanding the database tables and columns is essential to formulating valid API requests. The following sections detail the database schema and should be used to write API requests.

### Agencies

This table records each government agency acting as a launch provider using a unique ID so that agency names are consistent across the database.

Table Name: `Agencies`

| ColumnName   | Description / Constraints                          |
| ------------ | -------------------------------------------------- |
| `AgencyID `  | int, auto_increment, unique, not NULL, Primary Key |
| `AgencyName` | varchar, not NULL                                  |

### Agency Memberships

This table is used to implement an M:M relationship between
Agencies and Countries.

Table Name: `AgencyMemberships`

| ColumnName     | Description / Constraints                          |
| -------------- | -------------------------------------------------- |
| `MembershipID` | int, auto_increment, unique, not NULL, Primary Key |
| `AgencyID`     | int, Foreign Key, not NULL                         |
| `CountryID`    | int, Foreign Key, not NULL                         |

### Citizenships

This table is used to implement an M:M relationship between Participants and
Countries to maintain information on each participant’s known citizenships.

Table Name: `Citizenships`

| ColumnName      | Description / Constraints                          |
| --------------- | -------------------------------------------------- |
| `CitizenshipID` | int, auto_increment, unique, not NULL, Primary Key |
| `ParticipantID` | int, Foreign Key, not NULL                         |
| `CountryID`     | int, Foreign Key, not NULL                         |

### Companies

This table records each private company acting as a launch provider using a
unique ID so that company names are consistent across the database.

Table Name: `Companies`

| ColumnName              | Description / Constraints                          |
| ----------------------- | -------------------------------------------------- |
| `CompanyID`             | int, auto_increment, unique, not NULL, Primary Key |
| `CompanyName`           | varchar, not NULL                                  |
| `HeadquartersCountryID` | int, Foreign Key, not NULL                         |

### Countries

This table records each country using a unique ID so that country names are
consistent across the database.

Table Name: `Countries`

| ColumnName    | Description / Constraints                          |
| ------------- | -------------------------------------------------- |
| `CountryID`   | int, auto_increment, unique, not NULL, Primary Key |
| `CountryName` | varchar, not NULL                                  |

### Flight Manifests

This table is used to implement an M:M relationship between Flights and
Participants.

Table Name: `FlightManifests`

| ColumnName      | Description / Constraints                          |
| --------------- | -------------------------------------------------- |
| `ManifestID`    | int, auto_increment, unique, not NULL, Primary Key |
| `FlightID`      | int, Foreign Key, not NULL                         |
| `ParticipantID` | int, Foreign Key, not NULL                         |

### Flights

This table records the details of each space flight.

Table Name: `Flights`

| ColumnName        | Description / Constraints                          |
| ----------------- | -------------------------------------------------- |
| `FlightID`        | int, auto_increment, unique, not NULL, Primary Key |
| `VehicleID`       | int, Foreign Key, not NULL                         |
| `AgencyID`        | int, Foreign Key                                   |
| `CompanyID`       | int, Foreign Key                                   |
| `LaunchCountryID` | int, Foreign Key, not NULL                         |
| `LaunchDate`      | date, not NULL                                     |
| `MaximumAltitude` | int, not NULL, kilometers                          |
| `MissionName`     | varchar, optional                                  |

### Participants

Table Name: `Participants`

This table records the personal details of participants in space flights.

| ColumnName      | Description / Constraints                          |
| --------------- | -------------------------------------------------- |
| `ParticipantID` | int, auto_increment, unique, not NULL, Primary Key |
| `FirstName`     | varchar, not NULL                                  |
| `LastName`      | varchar, not NULL                                  |
| `IsAstronaut`   | boolean, not NULL                                  |
| `DateOfBirth`   | date, optional                                     |

### Vehicles

Table Name: `Vehicles`

This table records the details of each launch vehicle family using a unique ID so
that vehicle names are consistent across the database.

| ColumnName    | Description / Constraints                          |
| ------------- | -------------------------------------------------- |
| `VehicleID`   | int, auto_increment, unique, not NULL, Primary Key |
| `VehicleName` | varchar, not NULL                                  |

## Create Queries

Create an entry in a table in the database by sending a POST request to:

`/api/<tableName>`

For example: `api/Flights`

The body of the request should be in the form of key-value pairs associated with the table columns and the value to be inserted into that column:

```
{
    columnName1: requestValue1,
    columnName2: requestValue2,
    columnName3: requestValue3,
}
```

This is the same as executing a SQL select command: `INSERT INTO <tableName> (<columnNames>) VALUES (<requestValues>)`

## Read Queries

Read a table from the database by sending a GET request to:

`/api/<tableName>`

For example: `api/Flights`

This is the same as executing a SQL select command: `SELECT * FROM <tableName>`

## Update Queries

Update an entry in a table in the database by sending a PUT request to:

`/api/<tableName>`

For example: `api/Flights`

The body of the request should be in the form of key-value pairs associated with the table columns and the value to be inserted into that column:

```
{
    columnName1: whereQueryValue,
    columnName2: setQueryValue1,
    columnName3: setQueryValue2,
}
```

This is the same as executing a SQL select command: `UPDATE <tableName> SET <setQuery> WHERE <whereQuery>`

## Delete Queries

Delete a row from a table in the database by sending a DELETE request to:

`/api/<tableName>`

For example: `api/Flights`

The body of the request should be in the form of key-value pair. The recommended key-value pair is the entity ID Attribute (example: `FlightID`) and its value:

```
{
    entityIDAttribute: entityID,
}
```

This is the same as executing a SQL select command: `DELETE FROM <tableName> WHERE <EntityIDAttribute> = <EntityID>`

## Search Queries

Search the database by sending a GET request to:

`/api/search?tableName=<tableName>&columnName=<columnName>&searchCriteria=<searchCriteria>`

where `<tableName>` refers to a table in the database, `<columnName>` refers to a column in the given `<tableName>`, and `<searchCriteria>` refers to the string that should be matched in the database. String matching is performed against a mySQL `LIKE` operator (see [here](https://www.mysqltutorial.org/mysql-like/) for more details).

# Development

## Prerequisites

1. [Node.js](https://nodejs.dev/learn/how-to-install-nodejs), v16.13.1 (recommended) or higher
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), v7.21.1 (recommended) or higher

## Install

Download the current codebase or create a fork. Navigate to the root of the project directory in your terminal window and call `npm install`. This will install the required node module dependencies into your project folder.

## Configure

Create a `.env` file in the root of your directory. This will store the mySQL connection information. Inside the `.env` file, use the following keys:

```
MYSQL_HOST="<mySQL Host>"
MYSQL_USER="<mySQL Username>"
MYSQL_PASSWORD="<mySQL Password>"
MYSQL_DATABASE="<mySQL Database Name>"
```

## Run

Next, call `npm run dev-start-back`. This will start the backend server in development mode ([Express](https://expressjs.com/) with [nodemon](https://www.npmjs.com/package/nodemon)).

Then, open a new terminal window and navigate to the root of the project directory. Call `npm run dev-start-front`. This will start the frontend server in development mode ([webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), and [React](https://reactjs.org/)).

The previous call should open a browser window and navigate to `localhost:3000`. This is the project running locally on your machine. 🎉🎉🎉
