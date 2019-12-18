/* eslint-disable no-console */

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const PetStoreAPI = require('./datasources/petStore');

const dataSources = () => ({
  petStoreAPI: new PetStoreAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`app running at ${url}`));
