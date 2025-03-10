// Temporizador
let segundos = 0;
let intervalo;
function startTimer() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        segundos++;
        let minutos = Math.floor(segundos / 60);
        let segs = segundos % 60;
        document.getElementById("timer").textContent = `${minutos}:${segs < 10 ? '0' : ''}${segs}`;
    }, 1000);
}
function resetTimer() {
    clearInterval(intervalo);
    segundos = 0;
    document.getElementById("timer").textContent = "00:00";
}

// Calculadora
function agregarValor(valor) {
    document.getElementById("resultado").value += valor;
}
function calcular() {
    try {
        document.getElementById("resultado").value = eval(document.getElementById("resultado").value);
    } catch {
        alert("Operación inválida");
    }
}
function limpiar() {
    document.getElementById("resultado").value = "";
}

// Conversor de moneda
function convertirMoneda() {
    let dolares = document.getElementById("dolares").value;
    let tasaCambio = 17.50; // Ejemplo de cambio
    let resultado = dolares * tasaCambio;
    document.getElementById("resultadoConversion").textContent = `${dolares} USD = ${resultado.toFixed(2)} MXN`;
}
