import { faker } from "@faker-js/faker"

faker.setLocale('es_MX')

export const generateUsers = () => {
    const cart = []
    for (let i = 1; i < 5; i++) {
        const product = generateProducts()
        cart.push(product)
    }
    const user = {
        id: faker.database.mongodbObjectId(),
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        gender : faker.name.gender(),
        sex: faker.name.sex(),
        phone : faker.phone.number(),
        email : faker.internet.email(),
        password : faker.internet.password(),
        address: faker.address.streetAddress(),
        cart
    }
    return user
}


export const generateProducts = () => {
    const product = {
        id: faker.database.mongodbObjectId(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        description : faker.commerce.productDescription(),
        category : faker.commerce.department(),
        stock : faker.random.numeric(2),
        image: faker.image.image()
    }
    return product
}