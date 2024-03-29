import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import ContentArea from "../components/ContentArea";


function BrokemonArena(){
    return(
        
        <Container fluid className="bgc min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea>
                    <h1 className="w-75 mx-auto mt-5">Brokémon Arena</h1>
            </ContentArea>
        </Container>
    )
}

export default BrokemonArena