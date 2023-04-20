import {login} from '../login.js'


const user = 'coderUser'
const password = '123'

const pruebasTotales = 5
let pruebasPasadas = 0

//1. password vacio

const response1 = login(user)

if(response1==='No se ha proporcionado password'){
    console.log('test 1 paso')
    pruebasPasadas++
}else{
    console.log('test 1 fallo')
}

//2. user vacio

const response2 = login(null, password)

if(response2==='No se ha proporcionado user'){
    console.log('test 2 paso')
    pruebasPasadas++
}else{
    console.log('test 2 fallo')
}

//3. pass incorrecto

const response3 = login(user, '1234')

if(response3==='password incorrecta'){
    console.log('test 3 paso')
    pruebasPasadas++
}else{
    console.log('test 3 fallo')
}

//4. user incorrecto

const response4 = login('coderUserNot', password)

if(response4==='user incorrecto'){
    console.log('test 4 paso')
    pruebasPasadas++
}else{
    console.log('test 4 fallo')
}

//5. todo correcto

const response5 = login(user, password)

if(response5==='loggeado'){
    console.log('test 5 paso')
    pruebasPasadas++
}else{
    console.log('test 5 fallo')
}


console.log(`pasaron ${pruebasPasadas} pruebas de ${pruebasTotales} pruebas`)