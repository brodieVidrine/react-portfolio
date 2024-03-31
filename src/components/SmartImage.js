import React from "react";
import { Image } from "react-bootstrap";

function SmartImage({
    source,
    title,
    copy,
    handler
}){
    
    function clicked(){
        
        handler(title, copy);        
    
    }

    return(
        <Image style={{cursor:"pointer", boxShadow:"2px 2px 2px #000", backgroundColor:"rgba(0, 0, 0, .1)"}} onClick={clicked} src={source} thumbnail></Image>
    );
}

export default SmartImage