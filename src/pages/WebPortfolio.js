import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentArea from "../components/ContentArea";


function WebPortfolio(){
    return(
        
        <Container fluid className="bgc  min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea>
                    <h1 className="w-75 mx-auto mt-5">Web Portfolio</h1>
            </ContentArea>
        </Container>
    )
}

export default WebPortfolio