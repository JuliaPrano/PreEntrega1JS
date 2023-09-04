// funciones
function darLaBienvenida() {
    alert('Bienvenido a Monica, tu agenda interactiva web');
    console.log("Bienvenido a Monica, tu agenda interactiva web");
}
// ---------------------------------

// uso de funcion de bienvenida
darLaBienvenida()
// -----------------------------------
const listaDeActividades = []
alert("Hagamos la lista de hoy!")
let cantidad = parseInt(prompt("¿Cuantas actividades vamos a terminar hoy?"))

for (let i = 0; i < cantidad; i++) {
    const entrada = prompt("Ingrese una por una")
    listaDeActividades.push(entrada.toUpperCase())
    // console.log(listaNombres.length)
}
alert(listaDeActividades.join("\n"))


//    ciclo por conteo (exacto)
const cantActividadesoXHacer = cantidad
let cantActividadesQYaHice = 0
while (cantActividadesQYaHice < cantActividadesoXHacer) {
    alert('una actividad lista esta, vos podes con la siguiente!')
    cantActividadesQYaHice = cantActividadesQYaHice + 1
    alert('ya complete ' + cantActividadesQYaHice + ' tareas')
}




// ------------------------------------------------------------
function AhorrarSueldo(sueldoMensual, porcentajeParaAhorrar) {
    const montoARetirar = sueldoMensual / 100 * porcentajeParaAhorrar
    const montoParaUsar = sueldoMensual - montoARetirar
    const montoFinal = sueldoMensual - montoParaUsar
    return montoFinal
}

alert("Como nueva actualización te ayudamos a calcular cuanto ahorrar de tu sueldo!")
let respuesta = prompt('Le gustaría probarlo?')
if (respuesta === 'si') {
    const sueldoMensual = parseFloat(prompt('ingrese su sueldo mensual'))
    const porcentajeParaAhorrar = parseFloat(prompt('ingrese el porcentaje que quiere'))
    const resultado = AhorrarSueldo(sueldoMensual, porcentajeParaAhorrar)
    alert("$" + resultado + " es lo que podrías ahorrar de tu sueldo")
}
else if (respuesta === "no") {
    alert(';)');
}
else {
    alert("error");
}

// ----------------------
class Mandado {
    constructor(ingreso, destino) {
      this.ingreso = ingreso
      this.destino = destino
    }
  }
const listaMandados = []
alert("Aquí puede ingresar destino y mandado por hacer")
let totalMandados = parseInt(prompt("Cuantos mandados quiere ingresar?"))

for (let i = 0; i < totalMandados; i++) {
    const ingreso = prompt("Igrese nuevo mandado por hacer")
    const destino = parseFloat(prompt('Destino'))
    const mand = new Mandado(ingreso, destino)
    listaMandados.push(mand)
}
console.log(listaMandados.join("\n"))


alert('Gracias, disfruten nuestra web')