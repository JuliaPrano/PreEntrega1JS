// (crear funcion)
function bienvenida(){
    alert ('Bienvenido a Bebidas Carolinas, tu distribuidora favorita');
    console.log ("Bienvenido a Bebidas Carolinas, tu distribuidora favorita");
}
// (llamado funcion)
bienvenida()

let entrada = parseInt(prompt("¡Ingresa un n° del 1 al 10 para ganar un descuento!"));
switch (entrada) {
   case "7":
      alert("Felicidades! Ganó un %10 de descuento en su compra!");
      break;
   default:
      alert("Lo sentimos, pruebe suerte de nuevo mañana ;)")
      break;
}

const edad = prompt('Ingrese su edad');
const mayoria = parseInt(edad) > 17
if (mayoria) {
    alert('Disfruten de nuestra web')
}
else {
    alert('Le informamos que no podrá acceder a comprar bebidas con alcohol')
}

// function aplicarDescuento(precioAlcohol, porcentajeDescuento) {
//     const montoADescontar = precioAlcohol / 100 * porcentajeDescuento
//     const precioFinal = precioAlcohol - montoADescontar
//     return precioFinal
//   }
// //   ----------------------------------------
// const precioAlcohol = parseFloat(prompt('ingrese el monto inicial'))
// const porcentajeDescuento = parseFloat(prompt('ingrese el descuento a aplicar'))

// const resultado = aplicarDescuento(precioAlcohol, porcentajeDescuento)
// alert(resultado)
alert('Gracias')