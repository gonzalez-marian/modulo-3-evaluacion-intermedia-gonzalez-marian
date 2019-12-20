import React from 'react';

const Pokemon = props => {
    return <div>
        <img src={props.pokeUrl} alt={props.pokeName} />
        <h2 className="title">{props.pokeName}</h2>
        <div className="details">
            {props.pokeType.map((types) => {
                return <span className="items"> {types} </span>
            })}
        </div>
    </div>
}

export default Pokemon;

