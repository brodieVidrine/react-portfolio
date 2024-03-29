import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import devResume from '../static/bVidrineResume1.pdf';

function Resume(){
    
    return(
        
        <Container fluid className="bgc">
            <NavBar></NavBar>
            <Row className="w-75 mx-auto contentArea">
                <Col>
                    <h1 className="w-75 mx-auto mt-5">Resume</h1>
                    <div className="mx-auto w-75 h-75">
                        <iframe className="w-100 h-100 border border-primary" src={devResume}></iframe>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default Resume