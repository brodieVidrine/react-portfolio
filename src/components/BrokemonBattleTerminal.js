import React from "react";
import { Row, Col } from "react-bootstrap";

import BrokemonBattleButton from "./BrokemonBattleButton";

//Filter out the physical moves, limit to 4

function attackCPU(target){
    console.log("target.dataset ", target.target.dataset );
}

const fakeMove = {
    level:"1",
    move:{
        basePower:"15",
        category:"Physical",
        name:"Quick Attack",
        shortDesc:"Blah blah blah",
        type:"Normal"
    }
}

const fakeSet=[fakeMove, fakeMove, fakeMove, fakeMove];

function getAttacks(moves){
    /**
     * For simplicity's sake, we're only pulling gen 8 movesets
     * and only the moveset for this specific pokemon
     * we occasionally pull mons without sufficent moves
     * in that case, we supply a fake set
     * --Brodie Vidrine, 4/7/24
     */
    if(moves==undefined || moves.length<4)
        return fakeSet;

    let bestFour = [];
    //let sorted = [];
    let attacks = moves.filter( move =>{
        if(move.move != undefined)
            return move.move.category === 'Physical' || move.move.category ==='Special';
        
    });
    
    /*
    *#TODO: Sort the attacks by power
    *This may involve dumping into a secondary array
    *so that we can change the string values to INTs
    attacks.map(attack => {
        
        let attackValue = parseInt(attack.move.basePower);
        
        //console.log("attack value = ", attackValue);
        
            
    });
    */
    bestFour = attacks;
    
    return bestFour;
}


/**
 * The area below the battlefield where player 1 inputs commands. 
 * Unlike tradional Mon games, this one only allows for battle
 * --Brodie Vidrine, 4/6/24
 * * 
 * */

function BrokemonBattleTerminal({
    species,
    moves,
    battleManager

}){
    
    const attacks = getAttacks(moves);
    //console.log("attacks ", attacks);

    return (
        <Row id="battleTerminal" className="p-3">
            <Col>
                <Row className="battle-message text-center h-75 mt-2">
                    <Col className="align-self-center">What will {species} do?</Col>
                </Row>
            </Col>
            <Col>
                <Row md={2}>
                    {attacks.slice(0, 4).map((attack, id) => (
                        <Col key={"attack"+id} >
                            <BrokemonBattleButton
                                mon={species}
                                name={attack.move.name}
                                basePower={attack.move.basePower}
                                type={attack.move.type}
                                onClick={battleManager}
                            ></BrokemonBattleButton>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )   
}


export default BrokemonBattleTerminal