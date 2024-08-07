const carrito = [];

const productos = [
    {
        id: "zapa-1",
        titulo: "Nike SB Dunk Court Purple",
        precio: 65,
        img: "./assets/dunkpurple.png",
    },
    {
        id: "zapa-2",
        titulo: "Nike SB Dunk Pro Wolf Grey",
        precio: 150,
        img: "./assets/dunkwolfgrey.png",
    },
    {
        id: "zapa-3",
        titulo: "Nike SB Dunk Stranglove",
        precio: 900,
        img: "./assets/dunkstranglove.png",
    },
    {
        id: "zapa-4",
        titulo: "Nike SB Dunk Purple Lobster",
        precio: 1100,
        img: "./assets/dunkpurplelobster.png",
    },
    {
        id: "zapa5",
        titulo: "Nike SB Dunk Ben & Jerry's",
        precio: 1250,
        img: "./assets/dunkbenyjerrys.png",
    },
    {
        id: "zapa6",
        titulo: "Nike SB Dunk Travis Scott",
        precio: 1330,
        img: "./assets/dunktravis.png",
    },
];

const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");


productos.forEach((producto) => {

    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-img" src="${producto.img}" alt="">
        <h3>${producto.titulo}</h3>
        <p>$${producto.precio}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("producto-btn");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => {
        agregarAlCarrito(producto);
    })

    div.append(button);
    contenedorProductos.append(div);
});

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove("d-none");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>$${producto.precio}</p>
            `;

            let button = document.createElement("button");
            button.classList.add("carrito-producto-btn");
            button.innerText = "✖️";
            button.addEventListener("click", () => {
                borrarDelCarrito(producto);
            })

            div.append(button);
            carritoProductos.append(div);
        })
    }
    actualizarTotal();
}

function borrarDelCarrito(producto) {
    const indice = carrito.findIndex((item) => item.id === producto.id);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarTotal() {
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    carritoTotal.innerText = "$" + total;
}