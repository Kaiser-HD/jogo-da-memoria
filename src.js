function receberNumero() {
    let passa = false
    let numero = 0
    while (passa === false) {
        numero = prompt("Digite um Número (Par entre 4 e 18): ");
        passa = validNumber(numero)
    }

  
   
    return parseInt(numero);
}

const imagens = [
    './assets/muzan.jpg',
    './assets/nggyu.gif',
    './assets/sup1.jpg',
    './assets/sup2.jpg',
    './assets/sup3.jpg',
    './assets/sup4.jpg',
    './assets/sup5.png',
    './assets/sup6.png',
    './assets/tanjiro.jpg',
]

imagens.sort(comparador);

function comparador() { 
    return Math.random() - 0.5; 
}

const dubble = []

const verso = './assets/icon.png'

function creatCard(qtd) {
    const mesa = document.querySelector('.mesa-de-jogos')

    for (let i = 0; i < qtd; i++) {
        mesa.innerHTML += `
        <div class="cartao" onclick=flip(this)>
            <div class="frente">
                <img src=${dubble[i]} alt="personagem de demon slayer">
            </div>
            <div class="verso">
                <img src="./assets/icon.png" alt="icon Demon Slayer">
            </div>
        </div>`
    }
}

function flip(element) {
    element.classList.toggle('flip');
    valitadeCard()
    finish()
}

function selectCards(qtd) {
    const x = qtd / 2
    for (let i = 0; i < x; i++) {
        dubble.push(imagens[i])
        dubble.push(imagens[i])
    }

    dubble.sort(comparador);

    function comparador() { 
        return Math.random() - 0.5; 
    }
}

function validNumber(numero) {
    if (numero >= 4 && numero <= 18 && numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function valitadeCard() {
    const flipped = document.querySelectorAll('.flip')
    if (flipped.length === 2) {
        const cardOne = flipped[0].querySelector('img').currentSrc
        const cardTwo = flipped[1].querySelector('img').currentSrc
        if (cardOne === cardTwo) {
            flipped[0].classList.toggle('flip')
            flipped[1].classList.toggle('flip')
            flipped[0].classList.toggle('flipped')
            flipped[1].classList.toggle('flipped')
        } else {
            setTimeout(() => {
                flipped[0].classList.toggle('flip')
                flipped[1].classList.toggle('flip')
            }, 800)
            
        }
    }
}

function finish() {
    const qtdCards = dubble.length
    const qtdCardsv = document.querySelectorAll('.flipped').length
    if (qtdCards === qtdCardsv) {
        setTimeout(() => {
            alert('Parabéns!')
            location.reload(); 
        }, 800)
    }
}

function onload() {
    const numeroDigitado = receberNumero();
    
    selectCards(numeroDigitado)
    creatCard(numeroDigitado)
}

onload()