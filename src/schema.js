const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    pet(id: ID!): Pet
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
`;

module.exports = typeDefs;
