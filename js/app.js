const tiempoIniciado = document.getElementById('temporizador');
const modal = document.getElementById('temporizadorFinalizado');

let tiempoRestante;
let temporizador;

function iniciarTemporizador() {
  if (tiempoRestante > 0 && !temporizador) {
    temporizador = setInterval(actualizarTemporizador, 1000);
  }
}

function pausarTemporizador() {
  clearInterval(temporizador);
  temporizador = null;
}

function reiniciarTemporizador() {
  pausarTemporizador();
  tiempoRestante = 0;
  actualizarTiempo();
}

function configurarTemporizador() {
  const tiempoIngresado = parseInt(document.getElementById('tiempo').value, 10);
  if (!isNaN(tiempoIngresado) && tiempoIngresado > 0) {
    tiempoRestante = tiempoIngresado;
    actualizarTiempo();
  } else {
    alert('Por favor, ingrese un tiempo válido en segundos.');
  }
}

function actualizarTemporizador() {
  if (tiempoRestante > 0) {
    tiempoRestante--;
    actualizarTiempo();
  } else {
    pausarTemporizador();
    abrirModal();
  }
}

function actualizarTiempo() {
  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = tiempoRestante % 60;

  tiempoIniciado.innerHTML =
  formatoTiempo(horas) + ':' + formatoTiempo(minutos) + ':' + formatoTiempo(segundos);
}

function formatoTiempo(time) {
    return time < 10 ? '0' + time : time;
  }


  function abrirModal() {
    const modalInstancia = new bootstrap.Modal(modal);
    modalInstancia.show();
  }