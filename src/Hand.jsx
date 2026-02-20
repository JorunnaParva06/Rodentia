import picture from './assets/2 Minutes Slug.png'

function Card() {
    return (
        <div className = "card">
            <h2 className = "cardname">Card Name</h2>
            <img className = "cardart" src = {picture}></img>
            <p className = "carddescription">Card Description</p>
        </div>
    )
}

export default Card