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
let reduce = deck.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    }else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    }else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    }else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
},
    {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);
