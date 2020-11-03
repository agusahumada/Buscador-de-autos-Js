//Variables
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); //Muestra los autos al cargar

  //Llena las opciones de años
  llenarSelect();
});

//funciones

function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
         ${marca} ${modelo} - ${year} - ${puertas} Puertas - Color: ${color} - Transmisión: ${transmision} - Precio: ${precio}`;

    //Insertar en el html
    resultado.appendChild(autoHTML);
  });
}

//Genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agrega las opciones de año al select
  }
}
