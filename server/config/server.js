require('dotenv').config()
const { ApolloServer, gql, AuthenticationError } = require('apollo-server')
const fs = require('fs')
const resolvers = require('../resolvers')
const jwt = require('jsonwebtoken')

const schema = fs.readFileSync('./config/schema.graphql')
const typeDefs = gql`
  ${schema}
`

const whitelistedQueries = ['authGoogle', 'IntrospectionQuery'];

const isWhitelisted = query => whitelistedQueries.includes(query)

const context = ({ req, res }) => {
  let currentUser;
  const token = req.headers.authorization;
  if (Boolean(token))
    currentUser = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (err, decoded) => {
        const { query } = req.body
        if (err && !isWhitelisted(query)) throw new AuthenticationError('Unauthorized');
        return decoded
      }
    );
  return { req, res, currentUser };
};



const onConnect = async (connectionParams) => true

const isIntrospectionOn =
  process.env.NODE_ENV !== 'production' ||
  (process.env.NODE_ENV === 'production'
    && process.env.IS_INTROSPECTION_ON === 'true')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: isIntrospectionOn,
  playground: isIntrospectionOn,
  subscriptions: { onConnect },
})

module.exports = server
