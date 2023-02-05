# musicNotes

A simple portal for Garnish employees to keep track of their current tasks and projects. This is a full-stack application built with React, Redux, Node.js, Express, and MongoDB. The application is currently hosted on AWS EC2, and due to permissions, the full application is only accessible to Garnish employees - only the login page is publicly accessible.

## Built with:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [React-Router-Dom](https://reactrouter.com/web/guides/quick-start)
- [JSON Web Token](https://jwt.io/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express-Async-Handler](https://www.npmjs.com/package/express-async-handler)
- [Express-Rate-Limit](https://www.npmjs.com/package/express-rate-limit)
- [Mongoose](https://mongoosejs.com/)
- [Mongoose-Sequences](https://www.npmjs.com/package/mongoose-sequences)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [UUID](https://www.npmjs.com/package/uuid)
- [CORS](https://www.npmjs.com/package/cors)

[Demo](http://3.141.199.221/)

## Installation

1. Clone the repo

```sh
git clone
```

2. Install NPM packages

```sh
npm install
```

3. Create a .env file in the root directory and add the following:

```sh
PORT = 8000
DATABASE_URI = <your_mongoDB_uri>
NODE_ENV = <development> || <production>
ACCESS_TOKEN_SECRET = <your_access_token_secret>
REFRESH_TOKEN_SECRET = <your_refresh_token_secret>
```

4. Run the app

```sh
npm run dev
```
