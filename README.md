# musicNotes

A simple portal for Garnish employees to keep track of their current tasks and projects. This is a full-stack application built with React, Redux, Node.js, Express, and MongoDB. It has a fully functional Auth/login& reg system manually built from the ground up. The application is currently hosted on AWS EC2 and due to permissions (from the Auth functionality), the full application is only accessible to Garnish employees - only the login page is publicly accessible.

## [musicNotes](http://3.141.199.221/)

## musicNotes built with:

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
- [Helmet](https://www.npmjs.com/package/helmet)
- [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [UUID](https://www.npmjs.com/package/uuid)
- [CORS](https://www.npmjs.com/package/cors)

## [musicNotes Github Repo](https://github.com/keithhetrick/musicNotes)

<img width="960" alt="Screen Shot 2023-02-04 at 10 57 27 PM" src="https://user-images.githubusercontent.com/104343338/216802466-3b711877-76b6-457a-bcf2-57699e3e6e20.png">

<img width="959" alt="Screen Shot 2023-02-04 at 10 58 24 PM" src="https://user-images.githubusercontent.com/104343338/216802476-814dabb0-c5a7-48fe-ab2f-71dd9d29aa6a.png">

<img width="379" alt="Screen Shot 2023-02-04 at 10 59 28 PM" src="https://user-images.githubusercontent.com/104343338/216802585-4b9c7003-3399-49b8-bdcc-c258c046e947.png"><img width="381" alt="Screen Shot 2023-02-04 at 11 07 50 PM" src="https://user-images.githubusercontent.com/104343338/216802816-21ab8954-5109-49b3-8318-ae1967153b3b.png">

<img width="960" alt="Screen Shot 2023-02-04 at 11 04 46 PM" src="https://user-images.githubusercontent.com/104343338/216802737-4b2c7976-3c03-4ea5-9ae5-0314d998f8c1.png">

<img width="378" alt="Screen Shot 2023-02-04 at 11 10 36 PM" src="https://user-images.githubusercontent.com/104343338/216802891-eff77776-8e59-4677-8196-247ca15015f3.png"><img width="378" alt="Screen Shot 2023-02-04 at 11 11 20 PM" src="https://user-images.githubusercontent.com/104343338/216802901-1f271377-d22d-413e-9863-2c5e3c876a37.png">

## Installation

1. Clone the repo

```sh
git clone <repo_url>
```

2. Install NPM packages on both the client and server directories

```sh
npm install
```

3. Create a .env file in the server directory and add the following:

```sh
PORT=8000
DATABASE_URI=<your_mongoDB_uri> => can be created via MongoDB Atlas
NODE_ENV=<development> || <production>
ACCESS_TOKEN_SECRET=<your_access_token_secret> => can be generated inside Node shell via the following command: require('crypto').randomBytes(64).toString('hex')
REFRESH_TOKEN_SECRET=<your_refresh_token_secret> => use the same command as above, and paste the new result into the .env file
```

4. Run the server

```sh
nodemon server.js
```

5. Run the client

```sh
npm run start
```

## Usage

1. Login with your credentials
2. Create a new project or task
3. Assign a project or task to yourself or another employee
4. View your current projects and tasks
5. Managers - Update your current projects and tasks
6. Managers - Delete your current projects and tasks
7. Admin - Add a new employee, or update an existing employee's information
8. Admin - Delete an employee
