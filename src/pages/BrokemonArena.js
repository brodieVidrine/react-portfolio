import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BrokemonArena(){
    return(
        
        <Container fluid className="bgc">
            <NavBar></NavBar>
            <Row className="w-75 mx-auto contentArea">
                <Col>
                    <h1 className="w-75 mx-auto mt-5">Brokémon Arena</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default BrokemonArena