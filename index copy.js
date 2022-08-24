let nombre = prompt("Ingrese nombre").toLowerCase;

if (nombre === "tadeo") {
    alert ("Hola Tadeo");
}
else {
    alert (`Acceso denegado, ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}`);
}