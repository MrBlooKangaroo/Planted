require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')
const resolvers = require('../resolvers')

const schema = fs.readFileSync('./config/schema.graphql')
const typeDefs = gql`
  ${schema}
`

const context = async ({ _req, connection }) => 
  (connection ? connection.context : {})

const onConnect = async (connectionParams) => true

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
	introspection: true,
	playground: true,
	subscriptions: { onConnect }
})

module.exports = server
