import React from "react";
import { Row, Col } from "react-bootstrap";

/**
 * 
 * The top half of the Battle tab,
 * contains the grassy field, pokemon gifs,
 * and HUDs for each pokemon
 * --Brodie Vidrine, 4/6/24
 */

function toTitleCase(str) {
    return str.replace(
    /\w\S*/g,
    function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    );
}

function BrokemonBattleField({
    player1,
    cpu
}){
    
    const p1Species = toTitleCase( player1.species );
    const cpuSpecies = toTitleCase( cpu.species );
    
    return(
        <Row className="field-gradient">
            <Row className="h-50">
                <Col>
                    <Row>
                        <Col>
                            {cpuSpecies}
                        </Col>
                        <Col>
                            CP:{cpu.baseStatsTotal}
                        </Col>
                    </Row>
                </Col>
                <Col >
                    <img id="battleSpriteBack" src={cpu.sprite}></img>    
                </Col>
            </Row>
            <Row className="h-50">
                <Col >
                    <img id="battleSpriteFront" src={player1.backSprite}></img>
                </Col>
                <Col>
                    <Row >
                        <Col>
                            {p1Species}
                        </Col>
                        <Col>
                            CP:{player1.baseStatsTotal}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Row>
    )
}

export default BrokemonBattleField