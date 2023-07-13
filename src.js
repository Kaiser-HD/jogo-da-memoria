function receberNumero() {
    let passa = false
    let numero = 0
    while (passa === false) {
        numero = prompt("Digite um número: ");
        passa = verification(numero)
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
                <img src=${dubble[i]} alt="personagem douma">
            </div>
            <div class="verso">
                <img src="./assets/icon.png" alt="icon Demon Slayer">
            </div>
        </div>`
    }
}

function flip(element) {
    element.classList.toggle('flip');
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

function verification(numero) {
    if (numero >= 4 && numero <= 18 && numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function onload() {
    const numeroDigitado = receberNumero();
    
    selectCards(numeroDigitado)
    creatCard(numeroDigitado)
}

onload()