/*

* 2C = Two of Clubs
* 2D = Two of Diaminds
* 2H = Two of Hearts
* 2S = Two of Spades

USO DE LIBRERIAS EXTERNAS PARA REVOLVER DECK
underscore.org


*/

let deck = [];
const tipo = ['C','D','H','S'];
const tipoA = ['A','J','K','Q'];
let jugador = [];
let computadora = [];

const valorCarta = (carta) => {
    let puntos = 0;
    for (const cartas of carta) {
        const valor = cartas.substring(0, cartas.length-1);
        
        isNaN(valor) ? (puntos = (valor === 'A') 
                     ?  puntos = puntos + 11 : 
                        puntos = puntos + 10 ) : (puntos = puntos + (valor * 1));     
    }
    return puntos;
    // puntos = puntos + valor;
}

const pedirCarta = (cualquierJ) => {
    //metodo shift: remueve el primer elemento del array
    
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    let carta = deck.shift();
    cualquierJ.push(carta);
    return cualquierJ;
}

const construirDeck = () => {

    let deckC = [];

    for(let i = 2; i<=10; i++){
        for (let tipoC of tipo) {
            // cartasT = i + cartasL;
            deckC.push(i + tipoC);
        }
    }

    for (const tipoC of tipo) {
        for (const tiposA of tipoA) {
            deckC.push(tiposA + tipoC);
        }
    }
    
    return _.shuffle(deckC);
    // return deckC;
}

deck = construirDeck();
console.log(deck);

pedirCarta(jugador);
console.log('Jugador: ', jugador);
console.log('Deck: ', deck);
pedirCarta(jugador);
console.log('Jugador: ', jugador);
console.log('Deck: ', deck);
pedirCarta(computadora);
console.log('Computadora: ', computadora);
console.log('Jugador: ', jugador);

console.log('Resultado del jugador: ', valorCarta(jugador));