import React from "react";
import { Row, Col } from "react-bootstrap";

/**
 * 
 * The top half of the Battle tab,
 * contains the grassy field, pokemon gifs,
 * and HUDs for each pokemon
 * --Brodie Vidrine, 4/6/24
 */

function BrokemonBattleField({
    player1,
    cpu
}){

    return(
        <div className="mt-2 field-gradient">
            <Row className="h-50">
                <Col>
                    <Row>
                        <Col>
                            {cpu.species}
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
                            {player1.species}
                        </Col>
                        <Col>
                            CP:{player1.baseStatsTotal}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default BrokemonBattleField