import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';


import devResume from '../static/bVidrineResume1.pdf';
import ContentArea from "../components/ContentArea";

function Resume(){
    
    return(
        
        <Container fluid className="bgc  min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea>
                    <h1 >Résumé</h1>
                    <br></br>
                    
                        <iframe id="resumeFrame" className="border border-primary" src={devResume}></iframe>
                                        
            </ContentArea>
        </Container>
    );
}

export default Resume