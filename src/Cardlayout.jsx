import picture from './assets/rat_basic.png';
import Card from './game/card.js';

const a = new Card("Basic Rat", "Rat", "This is a basic rat", 1, 1, 1, 1, null, picture);  // Temporary card for testing


const handleClick = () => {
alert(a.description);
};

function Cardlayout() {
    return (
        <div className = "cardlayout" onClick={handleClick}>
            <h2 className = "cardname">{a.name}: {a.cost}</h2>
            <img className = "cardart" src = {a.image}></img>
            <p className = "stats">{a.currentHealth}/{a.attack}</p>
        </div>
    )
}

export default Cardlayout