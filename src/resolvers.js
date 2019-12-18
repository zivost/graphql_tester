module.exports = {
  Query: {
    pet: (_, { id }, { dataSources }) => dataSources.petStoreAPI.getPetById(id),
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
