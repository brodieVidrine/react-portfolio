import React from "react";
import Card from 'react-bootstrap/Card';

function DemoThumb({
    title = "Card Title",
    img,
    text,
    frame,
    callBack
}){

    function clicked(){
        callBack(title, frame);
    }

 return (
    
    <Card className="demoCard border-secondary" onClick={clicked}>
        <Card.Img className="object-fit-scale border rounded" variant="top" alt="broke gif" src={img} />
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