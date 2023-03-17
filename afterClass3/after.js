import  express  from "express";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const productos = [
    {
        id: 1, 
        nombre: 'iphone', 
        price: 500
    },
    {
        id: 2, 
        nombre: 'ipad', 
        price: 400
    },
    {
        id: 3, 
        nombre: 'ipod', 
        price: 200
    },
    {
        id: 3, 
        nombre: 'mac', 
        price: 700
    },
]


const carritos = [
    {
        id: 1, 
        productos: [
            {
                producto:1, 
                quantity: 5,
            },
        ],
    },
]


app.post('/api/carts/:idCarrito/products/:idProducto', (req, res)=>{
    const {idCarrito, idProducto} = req.params
    const carrito = carritos.find(c=>c.id === parseInt(idCarrito))
    const producto = productos.find(p=>p.id ===parseInt(idProducto))
    if(!producto){
        res.send('error')
    }
    const index = carrito.productos.findIndex(p=>p.producto===parseInt(idProducto))
    if(index===-1){
        carrito.productos.push({producto:parseInt(idProducto), quantity: 1})
    }else{
        carrito.productos[index].quantity++
    }
    // await fs.promises.writeFile(path, JSON.stringify(carritos))
    res.json({carritos})
})



app.listen(8081, ()=>{
    console.log('escuchando al puerto 8081')
})