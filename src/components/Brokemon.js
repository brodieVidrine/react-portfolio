import React from "react"
import { Card, ListGroup, Badge, Row, Col } from "react-bootstrap"

function Brokemon({
    species,
    sprite,
    totalCP,
    descr,
    hp,
    types,
    moves
}){
    
    return(
        <Card className="text-center mt-2 w-100" 
                style={{
                    
                    border:'5px solid #008DDA', 
                    boxShadow:'2px 2px 3px #000', 
                    backgroundColor:"#F7EEDD"
                }}
        >
            
            <Card.Body >
                
                <Card.Title><h3>{species}</h3></Card.Title>
                
                <Card.Img className="pokeGif h-50 mx-auto object-fit-scale border border-primary rounded" style={{backgroundColor:"rgba(255, 255, 255, .5)"}} src={sprite}></Card.Img>
                                
                <ListGroup className="border border-primary align-self-end mt-1"  >
                    <ListGroup.Item > 
                        <Row className="justify-content-center">
                        {
                        types.map( type =>

                            <Col key={species + type.name}>
                                <div  className={ type.name+"Badge typeBadge" } >{type.name}</div>
                            </Col>
                        
                        )}
                    </Row>
                    </ListGroup.Item>
                    <ListGroup.Item > 
                        <Row>
                            <Col>
                                <b>HP:</b> {hp}
                            </Col>
                            <Col>
                                <b>Combat:</b> {totalCP}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                
                <Card.Text className="mt-3" >
                    <strong><em>About:</em></strong>
                    <br></br>
                    <em>{descr}</em>
                </Card.Text>

            </Card.Body>
        </Card>
    )

}

export default Brokemon