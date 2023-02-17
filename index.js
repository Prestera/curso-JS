const textN1 = document.getElementById("n1")
const textOperacion = document.getElementById("operacion")
const textN2 = document.getElementById("n2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular)
function calcular(){
    const operacion = textOperacion.value
    const n1 = parseFloat(textN1.value)
    const n2 = parseFloat(textN2.value)

    if( (operacion == "+" || operacion == "-" ||
    operacion == "*" || operacion == "/") && !isNaN(n1) && !isNaN(n2)  ){
       let resultado;
        switch (operacion){
            case "+":
                resultado = n1 + n2
                break;
        }
        switch (operacion){
            case "-":
                resultado = n1 - n2
                break;
        }
switch (operacion){
    case "*":
        resultado = n1*n2
        break;
}
switch (operacion){
    case "/":
        resultado = n1/n2
        break
}
        pResultado.style ="color:black"
        pResultado.innerText = "El resultado de la operación es:  " + resultado
    } else {
        pResultado.style ="color:red"
        pResultado.innerText = "ERROR"
    }
}


