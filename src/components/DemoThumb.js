import React from "react";
import Card from 'react-bootstrap/Card';

function DemoThumb({
    title = "Card Title",
    img,
    text,
    path,
    callBack
}){

    function clicked(){
        callBack(title, path);
    }

 return (
    
    <Card className="demoCard border-secondary" onClick={clicked}>
        <Card.Img variant="top" alt="demo thumnail" src={img} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
        </Card.Body>
    </Card>
 );   
}

export default DemoThumb