import React from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import NavBar from "../components/NavBar";
import ContentArea from "../components/ContentArea";
import DemoThumb from "../components/DemoThumb";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bcThumb from "../static/gr/bcThumb.png";
import rocketThumb from "../static/gr/rocketThumb.png";
import expThumb from "../static/gr/expThumb.png";
import canyonThumb from "../static/gr/canyonThumb.png";

const thumbs = [
    {
    id: 0,
    name: 'Base Camp',
    path: "/",
    description: 'I turned an HTML5 recreation of Wolfenstein 3D into a kid-friendly game hub.',
    imageId: bcThumb
  },{
    id: 0,
    name: 'Rocket Gal',
    path: "/",
    description: 'A minigame designed to help teach kids about visualzing fractions.',
    imageId: rocketThumb
  },{
    id: 0,
    name: 'The Ascend Student Experience',
    path: "/",
    description: "This is a static version of our web application. Created for our marketing site and update it as new features are added to the actual system. Popular with our sales team.",
    imageId: expThumb
  },{
    id: 0,
    name: 'Canyon Escape',
    path: "/",
    description: 'One of the most recent minigames, or "explorations", that I programmed. I used a tiling GUI to turn a sprite-sheet into this map.',
    imageId: canyonThumb
  }

];


function WebPortfolio(){

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [modTitle, setModTitle] = useState("");
    const [demoPath, setDemoPath] = useState("");

    function handleShow(title, path) {
        //setFullscreen(breakpoint);
        setShow(true);
        setModTitle(title);
                
    }

    return(
        
        <Container fluid className="bgc  min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea>
                <h1 className="w-75 mx-auto mt-5 text-center">Web Portfolio</h1>
                <br></br>
                <Row xs={1} md={2} className="g-4">
                    {thumbs.map( data =>
                    <Col key={data.id}>
                        
                        <DemoThumb
                            title={data.name}
                            text={data.description}
                            img ={data.imageId}
                            path={data.path}
                            callBack={handleShow}
                        ></DemoThumb>            
                    </Col>
                    )}
                </Row>
                <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>{modTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe id="bcFrame" className="w-100 border border-primary" src="https://amazon-cloudfront-secure-static-site--s3bucketroot-lkfdqdbtdcdt.s3.amazonaws.com/basecamp.html" />
                    </Modal.Body>
                </Modal>
            </ContentArea>
        </Container>
    )
}

export default WebPortfolio