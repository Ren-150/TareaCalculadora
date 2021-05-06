const botonNumeros = document.getElementsByName('numero')
const botonOpera = document.getElementsByName('operador');
const botonIgual = document.getElementById('IGUAL');
const botonClear = document.getElementById('CLEAR');
var resultado = document.getElementById('resultado');
var opeactual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonClear.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(opeactual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeactual;
    opeactual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeactual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case '^':
            calculo = Math.pow(anterior, actual);
            break;
        default:
            return;
    }
    opeactual = calculo;
    operacion = undefined;
    opeAnterior = '';
}


function agregarNumero(numero){
    opeactual = opeactual.toString() + numero.toString();
    actualizarDisplay();
}

function clear() {
    opeactual = "";
    opeAnterior = "";
    operacion = undefined;
}

function actualizarDisplay(){
    resultado.value = opeactual;
}

clear();