import Handlayout from "./Handlayout";
import Boardlayout from "./Boardlayout";
import Informationlayout from "./Informationlayout";

function Gamelayout() {
    return (
        <div>
            <Informationlayout></Informationlayout>
            <Boardlayout></Boardlayout>
            <Handlayout></Handlayout>
        </div>
    )
}

export default Gamelayout