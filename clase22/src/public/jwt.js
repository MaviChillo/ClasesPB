
console.log('jwt front')

const formulario = document.getElementById('form')
const inputEmail = document.getElementById('email')
const inputPass = document.getElementById('password')
const buttonInfo = document.getElementById('buttonInfo')

formulario.onsubmit = (e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/jwt/login', {
        method: 'POST',
        body:JSON.stringify({
            email: inputEmail.value, 
            password: inputPass.value
        }),
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(response=>response.json())
    .then(response=>{
        localStorage.setItem('token', response.token)
    })
}

//local storage
// buttonInfo.onclick = ()=>{
//     fetch('http://localhost:3000/jwt/login', {
//         method: 'GET',
//         headers:{
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer' + localStorage.getItem('token')
//         },
//     })
// }


//cookies
buttonInfo.onclick = ()=>{
    fetch('http://localhost:3000/jwt/loginjwtPassport', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer' + localStorage.getItem('token')
        },
    })
}



