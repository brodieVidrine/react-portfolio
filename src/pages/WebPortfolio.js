import React from "react";
import NavBar from "../components/NavBar";
import ContentArea from "../components/ContentArea";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function WebPortfolio(){
    return(
        
        <Container fluid className="bgc  min-vh-100 d-flex flex-column">
            <NavBar></NavBar>
            <ContentArea>
                    <h1 className="w-75 mx-auto mt-5">Web Portfolio</h1>
                    <br></br>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" alt="demo thumnail" src="" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
            </ContentArea>
        </Container>
    )
}

export default WebPortfolio