export default class Lane {
    constructor(number) {
        this.number = number;
        this.defender = null;
        this.unit = null;
    }

    placeCard(card) {
        if (card.type === "Defender") {
            if (!this.defender) {
                this.defender = card;
                return true;
            }
        } else {
            if (!this.unit) {
                this.unit = card;
                return true;
            }
        }
        return false;
    }

    getFrontCard() {
        return this.defender? this.defender : this.unit;
    }

    removeDeadCard() {
        if (this.defender && !this.defender.isCardAlive) {
            this.defender = null;
        }

        if (this.unit && !this.unit.isCardAlive) {
            this.unit = null;
        }
    }


}