// Recuperar los datos de local storage
const productos = JSON.parse(localStorage.getItem('productos')) || []
const total = localStorage.getItem('total') || 0

// Mostrar el resumen de la compra
const resumen = document.getElementById("detalleDeLaCompra")
let resumenTexto = ""

// usar un bucle for tradicional para los productos
for(let i=0; i < productos.length; i++) {
    const producto = productos[i]
    resumenTexto += `${producto.nombre}: ${producto.precio}<br>`
}

resumenTexto += `<br>Total a pagar: $${total}`
resumen.innerHTML = resumenTexto