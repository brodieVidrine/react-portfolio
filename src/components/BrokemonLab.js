import React from "react";
import { Row, Col } from "react-bootstrap";
import Brokemon from "./Brokemon";

/**
 * 
 * This is where the player sees which "Brokemon" they've been dealt
 * It's meant to look like a simple trading card
 * --Brodie Vidrine, 2/24
 */

function toTitleCase(str) {
    return str.replace(
    /\w\S*/g,
    function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    );
}

function BrokemonLab({
    player1,
    cpu
}){

    return(
        <Row className="d-flex align-items-stretch">
           
            <Col className="d-flex align-items-stretch" >
                <Brokemon  species={ toTitleCase( player1.species )  }
                    sprite={ player1.sprite }
                    descr= { player1.flavorTexts[0].flavor }
                    hp={ player1.baseStats.hp }
                    totalCP={ player1.baseStatsTotal }
                    types={ player1.types }
                    moves={ player1.learnsets.generation8.levelUpMoves }
                ></Brokemon>
            </Col>
            <Col className="col-1 text-center d-flex align-items-stretch">
                <h3 className="mx-auto align-self-center">VS</h3>
            </Col>
            <Col className="d-flex align-items-stretch" >
                <Brokemon  species={  toTitleCase( cpu.species ) }
                    sprite={ cpu.sprite }
                    descr={ cpu.flavorTexts[0].flavor }
                    hp={ cpu.baseStats.hp }
                    totalCP={ cpu.baseStatsTotal }
                    types={ cpu.types }
                    moves={ cpu.learnsets.generation8.levelUpMoves } 
                ></Brokemon>
            </Col>
        </Row>
        
    );
}

export default BrokemonLab