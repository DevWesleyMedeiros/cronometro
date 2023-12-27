const timer = document.querySelector("#timer");
const btnIniciar = document.getElementById("iniciar");
const btnParar = document.getElementById("parar");
const btnZerar = document.getElementById("zerar");

let tempoInicial = null;
console.log(tempoInicial);
let intervalo = null;

const contador = () =>{
    let tempoAtual = Date.now();
    let segundos = (tempoAtual - tempoInicial)/1000;
    timer.innerHTML = conversor(segundos);
    console.log(segundos);
}
const conversor = (segundos) =>{
    let hora = Math.floor(segundos/3600);
    let resto = segundos % 3600;
    let min = Math.floor(resto / 60);
    let seg = Math.floor(resto % 60);
    let tempoFormatado = (hora < 10? "0" + hora : hora) + ":" +
    (min < 10? "0" + min : min) + ":" + (seg < 10? "0" + seg : seg);
    return tempoFormatado;
}
btnIniciar.addEventListener("click", (evt)=>{
    tempoInicial = Date.now();
    intervalo = setInterval(contador, 1000);
})
btnParar.addEventListener("click", (evt)=>{
    clearInterval(intervalo);
})
btnZerar.addEventListener("click", (evt)=>{
    tempoInicial = Date.now();
    timer.innerHTML = "00:00:00";
    clearInterval(intervalo);
})