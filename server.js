const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 5000


const { graphqlHTTP } = require('express-graphql')

const schema = require('./Schemas')

app.use(cors())
//create graphql server
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.static('public'))

app.get('*', (req, res) => {
    app.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})