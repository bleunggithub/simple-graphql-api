# Simple CRUD GraphQL API with React, Node.js & Express
<<<<<<< HEAD

### <a href="https://guarded-oasis-33299.herokuapp.com/"> Deployed on Heroku</a>

=======
### <a href="https://guarded-oasis-33299.herokuapp.com/"> Deployed on Heroku</a>
>>>>>>> c245de726cf396d785d9b64f2e0ee57eb046a14f
##### Practice implementing a CRUD GraphQL API

<img src="https://github.com/bleunggithub/simple-graphql-api/blob/main/screenshot.png?raw=true" />

- Random user data is stored in a JSON file created by https://mockaroo.com/
- No actual SQL/NoSQL database is set up (data will not persist)

## Installation

- Clone the repo

### Server

- cd into the server directory and run:
  `cd server` then `npm i`

- After installation of the dependencies, run `node index.js`. Or, if you have nodemon installed,run `nodemon index.js`

---

##### GraphiQL

- Open your browser and go to `http://localhost:5000/graphql`
- Play with the data using the GraphiQL tool

#### Read

```
query{
    getAllUsers{
        id
        first_name
        last_name
        email
        password
    }
}
```

#### Create

```
mutation{
createUser(
    first_name: "Betty"
    last_name: "L"
    email: "betty@email.com"
    password: "mySecretPassword"
){
        id
    }
}
```

#### Delete

```
mutation{
    deleteUserById(id: 19){
        id
    }
}
```

#### Update

```
mutation{
  updateUserById(
    id:5
    first_name:"betty"
    last_name: "L"
    email:"email@email.com"
    password: "password"
  ){
    id
  }
}
```

---

### Client (React)

- UI created with Create-React-App & Material UI
- cd into the server directory and run:
  `cd client` then `yarn`

- After installation of the dependencies, run `yarn start`.
- Open your browser and go to `http://localhost:3000` (if not already opened)
