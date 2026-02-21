import Deck from "./deck.js";
import Lane from "./lane.js";
import Card from "./card.js";

export default class player{
    constructor(deck){
        this.deck = deck;
        this.hand = [];
        this.hand_size = 3;
        this.life = 10;
        this.resource_cap = 1;
        this.resource = 0;
        this.defenders_left = 2;
        this.lanes = [Lane(1),Lane(2),Lane(3),Lane(4),Lane(5)];
    }

    increaseResourceCap(){
        this.resource_cap++;
    }
    refillResource(){
        this.resource = this.resource_cap;
    }
    fillHand(){
        while(this.hand.length < this.hand_size){
            this.hand.push(this.deck.draw());
        }
    }
    playCard(card, lane){
        if (card.cost <= this.resource && lane.placeCard(card)){
            return true
        }
        return false   
    }
}