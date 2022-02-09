'use strict'

const semaforo = document.getElementById('semaforo')
const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const automatico = document.getElementById('automatico')
const idAutomatico = null

const luzVermelha = () => semaforo.src = './img/vermelho.png'

const luzAmarela = () => semaforo.src = './img/amarelo.png'

const luzVerde = () => semaforo.src = './img/verde.png'



const mudarLuzAutomatico = () => {

     if ( luzVermelha()){
        return luzVerde()
    }else if( luzVerde()){
        return luzAmarela()
    }else if ( luzAmarela()) {
        return luzVermelha()
    }
}

const luzAutomatico = () => {
    if (idAutomatico == null) {
        idAutomatico = setInterval(mudarLuzAutomatico, 500)
    }
}

vermelho.addEventListener('click', luzVermelha)
amarelo.addEventListener('click', luzAmarela)
verde.addEventListener('click', luzVerde)
automatico.addEventListener('click', luzAutomatico)
console.log.automatico
semaforo.addEventListener('click', null)