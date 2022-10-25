const tipo = document.getElementById("Categoria");
const total1 = document.getElementById("Total");
let operacion;
let resultado;

function porcentaje(){
    let cantent = document.getElementById("Cantidad");
    let cantidad = parseFloat(cantent.value);
    let entrada = 200;

    if(tipo.selectedIndex == "0"){
        operacion = entrada * cantidad;
        resultado = operacion - (operacion * 0.15);
        total1.innerHTML = "Total a Pagar: $" + resultado;
    }
    else if(tipo.selectedIndex == "1"){
        operacion = entrada * cantidad;
        resultado = operacion - (operacion * 0.50);
        total1.innerHTML = "Total a Pagar: $" + resultado;
    }
    else if(tipo.selectedIndex == "2"){
        operacion = entrada * cantidad;
        resultado = operacion - (operacion * 0.80);
        total1.innerHTML = "Total a Pagar: $" + resultado;
    }
}