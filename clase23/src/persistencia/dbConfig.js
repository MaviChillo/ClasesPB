import mongoose from 'mongoose'

const URI =
  'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/routerDB45?retryWrites=true&w=majority'
try {
  await mongoose.connect(URI)
  console.log('Conectado a la base de datos')
} catch (error) {
  console.log(error)
}
