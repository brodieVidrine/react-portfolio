import React from "react";
import { Row, Col } from "react-bootstrap";


function BrokemonBattle({
    player1,
    cpu
}){

    return(
        <>
        <Row className="d-flex flex-grow-1">
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
            <Col>
                <img id="battleSpriteBack" src={cpu.sprite}></img>    
            </Col>
        </Row>
        <Row>
            <Col>
                <img id="battleSpriteFront" src={player1.backSprite}></img>
            </Col>
            <Col>
                <Row>
                    <Col>
                        {player1.species}
                    </Col>
                    <Col>
                        CP:{player1.baseStatsTotal}
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    )
}

export default BrokemonBattle