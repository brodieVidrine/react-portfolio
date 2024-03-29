import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import ContentArea from "../components/ContentArea";


function HomePage(){
    return(
        
        <Container fluid className="bgc min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea >
                    <h1 >Welcome!</h1>
                    <br></br>
                    <p>
                        Thanks for visiting my portfolio!
                        <br ></br>
                        <br ></br>
                        This website began as an AWS Amplify/React tutorial on March 24th, 2024. 
                        It was created on my local machine using NodeJS. I've set it up to auto-deploy 
                        every time the Git repository is updated. Since the initial creation, 
                        I've installed React-Router for "multi-page" functionality and React-Bootstrap for responsive styling.
                        <br ></br>
                        <br ></br>
                        If you click the "Bro-Notes" link in the nav bar, you'll find a full-stack example that uses GraphQL, NoSQL (MongoDB), and an external API (AWS Authentication).

                    </p>
                
            </ContentArea> 
        </Container>
    )
}

export default HomePage