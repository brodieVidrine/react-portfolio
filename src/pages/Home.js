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
const badges = [
    {
        id:0,
        thumb: npmThumb,
        alt: "NPM/NodeJS",
        hover: "This site was started on my local with npm."
    },{
        id:1,
        thumb: awsThumb,
        alt: "AWS",
        hover: "This site is hosted by AWS Amplify, which auto-deploys every time I update my main branch."
    },{
        id:2,
        thumb: reactThumb,
        alt: "React",
        hover: "This site was started on my local with npm."
    },{
        id:3,
        thumb: routerThumb,
        alt: "React Router",
        hover: "React Router is keeping track of the URL and serving the appropriate app/page."
    },{
        id:4,
        thumb: bootThumb,
        alt: "Bootstrap CSS",
        hover: "Installed react-bootstrap to make responsive design easy."
    },{
        id:5,
        thumb: graphThumb,
        alt: "GraphQL",
        hover: "This react project has GraphQL installed to communicate with external APIs and to store data locally."
    },{
        id:6,
        thumb: mongoThumb,
        alt: "Mongo DB",
        hover: "This site stores its data in MongoDB tables, hosted by Amazon RWS."
    }
];

function HomePage(){
    return(
        
        <Container fluid className="bgc min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea >
                    <Row > 
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
                        <Row className="justify-content-center flex-grow-1 mt-5" sm={"auto"}> 
                            {badges.map( data =>
                                <Col key={data.id}>
                                    <Image alt={data.alt} src={data.thumb}>

                                    </Image>
                                </Col>
                            )}
                        </Row>
                    </Row>
            </ContentArea> 
        </Container>
    )
}

export default HomePage