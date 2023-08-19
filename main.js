alert('Bienvenido a Bebidas Carolinas, tu distribuidora favorita')

let edad = parseInt(prompt('Ingrese su edad'));
if (edad > 17) {
    alert('Disfruten de nuestra web')
}
else {
    alert('Lo sentimos no podras comprar en nuestra web')
}
let entrada = prompt("Desea ver precio de bebidas con o sin alcohol?");
switch (entrada) {
    case "con":
        alert("Bebidas con alcohol a partir de $500");
        break;
    case "sin":
        alert("Bebidas sin alcohol a partir de $500");
        break;
    default:
        alert("Por favor, solo responda: con o sin")
        break;
}

// ------------------------------------
function aplicarDescuento(precioAlcohol, porcentajeDescuento) {
    const montoADescontar = precioAlcohol / 100 * porcentajeDescuento
    const precioFinal = precioAlcohol - montoADescontar
    return precioFinal
  }
//   ----------------------------------------
const precioAlcohol = parseFloat(prompt('ingrese el monto inicial'))
const porcentajeDescuento = parseFloat(prompt('ingrese el descuento a aplicar'))

const resultado = aplicarDescuento(precioAlcohol, porcentajeDescuento)
alert(resultado)
alert('Gracias')