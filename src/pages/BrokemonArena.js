import React from "react";
import { useQuery, gql } from '@apollo/client';

import ContentWrapper from "../components/ContentWrapper";

const GET_POKEMON = gql`
{
    getPokemonByDexNumber(number:42) {
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
        <div>
        <h2>Player 1 got a:</h2>
        <h3>{data.getPokemonByDexNumber.species}!</h3>
        <img src={data.getPokemonByDexNumber.sprite}></img>
        <br />
        
        <br />
        </div>
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