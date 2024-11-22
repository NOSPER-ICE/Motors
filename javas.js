const carritoFile = 'carrito.json';

function cargarCarrito() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', carritoFile, false);
  xhr.send();
  if (xhr.status === 200) {
    return JSON.parse(xhr.responseText);
  } else {
    return [];
  }
}

let carrito = cargarCarrito();

function agregarAlCarrito(idProducto) {
  carrito.push({ id: idProducto, cantidad: 1 });
  const archivo = new Blob([JSON.stringify(carrito)], { type: 'application/json' });
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', carritoFile, false);
  xhr.send(archivo);
  console.log("Producto agregado al carrito:", carrito);
}

function mostrarCarrito() {
  console.log("Carrito:", carrito);
}
function mostrarCarrito() {
  console.log("Carrito:", carrito);
  function agregarAlCarrito(idProducto) {
    // Carga el carrito desde el almacenamiento local
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Agrega el producto al carrito
    carrito.push({ id: idProducto, cantidad: 1 });
    
    // Actualiza el carrito en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    console.log("Producto agregado al carrito:", carrito);
  }
}
fetch('ser.php', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: `idProducto=${idProducto}&cantidad=${cantidad}`
})
.then(response => response.text())
.then(message => console.log(message))
.catch(error => console.error(error));
const botonCarrito = document.getElementById('boton-carrito');

botonCarrito.addEventListener('click', () => {
  window.location.href = 'imagen-en-desarrollo.jpg';
});
const botonCarrito = document.getElementById('boton-carrito');
const modalCarrito = document.getElementById('modal-carrito');

botonCarrito.addEventListener('click', () => {
  modalCarrito.style.display = 'block';
});