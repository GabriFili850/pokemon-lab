import React from 'react'

const PokemonDetail = ({ pokemon}) => {
    if(!pokemon) return null;
    return (
    <dl>
        <dt>Name</dt>
        <dd>{pokemon.name}</dd>
    </dl>
    )
}

export default PokemonDetail;