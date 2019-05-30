const server = require('./config/server');

const PORT = process.env.PORT || 1337;

server.listen(PORT).then(({ url, subscriptionsUrl }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log(`🚀  Subscriptions ready at ${subscriptionsUrl}`);
});
