const { RESTDataSource } = require('apollo-datasource-rest');
const iso = require("./iso");

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
  
  async findPetsByStatus(status) {
    const res = await this.get(`pet/findByStatus?status=${status}`);
    return res;
  }

  async iso(s) {
    console.log(iso.length)
    return iso.default
  }

  async createPet({ name, status }) {
    const id = Date.now();
    const res = await this.post('pet', { id, name, status });
    return petReducer(res);
  }
}

module.exports = PetStoreAPI;
