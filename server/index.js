const server = require('./config/server')

const PORT = process.env.PORT || 1337

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})