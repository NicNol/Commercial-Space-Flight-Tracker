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
