export default class player{
    constructor(deck){
        this.deck = deck;
        this.hand = [];
        this.life = 10;
        this.resource_cap = 1;
        this.resource = 0;
        this.defenders_left = 2;

    }
}