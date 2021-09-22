var num = "";
var igualPresionado;
var operacionEnUso = "";
var parentesis = false;

//Agregar un numero a la pantalla y a la variable num
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
//limpia la pantalla devolviendola a 0 y reinicia todas las variables globales
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
//añade el primer parentesis antes del primer numero de la cadena, o luego del operador en caso de que se haya colocado uno
//Si se da el caso de que se intenta añadir un parentesis al colocar un numero luego de seleccionar una operacion, el parentesis va al primer numero de todos en lugar del primer numero posterior al operador.
const parentesis1 = ()=> {
    if(parentesis == false){
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
        parentesis = true;
    }
}
//añade el segundo parentesis solo si se agregó el primero antes
const parentesis2 = ()=> {
    if(parentesis == true){
        document.getElementById('muestra').innerHTML += ')';
        parentesis = false;
    }
}
//borra el ultimo numero de la cadena o el operador junto con sus espacios
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
    //cambia el operador a suma en caso de que los ultimos caracteres de la cadena sean un operador de otro tipo
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
    //cambia la cadena entera a 0 + o simplemente agrega + dependiendo la situacion
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
//restar, multiplicar y dividir son iguales que sumar, solo cambia el operador matematico
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
//cambia el signo del ultimo numero escrito (si se escribe un numero, un operador y luego otro numero, solo cambia el signo de este ultimo)
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
    //realiza una operacion en base a lo escrito en la cadena a traves de la funcion eval()
    let evaluacion = eval(document.getElementById("muestra").innerHTML);
    //en caso de que el usuario intente dividir entre 0 o similar se mostrará un mensaje indicandole su error
    if(evaluacion == "Infinity" || evaluacion == "-Infinity" || evaluacion.toString() == "NaN"){
        document.getElementById("muestra").innerHTML = "No es posible dividir entre 0";
    }//en caso de que salga bien, simplemente se muestra el resultado de la evaluacion
    else{
        document.getElementById("muestra").innerHTML = evaluacion;
    }
    igualPresionado = true;
}