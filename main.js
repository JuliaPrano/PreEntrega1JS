// funciones
function bienvenida() {
    alert('Bienvenido a Bebidas Carolinas, tu distribuidora favorita');
    console.log("Bienvenido a Bebidas Carolinas, tu distribuidora favorita");
}
// ---------------------------------
function PresupuestoPrecioInvitados(CantidadInvitados, PrecioDeBebidaxPersona) {
    const Presupuesto = CantidadInvitados * PrecioDeBebidaxPersona
    return Presupuesto
}


// uso de funcion bienvenida
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

// uso funcion de calculo

let respuesta = prompt('Le gustaría un estimativo de cuanto podrían costar las bebidas para su fiesta?')
if (respuesta === 'si') {
    const CantidadInvitados = parseInt(prompt('Cuantos asistirán a su fiesta?'))
    const PrecioDeBebidaxPersona = parseInt(prompt('Desea un presupuesto de 600, 750 o 875 por persona?'))
    const resultado = PresupuestoPrecioInvitados(CantidadInvitados, PrecioDeBebidaxPersona);
    alert("Su presupuesto total para unas "+CantidadInvitados+" personas es de $"+resultado)
}
else {
    alert('disfrute nuestra web ;)');
}


const edad = prompt('Ingrese su edad');
const mayoria = parseInt(edad) > 17
if (mayoria) {
    alert('Disfruten de nuestra web')
}
else {
    alert('Le informamos que no podrá acceder a comprar nuestras bebidas con alcohol')
}

alert('Gracias')