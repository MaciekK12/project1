import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import PokemonCard from './PokemonCard'
import { Grid } from "@mui/material"
import { useLocation } from 'react-router-dom'


const PokemonDetail = () => {
  const location = useLocation()
  const pokemon = location.pathname.match(/\d+/)[0]
  console.log(pokemon)
  const pokemonDetail = useSelector(state => state.PokemonList.data[pokemon-1].data)

  return (
    <div>
      {pokemonDetail.name}
      {/* {pokemon?.map((p) => (
        <Grid key={p.data.name}>
          <PokemonCard pokemon={p.data} />
        </Grid>  
      ))} */}
    </div>
  )
}

export default PokemonDetail
