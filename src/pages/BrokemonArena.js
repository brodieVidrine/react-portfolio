import React from "react";
import { useQuery, gql } from '@apollo/client';

import ContentWrapper from "../components/ContentWrapper";
import { Row, Col } from "react-bootstrap";

const GET_POKEMON = gql`
{
    poke1: getPokemonByDexNumber(number:42) {
      species
      sprite
      baseStatsTotal
    }

    poke2: getPokemonByDexNumber(number:99) {
        species
        sprite
        baseStatsTotal
      }
}
`;

function GrabPokemon({
    dex
}){
    console.log("dex = >", dex);
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return(
        
        <Row>    
            <Col>
                <h2>Player 1 got a:</h2>
                <h3>{data.poke1.species}!</h3>
                <img src={data.poke1.sprite}></img>
            </Col>
            <Col>
                <h2>CPU got a:</h2>
                <h3>{data.poke2.species}!</h3>
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
                <br></br>
                <GrabPokemon dex={55}></GrabPokemon>
        </ContentWrapper>
    )
}

export default BrokemonArena