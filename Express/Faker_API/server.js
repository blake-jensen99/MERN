const express = require("express");
const app = express();
const {faker} = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumer: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName:faker.name.firstName(),
        id: faker.datatype.uuid()
    }
    return newUser
}

const createCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany
}

const newFakeUser = createUser()

const newFakeCompany = createCompany()

const company_user = [newFakeUser, newFakeCompany]


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.get("/api/users/new", (req, res) => {
  res.json( newFakeUser );
});
app.get("/api/companies/new", (req, res) => {
  res.json( newFakeCompany );
});
app.get("/api/user/company", (req, res) => {
  res.json( company_user );
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
