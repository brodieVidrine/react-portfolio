import React from "react";
import { Row, Col } from "react-bootstrap";

function BrokemonBattleHUD({
    species,
    cp,
    hpBar,
    id
}){
    return (
            <div id={id} className="w-100 text-center my-2">
                <Row>
                    <Col></Col>
                    <Col >
                        {species}
                    </Col>
                    <Col>
                        cp:{cp}
                    </Col>
                    <Col></Col>
                </Row>
            </div>
    )
}


export default BrokemonBattleHUD