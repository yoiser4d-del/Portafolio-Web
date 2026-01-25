function mostrarBienvenida() {
    let nombre = document.getElementById("nombre").value;
    let resultado = document.getElementById("resultado");

    if (nombre === "") {
        alert("⚠️ Por favor, ingrese su nombre.");
        
    } else {
        resultado.textContent = "¡Bienvenido/a " + nombre + "! Gracias por visitar nuestra página.";
        resultado.style.color = "#fff";
    }
}
