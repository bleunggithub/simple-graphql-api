const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

const { graphqlHTTP } = require('express-graphql')

const schema = require('./Schemas')

app.use(cors())
//create graphql server
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})