const btnIzq = document.getElementById("btnIzquierda");
const btnDer = document.getElementById("btnDerecha");
const iconoBoton = document.getElementById("encenderPausar");
const tiempo = document.getElementById("tiempo");
let control = 0;

let minu = 0;
let segu = 0;
let encendido = false;

function cambiarEstado() {
  if (encendido) {
    encendido = false;
  } else {
    encendido = true;
  }
}

function controlCronometro() {
  if (minu === 60) {
    alert("Haz llegado al tiempo máximo de este cronómetro");
    clearInterval(control);
    iconoBoton.setAttribute("src", "assets/play.svg");
    tiempo.innerText = "00:00";
    minu = 0;
    segu = 0;
    cambiarEstado();
  } else if (segu === 59) {
    minu++;
    segu = 0;
  } else {
    segu++;
  }
  tiempo.innerText = `${minu.toString().padStart(2, "0")}:${segu
    .toString()
    .padStart(2, "0")}`;
  //console.log(segu);
}

btnIzq.addEventListener("click", () => {
  cambiarEstado();
  //Activar cronómetro
  if (encendido) {
    iconoBoton.setAttribute("src", "assets/stop.svg");
    segu++;
    tiempo.innerText = `${minu.toString().padStart(2, "0")}:${segu
      .toString()
      .padStart(2, "0")}`;

    control = setInterval(() => {
      controlCronometro();
    }, 1000);
  } else {
    //Detener cronómetro
    clearInterval(control);
    iconoBoton.setAttribute("src", "assets/play.svg");
    segu = 0;
    minu = 0;
    tiempo.innerText = "00:00";
  }
});

btnDer.addEventListener("click", () => {
  //Pausar cronómetro
  if (encendido) {
    clearInterval(control);
    iconoBoton.setAttribute("src", "assets/play.svg");
    cambiarEstado();
  } else {
    alert("El cronómetro se encuentra detenido");
  }
});
