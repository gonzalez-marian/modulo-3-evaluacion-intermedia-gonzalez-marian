import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
    return <ul className="wrapper">
        {props.pokes.map((poke, index) => {
            return <li className="poke-list">
                <Pokemon
                    pokeUrl={poke.url}
                    pokeName={poke.name}
                    pokeType={poke.types}
                />
            </li>
        })}
    </ul>
}

export default PokeList;