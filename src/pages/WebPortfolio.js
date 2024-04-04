import React from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import DemoThumb from "../components/DemoThumb";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bcThumb from "../static/gr/bcThumb.png";
import rocketThumb from "../static/gr/rocketThumb.png";
import expThumb from "../static/gr/expThumb.png";
import canyonThumb from "../static/gr/canyonThumb.png";
import ContentWrapper from "../components/ContentWrapper";

const thumbs = [
    {
    id: 0,
    name: 'Base Camp',
    frame: (
        <iframe id="bcFrame" className="demoFrame border border-primary" src="https://amazon-cloudfront-secure-static-site--s3bucketroot-lkfdqdbtdcdt.s3.amazonaws.com/basecamp.html" />
    ),
    description: 'I turned an HTML5 recreation of Wolfenstein 3D into a kid-friendly game hub.',
    imageId: bcThumb
  },{
    id: 1,
    name: 'Rocket Gal',
    frame: (
        <iframe id="rocketFrame" className="demoFrame border border-primary" src="https://amazon-cloudfront-secure-static-site--s3bucketroot-lkfdqdbtdcdt.s3.amazonaws.com/rocketgal/rocketgal.html" />
    ),
    description: 'A minigame designed to help teach kids about visualzing fractions.',
    imageId: rocketThumb
  },{
    id: 2,
    name: 'Interactive Video Player',
    frame: (
        <iframe id="expFrame" className="demoFrame border border-primary" src="https://amazon-cloudfront-secure-static-site--s3bucketroot-lkfdqdbtdcdt.s3.amazonaws.com/stuex/html5videoplayer.html?videoPath=https://web29.streamhoster.com/ascendedu/01_01_C.mp4&userName=Recruiter&captionName=captions/captions_01_01_C.xml&problems=ivProblems/01_01_C.xml" />
    ),
    description: "This is an iframe based video API that I created for Ascend. It accepts captions, interactivity (real time concept checks), and skin XMLs. ",
    imageId: expThumb
  },{
    id: 3,
    name: 'Canyon Escape',
    frame: (
        <iframe id="canyonFrame" className="demoFrame border border-primary" src="https://amazon-cloudfront-secure-static-site--s3bucketroot-lkfdqdbtdcdt.s3.amazonaws.com/canyonescape/canyon+Escape+1031.html" />
    ),
    description: 'One of the most recent minigames, or "explorations", that I programmed. I used a tiling GUI to turn a sprite-sheet into this map.',
    imageId: canyonThumb
  }

];


function WebPortfolio(){

    const [show, setShow] = useState(false);
    const [modTitle, setModTitle] = useState("");
    const [demoFrame, setDemoFrame] = useState("");

    function handleShow(title, frame) {
        //setFullscreen(breakpoint);
        setShow(true);
        setModTitle(title);
        setDemoFrame(frame);        
    }

    return(
            <ContentWrapper>
                <h1 className="w-75 mx-auto mt-5 text-center">Web Portfolio</h1>
                <p>
                    Click any of the thumbnails to open an interactive HTML5/JS demo. This is just a small sample of my work at Ascend Math.
                    These files are not available in the site Git repository, but <span style={{fontStyle:"italic"}}>are</span> hosted with permission from Ascend's CEO. I set up a CDN using AWS S3 buckets and and AWS CloudFormation template.
                </p>
                <Row xs={1} md={2} className="g-4">
                    {thumbs.map( data =>
                    <Col key={data.id}>
                        
                        <DemoThumb
                            title={data.name}
                            text={data.description}
                            img ={data.imageId}
                            frame={data.frame}
                            callBack={handleShow}
                        ></DemoThumb>            
                    </Col>
                    )}
                </Row>
                <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>{modTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">{demoFrame}</Modal.Body>
                </Modal>
            </ContentWrapper>
    )
}

export default WebPortfolio