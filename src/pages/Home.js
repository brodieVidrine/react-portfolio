import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import ContentArea from "../components/ContentArea";
import { Row, Image, Col } from "react-bootstrap";
import reactThumb from '../static/gr/badges/smReact.png';
import awsThumb from '../static/gr/badges/smAWS.png';
import npmThumb from '../static/gr/badges/smNPM.png';
import graphThumb from '../static/gr/badges/smGraph.png';
import mongoThumb from '../static/gr/badges/smMongo.png';
import routerThumb from '../static/gr/badges/smRouter.png';
import bootThumb from '../static/gr/badges/smBoot.png';


function HomePage(){
    return(
        
        <Container fluid className="bgc min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea >
                    <Row>
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
                    </Row>
                    <Row className="flex-grow justify-content-center mt-5" sm={"auto"}> 
                    <Col >
                            <Image src={npmThumb} rounded />
                        </Col>
                        <Col >
                            <Image src={awsThumb} rounded />
                        </Col>
                        <Col >
                            <Image alt="React" src={reactThumb} rounded />
                        </Col>
                        <Col >
                            <Image src={routerThumb} rounded />
                        </Col>
                        <Col >
                            <Image src={bootThumb} rounded />
                        </Col>
                        <Col >
                            <Image src={graphThumb} rounded />
                        </Col>
                        <Col >
                            <Image src={mongoThumb} rounded />
                        </Col>
                    </Row>
            </ContentArea> 
        </Container>
    )
}

export default HomePage