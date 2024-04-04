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
        <Card className="text-center mt-2 w-100" style={{ width: '18rem', 
                                                          border:'5px solid #008DDA', 
                                                          boxShadow:'2px 2px 3px #000', 
                                                          backgroundColor:"#F7EEDD"
                                                          }}>
            
            <Card.Body >
            <Card.Title className="rounded"><h3>{species}</h3></Card.Title>
                <Card.Img className="pokeGif h-50 mx-auto object-fit-scale border rounded" style={{backgroundColor:"rgba(255, 255, 255, .5)"}} src={sprite}></Card.Img>
                
                <Card.Text className="d-flex align-items-center" >
                    
                    {descr}
                    
                    
                
                </Card.Text>
                <div className="align-self-stretch">
                <ListGroup className="border border-primary align-self-end"  >
                    <ListGroup.Item > <Badge bg="success">HP:</Badge> {hp} </ListGroup.Item>
                    <ListGroup.Item > <Badge>Combat:</Badge> {totalCP} </ListGroup.Item>
                </ListGroup>
                </div>
            </Card.Body>
        </Card>
    )

}

export default Brokemon