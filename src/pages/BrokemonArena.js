import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import ContentArea from "../components/ContentArea";


function BrokemonArena(){
    return(
        
        <Container fluid className="bgc min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea>
                    <h1>Brokémon Arena</h1>
                    <br></br>
                    <p>Coming soon! A React and GraphQL example.</p>
            </ContentArea>
        </Container>
    )
}

export default BrokemonArena