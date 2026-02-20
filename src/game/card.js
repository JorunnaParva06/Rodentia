export default class Card {
    constructor(name, type, description, cost, attack, currentHealth, maxHealth, ability, image) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.cost = cost;
        this.attack = attack;
        this.currentHealth = currentHealth;
        this.maxHealth = maxHealth;
        this.ability = ability;
        this.image = image;
    }

    get cardName() {
        return this.name;
    }

    get cardType() {
        return this.type;
    }

    get cardDescription() {
        return this.description;
    }

    get cardCost() {
        return this.cost;
    }

    get cardAttack() {
        return this.attack;
    }

    get cardHealth() {        
        return `${this.currentHealth}/${this.maxHealth}`;
    }

    get isCardAlive() {
        return this.currentHealth > 0;
    }

    get hasAbility() {
        return this.ability !== null;
    }

    get cardHealthStatus() {
        if (this.currentHealth === this.maxHealth) {
            return "Healthy";
        } else if (this.currentHealth > 0) {
            return "Injured";
        } else {
            return "Destroyed";
        }
    }

    get cardLabel() {
        return `${this.name} (Cost: ${this.cost}, Attack: ${this.attack}, Health: ${this.currentHealth}/${this.maxHealth})`;
    }

    takeDamage(amount) {
        this.currentHealth -= amount;
        if (this.currentHealth < 0) {
            this.currentHealth = 0;
        }
    }

    isAlive() {
        return this.currentHealth > 0;
    }

    useAbility(target) {
        if (this.ability) {
            this.ability(target);
        }
    }

    attackTarget(target) {
        if (this.isAlive() && target.isAlive()) {
            target.takeDamage(this.attack);
        }
    }
}
