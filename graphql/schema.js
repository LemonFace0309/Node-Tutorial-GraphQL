const { buildSchema } = require('graphql')
const { model } = require('mongoose')

module.exports = buildSchema(`
  type TestData {
    text: String!
    views: Int!
  }

  type RootQuery {
    hello: TestData
  }

  schema {
    query: RootQuery
  }
`)