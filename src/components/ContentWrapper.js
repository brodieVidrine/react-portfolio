import React from "react";

import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";

import NavBar from "./NavBar";


function ContentWrapper({
    children,
    width="75"
}){

    return(
        <Container fluid className="bgc  min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <Row className="w-75 mx-auto contentArea flex-grow-1 p-5">
                <Row className= { "mx-auto w-" + width } >
                    {children}
                </Row>
            </Row>
        </Container>
    );

}

export default ContentWrapper