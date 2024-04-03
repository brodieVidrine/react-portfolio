import React from "react"
import { Card, ListGroup, Badge } from "react-bootstrap"


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
        <Card className="text-center mt-2 w-100" style={{ width: '18rem', backgroundColor:'#6AD4DD', boxShadow:'2px 2px 3px #000'}}>
            <Card.Img className="w-50 mx-auto mt-5 p-5 border border-primary" style={{backgroundColor:"#97E7E1"}} variant="top" src={sprite}></Card.Img>
            <Card.Body>
                <Card.Title><h3>{species}</h3></Card.Title>
                <Card.Text className="p-2" style={{backgroundColor:"#F8F6E3"}}>
                    {descr}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <ListGroup className="list-group-flush" >
                    <ListGroup.Item> <Badge bg="success">Health:</Badge> {hp} </ListGroup.Item>
                    <ListGroup.Item> <Badge>Combat:</Badge> {totalCP} </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )

}

export default Brokemon