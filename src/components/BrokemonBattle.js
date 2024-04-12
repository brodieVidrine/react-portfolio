import React from "react";
import { Row, Col, Offcanvas } from "react-bootstrap";

import BrokemonBattleField from "./BrokemonBattleField";
import BrokemonBattleTerminal from "./BrokemonBattleTerminal";


function toTitleCase(str) {
    return str.replace(
    /\w\S*/g,
    function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    );
}

function battleManager(params){
    
    console.log("battleManager params = ", params);

}

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
        <div id="battleMain" className="mt-2 rounded mx-2">
           <BrokemonBattleField
                player1={player1}
                cpu={cpu} ></BrokemonBattleField>
            <BrokemonBattleTerminal
                moves={player1.learnsets.generation8.levelUpMoves}
                species={ toTitleCase(player1.species)}
                battleManager={battleManager}
            ></BrokemonBattleTerminal>
            <Offcanvas>

            </Offcanvas>
        </div>
    )
}

export default BrokemonBattle