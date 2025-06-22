Verificación de Edad para Conducir en Perú 🚗

Este es un pequeño proyecto web que hice usando HTML y JavaScript. La idea es simple: cuando abres la página, te pide tu nombre y tu edad. Luego, según tu edad, te dice si puedes sacar tu permiso de conducir en Perú o no.

---

## ¿Cómo funciona?

- Primero, el sistema te pide que ingreses tu nombre. Lo limpia (elimina espacios) y pone la primera letra en mayúscula.
- Luego te pide tu edad.
- Si ingresas algo incorrecto (como letras o números negativos), te avisa que pongas una edad válida.
- Si tienes 18 años o más, te dice que puedes conseguir tu permiso.
- Si tienes menos de 18, te muestra un mensaje divertido diciendo que todavía no puedes.

---

## Archivos del proyecto

- `index.html`: la página web principal.
- `logica.js`: el archivo que tiene toda la lógica en JavaScript.
- `README.md`: este archivo donde explico todo lo que hice.

---

## Código de JavaScript usado (logica.js)

```javascript
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
    document.getElementById("mensaje").innerText = "Hola inge, quería ver si ponía una edad menor a la de 18 para probar esto jeje. Tiene que resetear la página y poner una edad mayor a la de 18.";
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("mensaje").style.fontSize = "20px";
}
Código de HTML (index.html)

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Permiso de Conducir</title>
</head>
<body>
    <h1>¡Hola soy MATIAS!</h1>

    <div id="contenido" style="display:none;">
        <p>¡Felicidades! Ya puedes conducir.</p>
    </div>

    <div id="mensaje" style="display:none; color: red;"></div>

    <script src="logica.js"></script>
</body>
</html>