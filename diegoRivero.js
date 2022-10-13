let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  let crd = pos.coords;
  let ver_clima = document.getElementById("clima");

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=7b934f7bb113c4ac4e2883bb5c2d303d&lang=es&units=metric`)
      .then(response => response.json())
      .then(data =>{
       // console.log(data);
       let icon =data.weather[0].icon
       //console.log(icon);
        ver_clima.innerHTML = `<h3>Clima Local</h3>
                               <ul>
                               <li> Ubicacion: ${data.name}</li>
                               <li> Temperatura: ${data.main.temp}</li>
                               <img  width: 15% src='icons/${icon}.png'</img>
                               </ul>`
      }
     )

/*

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');*/
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);



const form_registro = document.getElementById("registrarse");
const registro_nombre = document.getElementById("nombre");
const registro_apellido = document.getElementById("apellido");
const registro_doc_id = document.getElementById("doc_id");
const registro_direccion = document.getElementById("domicilio");
const registro_pass = document.getElementById("password");
//const alerta_registro = document.getElementById("alerta-registro")
const reg_form = document.getElementById("reg-form");
const form_login = document.getElementById("log_usuario");
const login_usuario = document.getElementById("usuario");
const login_pass = document.getElementById("contraseña");
const id_error = document.getElementById("error")
let registro_usuario = [];
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

class Usuario {
  constructor(nombre, apellido, doc_id, direccion, password) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.doc_id = doc_id;
    this.direccion = direccion;
    this.password = password;
  }
}

form_registro.addEventListener("click", (e) => {

  e.preventDefault();

  if (registro_nombre.value != "" && registro_apellido.value != "" && registro_doc_id.value != "" && registro_direccion.value != "" && registro_pass.value != "") {
    let new_user = new Usuario(registro_nombre.value, registro_apellido.value, registro_doc_id.value, registro_direccion.value, registro_pass.value);

    registro_usuario.push(new_user);
    //console.log(registro_usuario);  
    
    Swal.fire({
      showClass: {
        popup: 'animate__animated animate__backInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__backOutLeft'
      },
      confirmButtonText: 'OK',
      icon: 'success',
      title:`Bienvenido ${registro_nombre.value} , su usuario es ${doc_id.value}`
      
    }
    
    )
    reg_form.innerHTML = `<h3>Gracias por registrarte</h3>`;
  } else {
    //alerta_registro.innerHTML = `<p> Error : Verifique que no quede ninguna opcion vacia`;
    Swal.fire({
      showClass: {
        popup: 'animate__animated animate__backInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__backOutRight'
      },
      cancelButtonText: 'OK',
      icon:"error",
      title:"ERROR",
      text: `Verifique que no quede ninguna opcion vacia`
    })
  }
})

form_login.addEventListener("submit", (e) => {
  e.preventDefault();

  let usuario_reg = login_usuario.value;
  let pass_reg = login_pass.value;

  for (let user_id of registro_usuario) {
    if (usuario_reg == user_id.doc_id && pass_reg == user_id.password) {
      //id_error.innerHTML = `<p>Bienvenido ${registro_nombre.value}</p>`
      const usuario_JSON = JSON.stringify(registro_nombre.value)
      localStorage.setItem("usuario", usuario_JSON);
      Swal.fire({
     
        showClass: {
          popup: 'animate__animated animate__backInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__backOutLeft'
        },
        confirmButtonText: 'OK',
        icon: 'success',
        title:`Bienvenid@ ${registro_nombre.value}`
      })  
      form_login.innerHTML = `<span>USUARIO: ${registro_nombre.value}</span>`
      form_login.style.color = "white"
      reg_form.innerHTML = `<h3><a href="#carrito">Ir al carrito de ${registro_nombre.value}</a></h3>`
                            
                       
    } else {
      //id_error.innerHTML = `<p>NO COINCIDE USUARIO Y CONTRASEÑA, INTENTE NUEVAMENTE</p>`
      Swal.fire({
        showClass: {
          popup: 'animate__animated animate__backInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__backOutRight'
        },
        cancelButtonText: 'OK',
        icon:"question",
        title:"ERROR",
        text: `NO COINCIDE USUARIO Y CONTRASEÑA, INTENTE NUEVAMENTE`
      })
    }
  }
  
})

/*let nombre_usuario = document.getElementById("nombre_usuario");
let user = localStorage.getItem("usuario");
nombre_usuario.innerText = user;*/

const productos = [{ 
  "id": 1,
  "name": "Camiseta AGUADA",
  "precio": 3500, 
  "img": "imagenes/aguada-1.png", 
  "cantidad": 1, 
  "talle": "" },


{
  "id": 2,
  "name": "Camiseta BIGUA",
  "precio": 3500, 
  "img": "imagenes/bigua-1.png", 
  "cantidad": 1, 
  "talle": "" 
},
{ 
  "id": 3,
  "name": "Camiseta BOHEMIOS",
  "precio": 3500, 
  "img": "imagenes/bohemios-1.png", 
  "cantidad": 1, 
  "talle": "" 
},
{ 
  "id": 4,
  "name": "Camiseta COLÓN",
  "precio": 3500, 
  "img": "imagenes/colon-1.png", 
  "cantidad": 1, 
  "talle": "" 
},
{ 
  "id": 5,
  "name": "Camiseta CORDÓN",
  "precio": 3500, 
  "img": "imagenes/cordon-1.png", 
  "cantidad": 1, 
  "talle": "" 
},
{ 
  "id": 6,
  "name": "Camiseta FÉNIX",
  "precio": 3500, 
  "img": "imagenes/fenix-1.png", 
  "cantidad": 1, 
  "talle": "" 
},

{ 
"id": 7,
"name": "Camiseta H. MACABI",
"precio": 3500, 
"img": "imagenes/macabi-1.png", 
"cantidad": 1, 
"talle": "" 
},

{ 
"id": 8,
"name": "Camiseta MALVÍN",
"precio": 3500, 
"img": "imagenes/malvin-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 9,
"name": "Camiseta NACIONÁL",
"precio": 3500, 
"img": "imagenes/nacional-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 10,
"name": "Camiseta OLÍMPIA",
"precio": 3500, 
"img": "imagenes/olimpia-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 11,
"name": "Camiseta OLIVOL",
"precio": 3500, 
"img": "imagenes/olivol-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 12,
"name": "Camiseta PEÑARÓL",
"precio": 3500, 
"img": "imagenes/peñarol-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 13,
"name": "Camiseta SAYÁGO",
"precio": 3500, 
"img": "imagenes/sayago-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 14,
"name": "Camiseta D.SPORTING",
"precio": 3500, 
"img": "imagenes/sporting-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 15,
"name": "Camiseta TROUVILLE",
"precio": 3500, 
"img": "imagenes/trouville-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 16,
"name": "Camiseta URUNDAY U.",
"precio": 3500, 
"img": "imagenes/urunday-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 17,
"name": "Camiseta URUPÁN",
"precio": 3500, 
"img": "imagenes/urupan-1.png", 
"cantidad": 1, 
"talle": "" 
},
{ 
"id": 18,
"name": "Camiseta WELCOME",
"precio": 3500, 
"img": "imagenes/welcome-1.png", 
"cantidad": 1, 
"talle": "" 
}
]

let talles = ["S", "M", "L", "XL"]

const contenedor_productos = document.querySelector(".contenedor-compra");
let tabla = document.getElementById("tbody");
let tabla_total = document.getElementById("tbody2");
let orden_pedido = [];
let total_a_pagar = [];
//creo renderizacion de los productos, si modifico o agrego se actualiza automaticamente
function mostrar_productos() {
  productos.forEach(function (producto) {
    const div_productos = document.createElement("div");
    div_productos.classList.add("card")

    const imagen_producto = document.createElement("img");
    imagen_producto.src = producto.img;
    imagen_producto.className = "imagen-producto";

    const titulo_producto = document.createElement("h2");
    titulo_producto.textContent = producto.name;
    titulo_producto.classList.add("titulo-producto");
    const talle_producto = document.createElement("select");
    talle_producto.id = "seleccion-talle"
    talle_producto.innerHTML = `<select onchange="cambio_talle()" name="t"><option value="S" >S</option><option value="M" >M</option><option value="L" >L</option><option value="XL">XL</option></select>`

    const precio_producto = document.createElement("h3");
    precio_producto.innerHTML = `<h3> $ ${producto.precio}`

    const btn_compra = document.createElement("button");
    btn_compra.textContent = "Agregar al pedido";
    btn_compra.classList.add("btn-comprar");
    btn_compra.addEventListener("click", function () {
      agregar_carrito(producto.id, talle_producto);
      Toastify({

        text: "Se agrego al carrito",
        duration: 3000,
        style:{
          fontSize: "20px",
          color:"whiste",
          background: "linear-gradient(#FA824C,#342e37)"

        }
        
        }).showToast();
    })


    div_productos.appendChild(imagen_producto);
    div_productos.appendChild(titulo_producto);
    div_productos.appendChild(precio_producto);
    div_productos.appendChild(talle_producto);
   
    div_productos.appendChild(btn_compra);

    contenedor_productos.appendChild(div_productos);

  });
}


//cambio de talle
//document.addEventListener("change", cambio_talle)
function ver_carrito() {
  let carrito = document.getElementById("carrito");
  if (carrito.style.display != "none") {
    carrito.style.display != "none"
  } else {
    carrito.style.display != "flex"
  }

}

document.addEventListener("DOMContentLoaded", function () {

  mostrar_productos();
  ver_pedido();

})



function agregar_carrito(id, talle) {
  // obtener el carrito actual
  let orden_pedido = JSON.parse(localStorage.getItem("carrito")) || [];

  let fila_carrito;
  const compra_productos = productos.find((producto) => {
    return producto.id === id
  });
  compra_productos.talle = talle.value;

  // tengo que saber si el matrix ya existe o tengo que crear una linea nueva en el carro
  const matrix_id = `${id}@${talle.value}`
  let existe_combinacion = orden_pedido.find(x => x.matrix_id === matrix_id)
  if (existe_combinacion ) {
    existe_combinacion .cantidad++;
    // buscar fila y actualizar
    // https://www.geeksforgeeks.org/htmlcollection-for-loop/ - como inicializar un array comun en base al array que retorna  getElementsByTagName
    let linea_carrito = Array.from(document.getElementsByTagName('tr')).find(x => x.getAttribute('line_id') == existe_combinacion.line_id)
    // actualizo la cantidad
    linea_carrito.cells[2].innerHTML = existe_combinacion.cantidad
  }
  else {
    // creo un identificador con la mezcla del producto con el talle
    compra_productos.matrix_id = matrix_id;
    // configuro id de linea para saber cual borrar
    compra_productos.line_id = (orden_pedido.length || 0) + 1;
    orden_pedido.push(compra_productos);

    // crear fila
    fila_carrito = document.createElement("tr");
    fila_carrito.setAttribute('line_id', compra_productos.line_id)
    fila_carrito.innerHTML += `<td><img class="imagen-productos" src="${compra_productos.img}"></img></td>
                              <td>${compra_productos.name}</td>
                              <td>${compra_productos.cantidad}</td>
                              <td>${compra_productos.talle}</td>
                              <td> $ ${compra_productos.precio}</td>
                              <td><button class="btn-borrar">X</button></td>`;
    tabla.append(fila_carrito);
  }


  const carrito_JSON = JSON.stringify(orden_pedido);
  localStorage.setItem("carrito", carrito_JSON);



  // actualizar el precio total con precio * cantidad
  let total_precio_compra = orden_pedido.reduce((acumulador, objeto) => acumulador + (objeto.precio * objeto.cantidad), 0);

  let total_JSON = JSON.stringify(total_precio_compra);
  localStorage.setItem("a_pagar", total_JSON);
  let a_pagar = JSON.parse(localStorage.getItem("a_pagar"));

  tabla_total.innerHTML = "";

  let fila_total = document.createElement("tr");
  fila_total.innerHTML += `<td>TOTAL COMPRA :  $           ${a_pagar}</td>
                                 <button id = "btn-fin" class="btn-comprar">Finalizar Compra</button>`;



  tabla_total.append(fila_total);


  const btn_borra_fila = document.querySelectorAll(".btn-borrar");
  //console.log(btn_borra_fila.target);
  for (let boton of btn_borra_fila) {
    boton.addEventListener("click", borrar_fila)
  }
  let btn_final = document.getElementById("btn-fin")
  btn_final.addEventListener("click", compra_final)
}


//renderiza lo que queda en el carrito
function ver_pedido() {


  orden_pedido = JSON.parse(localStorage.getItem("carrito")) || [];
  total_a_pagar = JSON.parse(localStorage.getItem("a_pagar")) || [];
  tabla.innerHTML = "";

  orden_pedido.forEach((producto) => {
    const fila_carrito = document.createElement("tr");
    fila_carrito.setAttribute('line_id', producto.line_id)
    fila_carrito.innerHTML += `<td><img class="imagen-productos" src="${producto.img}"></img></td>
                               <td>${producto.name}</td>
                               <td>${producto.cantidad}</td>
                               <td>${producto.talle}</td>
                               <td> $ ${producto.precio}</td>
                               <td><button class="btn-borrar-fila">X</button></td>`;



    tabla.append(fila_carrito);

    tabla_total.innerHTML = "";
    let filas_total = document.createElement("tr");
    filas_total.innerHTML = `<td>TOTAL COMPRA :  $           ${total_a_pagar}</td>
                                 <button id="btn-fin" class="btn-comprar">Finalizar Compra</button>`;



    tabla_total.append(filas_total);
    let btn_fin = document.getElementById("btn-fin")
    btn_fin.addEventListener("click", compra_final)

    const btn_borra_fila = document.querySelectorAll(".btn-borrar-fila");
    //console.log(btn_borra_fila);
    for (let boton of btn_borra_fila) {
      boton.addEventListener("click", borrar_fila)
    }

  })
}

function borrar_fila(e) {
  let abuelo = e.target.parentNode.parentNode;
  let line_id = abuelo.getAttribute('line_id')
  let carrito = JSON.parse(localStorage.getItem("carrito"));

  // filtro la linea y asigno carrito nuevamente
  // revisar `!=` porque si uso `!==` tengo que pasar line_id a int
  carrito = carrito.filter(x => x.line_id != line_id)
  localStorage.setItem("carrito", JSON.stringify(carrito));
  abuelo.remove();
  Toastify({

    text: "Se borró del carrito",
    duration: 3000,
    style:{
      fontSize: "20px",
      color:"whiste",
      background: "linear-gradient(#FA824C,#342e37)"

    }
    
    }).showToast();
  // actualizar el precio total con precio * cantidad
  let total_precio_compra = carrito.reduce((acumulador, objeto) => acumulador + (objeto.precio * objeto.cantidad), 0);

  let total_JSON = JSON.stringify(total_precio_compra);
  localStorage.setItem("a_pagar", total_JSON);
  let a_pagar = JSON.parse(localStorage.getItem("a_pagar"));

  tabla_total.innerHTML = "";

  let fila_total = document.createElement("tr");
  fila_total.innerHTML += `<td>TOTAL COMPRA :  $           ${a_pagar}</td>
                                   <button id = "btn-fin"class="btn-comprar">Comprar</button>`;

  tabla_total.append(fila_total);
}

//funcion compra final que por ahora borra localstorage

function compra_final(e) {
  total_a_pagar = JSON.parse(localStorage.getItem("a_pagar")) || [];

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Te queda un ultimo paso...',
    text: `El total de tu compra es $ ${total_a_pagar}, deseas continuar?`,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'COMPRAR',
    cancelButtonText: 'CANCELAR',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      tabla.innerHTML ="";
      tabla_total.innerHTML ="";
      localStorage.clear();
      swalWithBootstrapButtons.fire(
        'GRACIAS POR TU COMPRA',
        'Que lo disfrutes',
        'success'
        )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'No pasa nada!',
        'Tu compra se puede modificar',
        'error'
      )
    }
  })
  
}
