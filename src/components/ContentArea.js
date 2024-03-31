import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ContentArea({children}){

    return(
        <Row className="w-75 mx-auto contentArea flex-grow-1 p-5">
            <Row className="mx-auto w-75">
            {children}
            </Row>
                    

        </Row>
    );

}

export default ContentArea