require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const resolvers = require('../resolvers');

const schema = fs.readFileSync('./config/schema.graphql');
const typeDefs = gql`
  ${schema}
`;

const context = async ({ _req, connection }) =>
  connection ? connection.context : {};

const onConnect = async connectionParams => true;

const isIntrospectionOn =
  process.env.NODE_ENV !== 'production' ||
  (process.env.NODE_ENV === 'production' &&
    process.env.IS_INTROSPECTION_ON === 'true');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: isIntrospectionOn,
  playground: isIntrospectionOn,
  subscriptions: { onConnect },
});

module.exports = server;
