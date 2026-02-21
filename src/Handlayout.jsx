import Cardlayout from "./Cardlayout";

function Handlayout() {
    return (
        <div className = "handlayout">
            <Cardlayout className = "handcard"></Cardlayout>
            <Cardlayout className = "handcard"></Cardlayout>
            <Cardlayout className = "handcard"></Cardlayout>
            <p>Your Health: </p>
            <p>Opponent Health: </p>
            <p>Currency: </p>
        </div>
    )
}

export default Handlayout