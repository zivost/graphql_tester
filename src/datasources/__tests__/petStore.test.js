const PetStoreAPI = require('../petStore');

const mocks = {
  get: jest.fn(),
  post: jest.fn(),
};

const ps = new PetStoreAPI();
ps.get = mocks.get;
ps.post = mocks.post;


test('gets pet', async () => {
  const id = 'id';
  const pet = { id, name: 'name', status: 'status' };
  mocks.get.mockResolvedValueOnce({ ...pet, other: 'other' });
  const res = await ps.getPetById(id);

  expect(res).toEqual(pet);
  expect(mocks.get).toBeCalledWith(`pet/${id}`);
});

test('creates pet', async () => {
  const petInput = { name: 'name', status: 'status' };
  const id = 'generated';
  const pet = { ...petInput, id };
  jest.spyOn(Date, 'now').mockReturnValueOnce(id);
  mocks.post.mockResolvedValueOnce({ ...pet, other: 'other' });
  const res = await ps.createPet(petInput);

  expect(res).toEqual(pet);
  expect(mocks.post).toBeCalledWith('pet', pet);
});
