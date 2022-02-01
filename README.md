# Development ⚙️

## Prerequisites

1. [Node.js](https://nodejs.dev/learn/how-to-install-nodejs), v14.17.0 (recommended) or higher
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), v7.21.1 (recommended) or higher
3. [MongoDB](https://docs.mongodb.com/guides/server/install/)

## Install

Download the current codebase or create a fork. Navigate to the root of the project directory in your terminal window and call `npm install`. This will install the required node module dependencies into your project folder.

## Configure

Within MongoDB, create a new database called `specs`. Inside the database, create a new collection called `bac`.

From the root of the project directory, open `config.js`. Set the URI of the `specs` database using the format provided.

This will allow BAC specification data to be scraped and saved to the database, as well as searched by users using the API.

## Run

Next, call `node run dev-start-back`. This will start the backend server in development mode ([Express](https://expressjs.com/) with [nodemon](https://www.npmjs.com/package/nodemon)). This will also scrape the Boeing D1-4426 for specifications and populate or update the database as necessary.

Then, open a new terminal window and navigate to the root of the project directory. Call `node run dev-start-front`. This will start the frontend server in development mode ([webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), and [React](https://reactjs.org/)).

The previous call should open a browser window and navigate to `localhost:3000`. This is the project running locally on your machine. 🎉🎉🎉
