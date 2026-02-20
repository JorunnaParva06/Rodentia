import Card from './card.js';

const defenderCardData = [
    {
        type: "Defender",
        baseStats: { attack: 0, health: 1 },
        cost: 1
    }
];

const ratCardData = [
    {
        type: "Basic",
        baseStats: { attack: 2, health: 1 },
        cost: 1
    },
    {
        type: "Assassin",
        baseStats: { attack: 2, health: 2 },
        cost: 2,
        description: "This rodent ignores Defenders and attacks the card or player behind"
    },
    {
        type: "Sniper",
        baseStats: { attack: 3, health: 2 },
        cost: 3,
        description: "This rodent transfers excess damage to the rodent or player behind the attacked"
    },
    {
        type: "Swarm",
        baseStats: { attack: 3, health: 3 },
        cost: 4,
        description: "When played, deal 1 damage to all opposing cards"
    },
];

const deckData = {
    capybara: {
        factionName: "Capybara",
        cardData: capybaraCardData,
        imagePrefix: "capybara"
    },
    rat: {
        factionName: "Rat",
        cardData: ratCardData,
        imagePrefix: "rat"
    }
};

const capybaraCardData = [
    {
        type: "Basic",
        baseStats: { attack: 1, health: 2 },
        cost: 1
    },
    {
        type: "Sumo-Bara",
        baseStats: { attack: 0, health: 4 },
        cost: 2,
        description: "At the beginning of the Combat phase, this rodent gains +1 ATK"
    },
    {
        type: "Tibaran-Monk",
        baseStats: { attack: 2, health: 4 },
        cost: 3,
        description: "The first time this rodent would take damage, prevent that damage"
    },
    {
        type: "Master-Cappy",
        baseStats: { attack: 2, health: 4 },
        cost: 5,
        description: "This rodent heals you for 1 life every time it deals damage"

    }
];

export default class Deck {
    constructor(name, maxSize = 16) {
        this.name = name;
        this.maxSize = maxSize;
        this.cards = [];
        this.defenderCards = [];

        this.buildDeck();
    }

    buildDeck() {
        const config = deckData[this.name];
        if (!config) return;

        const cards = [];

        config.cardData.forEach((template) => {
            for (let i = 1; i <= 4; i++) {
                cards.push(
                    new Card(
                        `${config.factionName} ${template.type} ${i}`,
                        config.factionName,
                        template.description || "",
                        template.cost,
                        template.baseStats.attack,
                        template.baseStats.health,
                        template.baseStats.health,
                        null,
                        `/assets/${config.imagePrefix}_${template.type.toLowerCase()}.png`
                    )
                );
            }
        });

        this.cards = cards;
    }

    madeDefenderCards() {
        const defenders = [];
        defenderCardData.forEach((template) => {
            for (let i = 1; i <= 2; i++) {
                defenders.push(
                    new Card(
                        `Defender ${i}`,
                        "Defender",
                        template.description || "",
                        template.cost,
                        template.baseStats.attack,
                        template.baseStats.health,
                        template.baseStats.health,
                        null,
                        `/assets/defender.png`
                    )
                );
            }
        });
        this.defenderCards = defenders;
    }
}
