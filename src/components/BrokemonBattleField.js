import React from "react";
import { Row, Col } from "react-bootstrap";
import BrokemonBattleHUD from "./BrokemonBattleHUD";

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
                   
                <Col className="d-flex align-items-start">

                    <BrokemonBattleHUD 
                        id="cpuHUD"
                        species={cpuSpecies}
                        cp={cpu.baseStatsTotal}

                    ></BrokemonBattleHUD>
                
                </Col>
                
                <Col >
                    <img id="battleSpriteBack" src={cpu.sprite}></img>    
                </Col>
            
            </Row>

            <Row className="h-50">
                
                <Col >
                    <img id="battleSpriteFront" src={player1.backSprite}></img>
                </Col>

                <Col className="d-flex align-items-end">
                    
                    <BrokemonBattleHUD 
                        id="playerHUD"
                        species={p1Species}
                        cp={player1.baseStatsTotal}
                    >
                    </BrokemonBattleHUD>

                </Col>
                
            </Row>

        </Row>
    )
}

export default BrokemonBattleField