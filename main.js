'use strict'

// Resgatando elementos e declarando variáveis
const semaforo = document.getElementById('semaforo')
const btnVermelho = document.getElementById('btnVermelho')
const btnAmarelo = document.getElementById('btnAmarelo')
const btnVerde = document.getElementById('btnVerde')
const btnAutomatico = document.getElementById('btnAutomatico')
let idAutomatico = null
let contador = 0

// Verificando se a função 'ligarAutomatico' está ativa
const autoLigado = () => idAutomatico != null 


// Funções para acender farol
const ligarVermelho = () => semaforo.src = './img/vermelho.png'
const ligarAmarelo = () => semaforo.src = './img/amarelo.png' 
const ligarVerde = () => semaforo.src = './img/verde.png' 


// Alternando entre as cores
const alternarCores = () => {

    if(contador == 0){
        ligarVerde()
        contador++
    }else if(contador == 1) {
        ligarAmarelo()
        contador++
    }else if(contador == 2){
        ligarVermelho()
        contador = 0
    }

}

const ligarAutomatico = () => {
    if(idAutomatico == null) {
        idAutomatico = setInterval(alternarCores, 800)
    }
   
}

// Adicionando eventos

btnVerde.addEventListener('click', () => {
    if(autoLigado) {
        clearInterval(idAutomatico)
        idAutomatico = null;
    }
    contador = 0
    ligarVerde()
})

btnAmarelo.addEventListener('click', () => {
    if(autoLigado) {
        clearInterval(idAutomatico)
        idAutomatico = null;
    }
    contador = 1
    ligarAmarelo()
})

btnVermelho.addEventListener('click', () => {
    if(autoLigado) {
        clearInterval(idAutomatico)
        idAutomatico = null;
    }
    contador = 2
    ligarVermelho()
})

btnAutomatico.addEventListener('click', ligarAutomatico)