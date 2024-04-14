import React from "react";
import { useState } from "react";
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

function createBattleMessage(mon, attack){
    return mon + " " + attack;
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

    /**
     * #TODO - Replace the battle manager with a proper "reducer"
     * This will allow us to use our hooks in a separate doc
     * Would be much cleaner to have the biz logic outside of markup doc
     * Maybe next refactor, 
     */

    function battleManager(params){
    
        let attack = params.target.dataset;
        if(attack == undefined){
            console.log("no attack found");
            return;
        }
        
        setBattleMessage( createBattleMessage(attack.power, attack.type) );

        handleShow();
    
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [battleMessage, setBattleMessage] = useState("...");



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
            <Offcanvas className="battle-message text-center" show={show} onHide={handleClose} placement="bottom">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Attack</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {battleMessage}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default BrokemonBattle