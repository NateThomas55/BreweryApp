import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar URL

  type Query {
    beers(pageSize: Int, after: String): BeerConnection!
  }

  type BeerConnection {
    cursor: String!
    hasMore: Boolean!
    beers: [Results]!
  }

  type Results {
    name: String
    style: Styles
    abv: String
    labels: Label
  }

  type Styles {
    shortname: String
    description: String
    abvMin: String
    abvMax: String
  }

  type Label {
    icon: URL
    medium: URL
    large: URL
  }
`

export default typeDefs
