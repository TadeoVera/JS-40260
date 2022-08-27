/*
Se quiere contar numeros enteros, positivos hasta 100. Para esto se debe ingresar un numero del 1 al 100. Al ingresar un numero negativo se dara una alerta.   
*/

let numero = prompt ("Ingrese un numero entre 1 a 100 (Cuenta hasta 100)");

if(numero < 1 || numero >100){
    alert("No podemos mostrar porque solo contamos hasta 100 y numeros negativos no aceptamos")
}else{
    for(let i = numero ; i < 101; i++){
      alert (i);
    }
}
