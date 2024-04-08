import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Tabs, Tab, Spinner } from "react-bootstrap";
import BrokemonBattle from "../components/BrokemonBattle";
import BrokemonLab from "../components/BrokemonLab";
import BrokemonInfo from "./BrokemonInfo";

/**
 * This is the entry-point into the actual Brokemon Arena game
 * It start with a query to poke-gql requesting a pair of random pokemon
 * While it's waiting for a response, it outputs a react-bootstrap Spinner
 * When it's done, it returns the game screens, organized in tabs
 * --Brodie Vidrine, 4/6/24
 */

const generateRandom = () => {
    const randomMon = Math.floor(Math.random() * 999) + 1;
    let query = String(randomMon);
  
    return query;
}

const GET_POKEMON = gql`
{
    poke1: getPokemonByDexNumber(number: ${ generateRandom() } ) {
            species
            sprite
            backSprite
            baseStatsTotal
            types {
                name
            }
            baseStats {
                hp
            }
            flavorTexts {
                flavor
            }
            learnsets {
                generation8 {
                  levelUpMoves {
                    level
                    move {
                      type
                      name
                      basePower
                      shortDesc
                      category
                    }
                  }
                }
              }
    }

    poke2: getPokemonByDexNumber(number: ${ generateRandom() } ) {
        species
        sprite
        baseStatsTotal
        types {
            name
        }
        baseStats {
            hp
        },
        flavorTexts {
            flavor
        }
        learnsets {
            generation8 {
              levelUpMoves {
                level
                move {
                  type
                  name
                  basePower
                  shortDesc
                  category
                }
              }
            }
        }
    }
}
`;

function BrokemonMain(){
    
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (loading) return <Spinner className="mx-auto" animation="border" />;
    if (error) return <p>Error : {error.message}</p>;

    return (
    
        <Tabs defaultActiveKey="brokeLab" >
            <Tab eventKey="brokeLab" title="Lab">
                <BrokemonLab player1={data.poke1} cpu={data.poke2}></BrokemonLab>
            </Tab>
            <Tab eventKey="brokeBattle" title="Battle" >
                <BrokemonBattle player1={data.poke1} cpu={data.poke2}></BrokemonBattle>
            </Tab>
            <Tab eventKey="brokeInfo" title="Info" >
                <BrokemonInfo></BrokemonInfo>
            </Tab>
        </Tabs>
        
    )

}

export default BrokemonMain