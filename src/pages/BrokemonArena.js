import React from "react";
import { useQuery, gql} from '@apollo/client';

import ContentWrapper from "../components/ContentWrapper";
import Brokemon from "../components/Brokemon";
import { Row, Col, Spinner } from "react-bootstrap";

const generateRandom = () => {
    const randomMon = Math.floor(Math.random() * 150) + 1;
    let query = String(randomMon);
  
    return query;
}

const GET_POKEMON = gql`
{
    poke1: getPokemonByDexNumber(number: ${ generateRandom() } ) {
            species
            sprite
            baseStatsTotal
            baseStats {
                hp
            },
            flavorTexts {
                flavor
            }
    }

    poke2: getPokemonByDexNumber(number: ${ generateRandom() } ) {
        species
        sprite
        baseStatsTotal
        baseStats {
            hp
        },
        flavorTexts {
            flavor
        }
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

    const { loading, error, data } = useQuery(GET_POKEMON);

    if (loading) return <Spinner className="mx-auto" animation="border" />;
    if (error) return <p>Error : {error.message}</p>;

    return(
        <Row className="d-flex align-items-stretch">
           
            <Col className="d-flex align-items-stretch" >
                <Brokemon  species={ toTitleCase(data.poke1.species)  }
                    sprite={data.poke1.sprite}
                    descr={data.poke1.flavorTexts[0].flavor}
                    hp={data.poke1.baseStats.hp}
                    totalCP={data.poke1.baseStatsTotal}
                ></Brokemon>
            </Col>
            <Col className="col-2 text-center d-flex align-items-stretch">
                <h3 className="mx-auto align-self-center">VS</h3>
            </Col>
            <Col className="d-flex align-items-stretch" >
                <Brokemon  species={  toTitleCase( data.poke2.species ) }
                    sprite={data.poke2.sprite}
                    descr={data.poke2.flavorTexts[0].flavor}
                    hp={data.poke2.baseStats.hp}
                    totalCP={data.poke2.baseStatsTotal}
                ></Brokemon>
            </Col>
        </Row>
        
    );
}


function BrokemonArena(){

    return(
        <ContentWrapper>
                <h1>Brokémon Arena</h1>
                <br></br>
                <p>
                    Welcome to the arena! 
                    In this example, I'm using the Apollo Client and  GraphQL to fetch a pair of random "Brokémon". 
                    Battle feature and leaderboard coming soon. BV, 4/4/24
                </p>
                <GrabPokemon dex={55}></GrabPokemon>
        </ContentWrapper>
    )
}

export default BrokemonArena