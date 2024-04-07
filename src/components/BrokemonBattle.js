import React from "react";
import { Row, Col } from "react-bootstrap";

import BrokemonBattleField from "./BrokemonBattleField";
import BrokemonBattleTerminal from "./BrokemonBattleTerminal";

/**
 * The battle screen. 
 * Top half is the "battlefield".
 * The bottom half (lower third?) is the "terminal"
 * --Brodie Vidrine, 4/6/24
 * * */

function BrokemonBattle({
    player1,
    cpu
}){

    return(
        <div id="battleMain" className="mt-2 field-gradient rounded">
           <BrokemonBattleField
                player1={player1}
                cpu={cpu} ></BrokemonBattleField>
            <BrokemonBattleTerminal
                moves={player1.learnsets.generation8}
                species={player1.species}
            ></BrokemonBattleTerminal>
        </div>
    )
}

export default BrokemonBattle