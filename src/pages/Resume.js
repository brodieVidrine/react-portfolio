import React from "react";
import NavBar from "../components/NavBar";


import devResume from '../static/bVidrineResume1.pdf';
import ContentWrapper from "../components/ContentWrapper";

function Resume(){
    
    return(
            <ContentWrapper>
                <h1 >Résumé</h1>
                <br></br>
                <iframe id="resumeFrame" className="w-100 border border-primary" src={devResume}></iframe>           
            </ContentWrapper>
    );
}

export default Resume