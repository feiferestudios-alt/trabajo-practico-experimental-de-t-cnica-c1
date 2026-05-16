const selectDiasProduccion = document.getElementById('id-select-dias')
const btnCargarProduccion = document.getElementById('id-btn-cargar-produccion')
const btnPresentar = document.getElementById('id-btn-presentar-produccion')
const txtPresentarProduccion = document.getElementById('id-listado-produccion')
const btnMayorProduccion = document.getElementById('id-btn-mayor-produccion')
const txtMayorProduccion = document.getElementById('id-txt-mayor-produccion')
const btnMenorProduccion = document.getElementById('id-btn-menor-produccion')
const txtMenorProduccion = document.getElementById('id-txt-menor-produccion')
const btnSumaProduccion = document.getElementById('id-btn-suma-produccion')
const txtSumaProduccion = document.getElementById('id-txt-suma-produccion')
const btnPromedioProduccion = document.getElementById('id-btn-promedio-produccion')
const txtPromedioProduccion = document.getElementById('id-txt-promedio-produccion')
const btnEncimaPromedioProduccion = document.getElementById('id-btn-encima-promedio-produccion')
const txtEncimaPromedioProduccion = document.getElementById('id-txt-encima-promedio-produccion')
const btnDiasCriticosProduccion = document.getElementById('id-btn-dias-criticos-produccion')
const txtDiasCriticosProduccion = document.getElementById('id-txt-dias-criticos-produccion')
const btnDiasRepetidosProduccion = document.getElementById('id-btn-dias-repetidos-produccion')
const txtDiasRepetidosProduccion = document.getElementById('id-txt-dias-repetidos-produccion')

let vectorproduccion = [];
const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

btnCargarProduccion.addEventListener('click',function(e){
    const dimension = selectDiasProduccion.value
    vectorproduccion = []
    cargarProduccion(dimension)
    console.log(vectorproduccion)
})

btnPresentar.addEventListener('click',function(e){
    txtPresentarProduccion.value = vectorproduccion.join(',')
})

btnMayorProduccion.addEventListener('click', function(e){
    const indice = mayorProduccion()
    const mayor = vectorproduccion[indice]
    const dia = diasSemana[indice]

    txtMayorProduccion.value = 'Dia; ' + dia + ' valor ' + mayor
})

btnMenorProduccion.addEventListener('click', function(e){
    const indice = menorProduccion()
    const menor = vectorproduccion[indice]
    const dia = diasSemana[indice]

    txtMenorProduccion.value = 'Dia; ' + dia + ' valor ' + menor
})

btnSumaProduccion.addEventListener('click', function(e){
    const suma = sumaProduccion()
    txtSumaProduccion.value = suma
})

btnPromedioProduccion.addEventListener('click', function(e){
    const total = promedioProduccion()
    txtPromedioProduccion.value = total.toFixed(2)
})

btnEncimaPromedioProduccion.addEventListener('click', function(e){
    const encimadelpromedio = encimaPromedioProduccion()
    txtEncimaPromedioProduccion.value = 'Dias encima del promedio: ' + encimadelpromedio
})

btnDiasCriticosProduccion.addEventListener('click', function(e){
    const produccioncritica = diasCriticosProduccion()
    txtDiasCriticosProduccion.value = 'Dias de produccion critica: ' + produccioncritica
})

btnDiasRepetidosProduccion.addEventListener('click', function(e){
    const diasConProduccionRepetida = diasrepetidosProduccion()
    txtDiasRepetidosProduccion.value = diasConProduccionRepetida
})

function cargarProduccion(dimension){
    for (let i= 0; i < dimension; i++){
        const numAleatorio = Math.ceil(Math.random() * 1000);
        vectorproduccion[i] = numAleatorio
    }
}

function mayorProduccion(){
    let mayor = 0;
    let index = 0;
    for(let i= 0; i< vectorproduccion.length; i++){
        const produccion = vectorproduccion[i]
        if (produccion > mayor){
            mayor = produccion
            index = i
        }
    }

    return index
}

function menorProduccion(){
    let menor = vectorproduccion[0];
    let index = 0;
    for(let i= 0; i< vectorproduccion.length; i++){
        const produccion = vectorproduccion[i]
        if (produccion < menor){
            menor = produccion
            index = i
        }
    }

    return index
}

function sumaProduccion(){
    let total = 0;
    for(let i= 0; i< vectorproduccion.length; i++){
        total = vectorproduccion[i] + total
    }

    return total

}

function promedioProduccion(){
    let total = 0;
    let promedio =0;
    for(let i= 0; i< vectorproduccion.length; i++){
        total = vectorproduccion[i] + total
        promedio = total/vectorproduccion.length

    }

    return promedio

}

function encimaPromedioProduccion(){
    const promedio = promedioProduccion()
    let mayoralpromedio = 0
    for(let i =0 ; i < vectorproduccion.length; i++){
        if(vectorproduccion[i] > promedio){
        mayoralpromedio ++
        }
    }

    return mayoralpromedio
}

function diasCriticosProduccion(){
    let diascriticos = 0;
    for(let i = 0; i < vectorproduccion.length; i++){
        if( vectorproduccion[i] < 100){
        diascriticos ++
        }
    }

    return diascriticos
}

function diasrepetidosProduccion(){
    let precioactual = 0;
    let preciosiguiente= 0;
    let rep =0;
    let respuesta = '';
    for(let i =0; i < vectorproduccion.length-1 ; i++){
        precioactual = vectorproduccion[i]
        preciosiguiente = vectorproduccion[i+1]
        if( precioactual == preciosiguiente){
            rep++
        } if(rep > 1){
            respuesta = 'Existen dias con produccion repetida'

        }else{
            respuesta = 'No existen dias con produccion repetida'
        }
    }
    return respuesta
}