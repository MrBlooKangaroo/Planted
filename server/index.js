const db = require('./models')
const server = require('./config/server')
const { seeder } = require('./utils/seeds')

const PORT = process.env.PORT || 1337

server.listen(PORT).then(({ url, subscriptionsUrl }) => {
  console.log(`🚀  Server ready at ${url}`)
  console.log(`🚀  Subscriptions ready at ${subscriptionsUrl}\n`)

  seeder(db)
})


