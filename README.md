# graphql-petstore

GraphQL interface for the RESTful API [http://petstore.swagger.io/#/pet](http://petstore.swagger.io/#/pet)

### Sample mutation

```gql
mutation {
  createPet(pet: {
    name: "ziggy",
    status: sold,
  }) {
    success,
    pet {
      id,
      name,
      status
    }
  }
}
```

### Sample query

```gql
query {
  pet(id: 1576646314737) {
    id,
    name,
    status
  }
}
```
