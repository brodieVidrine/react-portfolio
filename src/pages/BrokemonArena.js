import React from "react";

import NavBar from "../components/NavBar";

import { Container, Row } from "react-bootstrap";

import BrokemonMain from "../components/BrokemonMain";
import '../css/BrokemonCSS.css';


/**
 * Main page loaded by react-router when you navigate to /brokemonArena
 * It calls Brokemon-Main which contains the query to poke-gql
 * and the different game screens, organized in tabs
 * --Brodie Vidrine, 4/6/24
 */

function BrokemonArena(){

    return(
        <Container fluid className="bgc min-vh-100 rounded" rounded>
            <NavBar></NavBar>
            <Row className="w-75 brokeContent mx-auto text-center">
                <h1>Brokémon Arena</h1>
                <BrokemonMain></BrokemonMain>
            </Row>
        </Container>
    )
}

export default BrokemonArena