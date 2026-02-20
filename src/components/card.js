class Card {
    constructor(name, cost, attack, currentHealth, maxHealth, ability) {
        this.name = name;
        this.cost = cost;
        this.attack = attack;
        this.currentHealth = currentHealth;
        this.maxHealth = maxHealth;
        this.ability = ability;
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
        if (this.isAlive()) {
            target.takeDamage(this.attack);
        }
    }
    
    



}