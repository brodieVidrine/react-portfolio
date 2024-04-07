import React from "react";
import { Row, Col } from "react-bootstrap";

/**
 * The area below the battlefield where player 1 inputs commands. 
 * Unlike tradional Mon games, this one only allows for battle
 * --Brodie Vidrine, 4/6/24
 * * 
 * */

function BrokemonBattleTerminal({
    species,
    moves

}){
    
    console.log("moves = ", moves);
    
    return (
        <Row id="battleTerminal">
            <Col>
                <h3>
                    What will {species} do?
                </h3>
            </Col>
            <Col>

            </Col>
        </Row>
    )   
}


export default BrokemonBattleTerminal