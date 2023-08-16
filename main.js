alert('Bienvenido a tu cronograma diario en la web')

        let tareasdiariasxdia =(prompt('cuantas tareas quieres realizar hoy?'))
        // while (isNaN(tareasdiariasxdia)) {
        //     tareasdiariasxdia = parseFloat(prompt('eso no es un numero, por favor, ingresalo nuevamente'))
        // }
        for (let cantdetaresyahechas = 0; cantdetarresQueYahice < tareasdiariasxdia; cantdetarresQueYahice = tareasdiariasxdia + 1) {
            alert('felicidades una tarea bien hecha!')
            alert('le sumo una a las ' + cantdetaresyahechas + ' que ya hice (total: ' + (cantdetarresQueYahice + 1))

        }