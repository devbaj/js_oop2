class Card {
    constructor(suit, valueString, value) {
        this.suit = suit;
        this.valueString = valueString;
        this.value = value;
    }

    show(){
        console.log(this.valueString, "of", this.suit);
    }
}

class Deck {
    constructor(){
        this.cards = createDeck();
        }
    
    createDeck(){
        var cards = []
        var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        var valueStrings = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        
        for (let i in suits) {
            for (let j in values) {
                cards.push(new Card(suits[i], valueStrings[j], values[j]));
            }
        }
        return cards;
    }

    shuffle(){
        var m = this.cards.length, t, i;

        while (m){
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this;
    }

    reset(){
        this.cards = createDeck();
        return this;
    }

    deal() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    take(deck){
        this.hand.push(deck.deal());
        return this;
    }

    discard(suit, valueString){
        for (let i in this.hand) {
            if (this.hand[i].suit == suit && this.hand[i].valueString == valueString){
                this.hand.splice([i], 1);
                return this;
            }
        }
        console.log("You don't have that card...");
        return this;
    }
}

var deck = new Deck;
deck.shuffle();
var chika = new Player("Chika");
chika.take(deck);
chika.take(deck);
chika.take(deck);
chika.take(deck);
chika.take(deck);
chika.discard("Diamonds", "Ten");