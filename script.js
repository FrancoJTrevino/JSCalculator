var num = "";
var igualPresionado;
var operacionEnUso = "";
var parent = false;
const numero = (n)=> {
    if(igualPresionado == true){
        num = "";
        limpiar();
        igualPresionado = false;
    }
    if(document.getElementById("muestra").innerHTML == "0"){
        document.getElementById("muestra").innerHTML = n
    }
    else{
        document.getElementById("muestra").innerHTML += n
    }
    num += n;
    operacionEnUso = "";
}
const limpiar = ()=> {
    document.getElementById("muestra").innerHTML = 0;
    igualPresionado = false;
    num = "";
    operacionEnUso = "";
    parent = false;
}
const punto = ()=> {
    document.getElementById("muestra").innerHTML += ".";
    num += ".";
}
const parentesis1 = ()=> {
    if(parent == false){
        switch(operacionEnUso){
            case 'suma': case 'resta': case 'multiplicacion': case 'division':
                document.getElementById('muestra').innerHTML += '(';
            break;
            default:
                let str1 = document.getElementById('muestra').innerHTML;
                let str2 = '(';
                let str3 = str2.concat(str1);
                document.getElementById('muestra').innerHTML = str3;
        }
        parent = true;
    }
}
const parentesis2 = ()=> {
    if(parent == true){
        document.getElementById('muestra').innerHTML += ')';
        parent = false;
    }
}
const borrar = ()=> {
    switch(operacionEnUso){
        case 'suma': case 'resta': case 'multiplicacion': case 'division':
            let a = document.getElementById("muestra").innerHTML;
            let b = a.length - 3;
            document.getElementById("muestra").innerHTML = a.slice(0,b);
            operacionEnUso = "";
            break;
        default:
            let x = document.getElementById("muestra").innerHTML;
            if(x.length == 1 || igualPresionado == true){
                document.getElementById('muestra').innerHTML = "0";
            }else{
                document.getElementById('muestra').innerHTML = x.slice(0,(x.length - 1));
            }
    }
}
const sumar = ()=> {
    switch(operacionEnUso){
        case 'resta': case 'multiplicacion': case 'division':
            let a = document.getElementById("muestra").innerHTML;
            let b = a.length - 3;
            document.getElementById("muestra").innerHTML = a.slice(0,b);
            document.getElementById("muestra").innerHTML += " + ";
            igualPresionado = false;
            operacionEnUso = 'suma';
        break;
    };
    if(document.getElementById("muestra").innerHTML == "No es posible dividir entre 0"){
        document.getElementById("muestra").innerHTML = "0 + "
        operacionEnUso = 'suma';
        igualPresionado = false;
    }else if(operacionEnUso != 'suma'){
        document.getElementById("muestra").innerHTML += " + ";
        operacionEnUso = 'suma';
        igualPresionado = false;
    }
    num = "";
}
const restar = ()=> {
    switch(operacionEnUso){
        case 'suma': case 'multiplicacion': case 'division':
            let a = document.getElementById("muestra").innerHTML;
            let b = a.length - 3;
            document.getElementById("muestra").innerHTML = a.slice(0,b);
            document.getElementById("muestra").innerHTML += " - ";
            igualPresionado = false;
            operacionEnUso = 'resta';
        break;
    };
    if (document.getElementById("muestra").innerHTML == "No es posible dividir entre 0"){
        document.getElementById("muestra").innerHTML = "0 - ";
        operacionEnUso = 'resta';
        igualPresionado = false;
    }else if(operacionEnUso != 'resta'){
        document.getElementById("muestra").innerHTML += " - ";
        igualPresionado = false;
        operacionEnUso = 'resta';
    }
    num = "";
}
const multiplicar = ()=> {
    switch(operacionEnUso){
        case 'suma': case 'resta': case 'division':
            let a = document.getElementById("muestra").innerHTML;
            let b = a.length - 3;
            document.getElementById("muestra").innerHTML = a.slice(0,b);
            document.getElementById("muestra").innerHTML += " * ";
            igualPresionado = false;
            operacionEnUso = 'multiplicacion';
        break;
    };
    if (document.getElementById("muestra").innerHTML == "No es posible dividir entre 0"){
        document.getElementById("muestra").innerHTML = "0 * ";
        operacionEnUso = 'multiplicacion';
        igualPresionado = false;
    }else if(operacionEnUso != 'multiplicacion'){
        document.getElementById("muestra").innerHTML += " * ";
        igualPresionado = false;
        operacionEnUso = 'multiplicacion';
    }
    num = "";
}
const dividir = ()=> {
    switch(operacionEnUso){
        case 'suma': case 'resta': case 'multiplicacion':
            let a = document.getElementById("muestra").innerHTML;
            let b = a.length - 3;
            document.getElementById("muestra").innerHTML = a.slice(0,b);
            document.getElementById("muestra").innerHTML += " / ";
            igualPresionado = false;
            operacionEnUso = 'division';
        break;
    };
    if (document.getElementById("muestra").innerHTML == "No es posible dividir entre 0"){
        document.getElementById("muestra").innerHTML = "0 / ";
        operacionEnUso = 'division';
        igualPresionado = false;
    }else if(operacionEnUso != 'division'){
        document.getElementById("muestra").innerHTML += " / ";
        igualPresionado = false;
        operacionEnUso = 'division';
    }
    num = "";
}
const cambioSigno = ()=> {
    if(num > 0){
        num -= (num*2);
        num = num.toString();
        document.getElementById("muestra").innerHTML = num;
    }
    else if(num < 0){
        num -= (num*2)
        num = num.toString();
        document.getElementById("muestra").innerHTML = num;
    }
}
const igual = ()=> {
    let evaluacion = eval(document.getElementById("muestra").innerHTML);
    if(evaluacion == "Infinity" || evaluacion == "-Infinity" || evaluacion.toString() == "NaN"){
        document.getElementById("muestra").innerHTML = "No es posible dividir entre 0";
    }
    else{
        document.getElementById("muestra").innerHTML = evaluacion;
    }
    igualPresionado = true;
}