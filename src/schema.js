const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    pet(id: ID!): Pet
    pets(status: String): [Pet]
    iso(s: String!): [Iso]
  }

  type Mutation {
    createPet(pet: PetInput!): PetCreatedResponse!
  }

  enum Status {
    available
    pending
    sold
  }

  type Pet {
    id: ID!
    name: String!
    status: Status!
  }

  input PetInput {
    name: String!
    status: Status!
  } 

  type PetCreatedResponse {
    success: Boolean!
    pet: Pet!
  }

  type Iso {
    name: String!
    alpha2: String!
    alpha3: String!
    countrycode: String!
    iso31662: String!
    region: String!
    subregion: String!
    intermediateregion: String!
    regioncode: String!
    subregioncode: String!
    intermediateregioncode: String!
  }

`;

module.exports = typeDefs;
