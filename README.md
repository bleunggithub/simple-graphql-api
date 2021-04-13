## #Simple GraphQL API with Node.js & Express

#####Practice implementing a GraphQL API

- Random user data is stored in a JSON file created by https://mockaroo.com/
- No actual SQL/NoSQL database is set up

##Installation

- Clone the repo
- CD into the directory and run:
  `npm i`

- After installation of the dependencies, run `node index.js`. Or, if you have nodemon installed `nodemon index.js`

---

- Open your browser and go to `http://localhost:5000/graphql`
- Play with the data using the GraphiQL tool
  - e.g.
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
  ```
  mutation{
      createUser(first_name: "Betty", last_name: "L", email: "betty@email.com", password: "mySecretPassword"){
          id
      }
  }
  ```
  ```
  mutation{
      deleteUserById(id: 19){
          id
      }
  }
  ```
