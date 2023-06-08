const products = [
    {
        id: 1,
        name: "iphone",
        price: 500, 
        stock: 25,
        description: "phone"
    },
    {
        id: 2,
        name: "ipod",
        price: 200, 
        stock: 25,
        description: "pod"
    },
    {
        id: 3,
        name: "ipad",
        price: 400, 
        stock: 25,
        description: "pad"
    },
    {
        id: 4,
        name: "mac book",
        price: 700, 
        stock: 25,
        description: "pc"
    }
]

export function getProducts(){
    return products
}

export function getProductById({id}){
    //el + pasa el id a numero
    const product = products.find(p => p.id === +id)
    return product
}

export function createProduct({data}){
    const id = products.length ? products[products.length-1].id + 1: 1
    const prod = {id, ...data}
    products.push(prod)
    return prod
}

export function updateProduct({id, data}){
    const product = products.find(p => p.id === +id)
    const prod = {...product, ...data}
    products.push(prod)
    return prod
}

export function deleteProduct({id}){
    const product = products.find(p => p.id === +id)
    const del = products.splice(id-1, 1);
    return product
}




