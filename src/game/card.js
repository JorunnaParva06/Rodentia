export default class Card {
    constructor(name, description, cost, attack, currentHealth, maxHealth, ability, image) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.attack = attack;
        this.currentHealth = currentHealth;
        this.maxHealth = maxHealth;
        this.ability = ability;
        this.image = image;
    }

    get getLabel() {
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

new Card(
    "Sneaky Rat",
    2,
    2,
    1,
    1,
    null,
    "images/sneaky_rat.png"
);