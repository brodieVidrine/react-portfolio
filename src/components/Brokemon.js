import React from "react"
import { Card, ListGroup, Badge, Row } from "react-bootstrap"


function Brokemon({
    species,
    sprite,
    totalCP,
    descr,
    hp
}){
    console.log( "params ", species,
        sprite,
        totalCP,
        descr,
        hp);
    return(
        <Card className="text-center mt-2 w-100" style={{ width: '18rem', border:'5px solid #80BCBD', boxShadow:'2px 2px 3px #000'}}>
            
            <Card.Body style={{backgroundColor:"#F9F7C9"}}>
            <Card.Title style={{backgroundColor:"#AAD9BB"}} className="rounded"><h3>{species}</h3></Card.Title>
                <Card.Img className="h-50 mx-auto object-fit-scale border rounded" style={{backgroundColor:"rgba(255, 255, 255, .5)"}} src={sprite}></Card.Img>
                
                <Card.Text className="h-50 d-flex align-items-center" >
                    
                    {descr}
                    
                    
                
                </Card.Text>
            </Card.Body>
            <Card.Body style={{backgroundColor:"#80BCBD"}} >
                <ListGroup className="list-group-flush"  >
                    <ListGroup.Item style={{backgroundColor:"#F9F7C9"}} > <Badge bg="success">HP:</Badge> {hp} </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#F9F7C9"}} > <Badge>Combat:</Badge> {totalCP} </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )

}

export default Brokemon