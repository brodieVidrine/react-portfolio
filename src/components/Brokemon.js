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
        <Card className="text-center mt-2 flex-grow-1" style={{ width: '18rem', backgroundColor:'rgba(100, 0, 180, .2)', boxShadow:'2px 2px 3px #000'}}>
            <Card.Img className="w-50 mx-auto mt-5 p-2" style={{backgroundColor:"rgba(240, 240, 240, .5)"}} variant="top" src={sprite}></Card.Img>
            <Card.Body>
                <Card.Title>{species}</Card.Title>
                <Card.Text className="p-2" style={{backgroundColor:"rgba(240, 240, 240, .8)"}}>
                    {descr}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item> <Badge bg="success">Health:</Badge> {hp} </ListGroup.Item>
                    <ListGroup.Item> <Badge>Combat:</Badge> {totalCP} </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )

}

export default Brokemon