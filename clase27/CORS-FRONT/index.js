const boton = document.getElementById('boton')

boton.onclick = ()=>{
    fetch('http://localhost:3000')
    .then(res=>res.json())
    .then(res=>console.log((res)))
}