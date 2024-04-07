import React from "react";

import NavBar from "../components/NavBar";

import { Container, Row } from "react-bootstrap";

import BrokemonMain from "../components/BrokemonMain";
import '../css/BrokemonCSS.css';


function BrokemonArena(){

    /**
     * Page loads, call the query
     */
    

    return(
        <Container fluid className="bgc  min-vh-100 d-flex flex-column ">
            <NavBar></NavBar>
            <Row className="w-75 mx-auto contentArea p-5 text-center">
                <h1>Brokémon Arena</h1>
                <BrokemonMain></BrokemonMain>
            </Row>
        </Container>
    )
}

export default BrokemonArena