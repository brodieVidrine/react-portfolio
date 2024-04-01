import React from "react";
import NavBar from "../components/NavBar";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

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
import SmartImage from "../components/SmartImage";
const badges = [
    {
        id:0,
        thumb: npmThumb,
        alt: "NPM/NodeJS",
        hover: "This site was started on my local with npm. I'm using nvm-Windows to manage my nodeJS version."
    },{
        id:1,
        thumb: awsThumb,
        alt: "AWS",
        hover: "This site is hosted by AWS Amplify, which auto-deploys every time I update my main branch. The static content served under the 'Web Portfolio' section is hosted and delivered via AWS Cloudformation."
    },{
        id:2,
        thumb: reactThumb,
        alt: "React",
        hover: "This started as a default React project. All new components were coded by hand. (And with many helpful suggestions from Visual Studio Code.)."
    },{
        id:3,
        thumb: routerThumb,
        alt: "React Router",
        hover: "React Router is keeping track of the URL and serving the appropriate app/page."
    },{
        id:4,
        thumb: bootThumb,
        alt: "Bootstrap CSS",
        hover: "Installed react-bootstrap to make responsive design easy. This modal is a Bootstrap custom component!"
    },{
        id:5,
        thumb: graphThumb,
        alt: "GraphQL",
        hover: "This react project has GraphQL installed to communicate with external APIs and to store data locally."
    },{
        id:6,
        thumb: mongoThumb,
        alt: "Mongo DB",
        hover: "This site stores its data in MongoDB tables, hosted by Amazon RWS. I'm relatively new to NoSQL DBs, but I love how easy they are to work with!"
    }
];

function HomePage(){
    
    const [show, setShow] = useState(false);
    const [modTitle, setModTitle] = useState("");
    const [modCopy, setModCopy] = useState("");

    function clickHandler(title, copy) {
        console.log( "target = > ", title, copy );
        //setFullscreen(breakpoint);
        setShow(true);
        setModTitle( title );
        setModCopy( copy );
    }
    
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
                                This website began as an <a href="https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/" target="_blank">AWS Amplify + React tutorial</a> on March 24th, 2024. 
                                It was created on my local machine using NodeJS. The project is wired for CI/CD, auto-deploying 
                                every time I push commits to the main branch. Since the initial creation, 
                                I've installed <a target="_blank" href="https://reactrouter.com/en/main">React-Router</a> for "multi-page" functionality and <a href="https://react-bootstrap.github.io/" target="_blank">React-Bootstrap</a> for responsive styling.
                                Want to take a peek under the hood? I've made the <a href="https://github.com/brodieVidrine/react-portfolio/tree/main/src" target="_blank">Git repository</a> public so you can see how it all fits together.
                                <br ></br>
                                <br ></br>
                                If you click the "Bro-Notes" link in the nav bar, you'll find a full-stack example that uses GraphQL, NoSQL (MongoDB), and an external API (AWS Authentication).
                        </p>
                        </Row>
                        <Row className="justify-content-center flex-grow-1 mt-5" sm={"auto"}> 
                            {badges.map( data =>
                                <Col key={data.id} >
                                    <SmartImage source={data.thumb} title={data.alt} copy={data.hover} handler={clickHandler}>    
                                    </SmartImage>
                                </Col>
                            )}
                        </Row>
                    </Row>
                    <Modal show={show} fullscreen={"lg"} onHide={() => setShow(false)} centered>
                        <Modal.Header closeButton>
                        <Modal.Title>{modTitle}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="p-5">{modCopy}</Modal.Body>
                    </Modal>
            </ContentArea> 
        </Container>
    )
}

export default HomePage