module.exports = {
  Query: {
    pet: (_, { id }, { dataSources }) => dataSources.petStoreAPI.getPetById(id),
    pets: (_, { status }, { dataSources }) => dataSources.petStoreAPI.findPetsByStatus(status),
    iso: (_, { }, { dataSources }) => dataSources.petStoreAPI.iso(),
  },
  Mutation: {
    createPet: async (_, { pet }, { dataSources }) => {
      const res = await dataSources.petStoreAPI.createPet(pet);

      return {
        success: true,
        message: 'pet created',
        pet: res,
      };
    },
  },
};
