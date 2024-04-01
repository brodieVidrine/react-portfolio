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
        <Image className="stinkinBadge" onClick={clicked} src={source} thumbnail></Image>
    );
}

export default SmartImage