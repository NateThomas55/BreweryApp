import { RESTDataSource } from 'apollo-datasource-rest'

class BeerAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = `https://sandbox-api.brewerydb.com/v2/`
  }
  // get beers function
  async getAllBeers() {
    const response = await this.get(`beers/?key=${process.env.API_KEY}`)
    return Array.isArray(response.data) ? response.data.map(beer => this.beerReducer(beer)) : []
  }

  // beers reducer
  beerReducer(beer) {
    return {
      name: beer.name,
      style: {
        shortname: beer.shortname,
        description: beer.description,
        abvMin: beer.abvMin,
        abvMax: beer.abvMax
      },
      abv: beer.abv,
      labels: {
        icon: beer.icon,
        medium: beer.medium,
        large: beer.large
      }
    }
  }
}

export default BeerAPI
