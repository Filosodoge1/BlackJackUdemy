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
    
    return deckC;
}

deck = construirDeck();

console.log(deck);

