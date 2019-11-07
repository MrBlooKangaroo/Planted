require('dotenv').config();
const { ApolloServer, gql, AuthenticationError } = require('apollo-server');
const fs = require('fs');
const resolvers = require('../resolvers');
const jwt = require('jsonwebtoken');

const schema = fs.readFileSync('./config/schema.graphql');
const typeDefs = gql`
  ${schema}
`;

const context = ({ req, res }) => {
  const token = req.headers.authorization || '';
  const currentUser = jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    const whitelist = ['authGoogle', 'IntrospectionQuery', 'plantTypes'];
    let isWhitelisted = req.body.query === '';
    // console.log(req.body.operationName);
    // console.log('body', req.body.query);
    if (!isWhitelisted) {
      for (let i in whitelist) {
        // console.log(whitelist[i]);
        isWhitelisted = req.body.query.includes(whitelist[i]);
        console.log(whitelist[i] + ': ' + isWhitelisted);
        console.log(typeof req.body.query);
        if (isWhitelisted) break;
      }
    }
    if (err && !isWhitelisted) {
      throw new AuthenticationError('Unauthorized');
    }
    return decoded;
  });
  return { req, res, currentUser };
};

const onConnect = async connectionParams => true;

const isIntrospectionOn =
  process.env.NODE_ENV !== 'production' ||
  (process.env.NODE_ENV === 'production' && process.env.IS_INTROSPECTION_ON === 'true');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: isIntrospectionOn,
  playground: isIntrospectionOn,
  subscriptions: { onConnect },
  formatError: err => {
    console.log(err.stack);
    return err;
  },
});

module.exports = server;
