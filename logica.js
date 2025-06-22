let nombre = prompt("Ingrese su nombre: ");
nombre = nombre.trim();
nombre = nombre.charAt(0).toUpperCase() + nombre.substring(1).toLowerCase();

let edad = prompt("Ingrese su edad: ");
edad = parseInt(edad);

if (edad <= 0 || isNaN(edad)) {
    alert("Por favor coloque una edad válida");

} else if (edad >= 18) {
    alert(nombre + ", puedes conseguir tu permiso");
    document.getElementById("contenido").style.display = "block";
} else {
    alert(nombre + ", no tienes la edad suficiente para conseguir tu permiso");
    document.getElementById("mensaje").innerText = "Hola inge, queria ver si ponia una edad menor a la de 18 para probar esto jeje. tiene que resetear la pagina y poner una edad mayor a la de 18";
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("mensaje").style.fontSize = "20px";
}