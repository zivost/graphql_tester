const { RESTDataSource } = require('apollo-datasource-rest');

function petReducer({ id, name, status }) {
  return {
    id,
    name,
    status,
  };
}

class PetStoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://petstore.swagger.io/v2/';
  }

  async getPetById(id) {
    const res = await this.get(`pet/${id}`);
    return petReducer(res);
  }

  async createPet({ name, status }) {
    const id = Date.now();
    const res = await this.post('pet', { id, name, status });
    return petReducer(res);
  }
}

module.exports = PetStoreAPI;
