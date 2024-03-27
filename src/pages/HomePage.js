import React from "react";
import NavBar from "../components/NavBar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomePage(){
    return(
        
        <Container fluid>
            <NavBar></NavBar>
            <Row className="w-75 mx-auto">
                <h1>Home Page</h1>
                <p>Welcome to the site! There isn't much here yet.</p>
                <p>The site was built using NodeJS, React, and AWS Amplify. 
                    It's currently hooked up to MongoDB and S3 buckets over at AWS. 
                    I've set it up to auto-deploy every time the Git repository is updated.
                </p>
                <p>There was a GraphQL/MongoDB example set up, but I've temporarily taken it down while I wire up React Router. I've got a lot of work I'd like to show off, so organizing with pages will be ideal.</p>
            </Row>
            
            </Container>
    )
}

export default HomePage