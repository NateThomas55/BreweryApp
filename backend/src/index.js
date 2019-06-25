import { ApolloServer } from 'apollo-server'
require('dotenv').config()
import typeDefs from './schema'
import resolvers from './resolvers.js'

import BeerAPI from './datasources/beer'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ beerAPI: new BeerAPI() })
})

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`)
})
