import { paginateResults } from './utils'
import URL from './URL'

const resolvers = {
  URL,
  Query: {
    beers: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allBeers = await dataSources.beerAPI.getAllBeers()

      const beers = paginateResults({ after, pageSize, results: allBeers })

      return {
        beers,
        cursor: beers.length ? beers[beers.length - 1].cursor : null,
        // if the cursor of the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: beers.length
          ? beers[beers.length - 1].cursor !== allBeers[allBeers.length - 1].cursor
          : false
      }
    }
  }
}

export default resolvers
