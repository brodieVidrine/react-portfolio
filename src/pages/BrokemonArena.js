import React from "react";
import { useQuery, gql } from '@apollo/client';

import ContentWrapper from "../components/ContentWrapper";
import { Row, Col } from "react-bootstrap";

const GET_POKEMON = gql`
{
    poke1: getPokemonByDexNumber(number:75) {
      species
      sprite
      baseStatsTotal
    }

    poke2: getPokemonByDexNumber(number:130) {
        species
        sprite
        baseStatsTotal
      }
}
`;

function toTitleCase(str) {
    return str.replace(
    /\w\S*/g,
    function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    );
}

function GrabPokemon({
    dex
}){
    console.log("dex = >", dex);
    var p1=5;
    var p2=35;

    const { loading, error, data } = useQuery(GET_POKEMON);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return(
        
        <Row className="text-center">    
            <Col>
                <h2>Player 1 got a:</h2>
                <h3>{toTitleCase(data.poke1.species)}!</h3>
                <img src={data.poke1.sprite}></img>
            </Col>
            <Col>
                <h2>CPU got a:</h2>
                <h3>{toTitleCase(data.poke2.species)}!</h3>
                <img src={data.poke2.sprite}></img>
            </Col>
        </Row>
    );
}


function BrokemonArena(){
    
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


    return(
        <ContentWrapper>
                <h1>Brokémon Arena</h1>
                <h2>Still wiring the API to the game. Check back soon. (BV-4/2/24)</h2>
                <br></br>
                <GrabPokemon dex={55}></GrabPokemon>
        </ContentWrapper>
    )
}

export default BrokemonArena