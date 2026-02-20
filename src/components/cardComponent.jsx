import Card from "../game/card";

function CardComponent() {
  const card = new Card(
    "Hearts",          // name
    "Ace",             // description
    0,                 // cost
    10,                // attack
    5,                 // currentHealth
    5,                 // maxHealth
    null,              // ability
    "/assets/ace_of_hearts.png" // image
  );

  console.log(card); // 👈 check browser console

  return (
    <div>
      <p>{card.getLabel}</p>
      <img src={card.image} alt="card" />
    </div>
  );
}

export default CardComponent;