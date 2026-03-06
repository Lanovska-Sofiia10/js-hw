let deck = [];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let suits = ['spade', 'diamond', 'heart', 'clubs'];
let color = ['red', 'black']

for (let value of values) {
    for (let suit of suits) {
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        }else if (suit === 'spade' || suit === 'clubs') {
            color = 'black';
        }

        deck.push({
            cardSuit: suit,
            value: value,
            color: color,
        });
    }
}

let spadeace = deck.filter(card => card.cardSuit === 'spade' && card.value === 'ace');

let allsix = deck.filter(card => card.value === '6');

let allred = deck.filter(card => card.color === 'red');

let alldiamond = deck.filter(card => card.cardSuit === 'diamond');

let clubnine = deck.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(clubnine);