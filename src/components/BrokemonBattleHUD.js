import React from "react";
import { useState, forwardRef, useImperativeHandle } from "react";
import { Row, Col } from "react-bootstrap";


function BrokemonBattleHUD({
    species,
    cp,
    triggerUpdateHP,
    id
}){
    let current=0;

    const [hp, setHP] = useState(100);

    const HpBar = forwardRef((props, ref) => {
        
        useImperativeHandle(ref, () => ({

            updateHP(e) {
                current ++;            
                console.log( "returned HP", e );
                setHP(e, current);
            }

        }));
      
        return (
            <div className="hpRed h-25 mx-auto my-2">
                <div className="hpGreen h-100" style={{width: String(hp)+"%"}}></div>
            </div>
        )
    });

    return (
            <div id={id} className="w-100 battleHUD my-2">
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
                <Row className="h-100">
                    
                    <Col >
                        <HpBar
                            ref={ triggerUpdateHP }
                        ></HpBar>
                    </Col>
                </Row>
            </div>
    )
}


export default BrokemonBattleHUD