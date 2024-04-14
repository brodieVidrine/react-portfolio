import React from "react";
import { useState, useRef } from "react";
import { Offcanvas } from "react-bootstrap";

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
    return mon + " used " + attack + "!";
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
    
    //console.log(cpu);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [battleMessage, setBattleMessage] = useState("...");

    const playerObj = {
        totalHP: parseInt(player1.baseStats.hp),
        currentHP: parseInt(player1.baseStats.hp),
        type: player1.types

    }

    const enemyObj = {
        totalHP: parseInt(cpu.baseStats.hp),
        currentHP: parseInt(cpu.baseStats.hp),
        type: cpu.types

    }

    const playerHPref = useRef();
    const enemyHPref = useRef();

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
        
        setBattleMessage( createBattleMessage(attack.mon, attack.attack) );
        handleShow();

        let damage = parseInt( attack.power );
        //Because I've seen this show up as random strings, set error catch
        if( isNaN(damage) )
            damage = 20;
        
        enemyObj.currentHP = enemyObj.currentHP - damage;

        let percent = parseInt((enemyObj.currentHP/enemyObj.totalHP) * 100);
        if( enemyObj.currentHP <= 0 )
            percent = 0;

        enemyHPref.current.updateHP( percent );

    }

    return(
        <div id="battleMain" className="mt-2 rounded mx-2">
           <BrokemonBattleField
                player1={player1}
                cpu={cpu} 
                playerHPref={ playerHPref }
                enemyHPref={ enemyHPref }
                ></BrokemonBattleField>
            <BrokemonBattleTerminal
                moves={player1.learnsets.generation8.levelUpMoves}
                species={ toTitleCase(player1.species)}
                battleManager={battleManager}
            ></BrokemonBattleTerminal>
            <Offcanvas className="battle-message text-center" 
                        show={show} 
                        onHide={handleClose}
                        backdrop={false}
                        placement="bottom">
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