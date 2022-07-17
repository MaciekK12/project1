import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import PokemonCard from './PokemonCard'
import { Grid } from "@mui/material"
import { useLocation } from 'react-router-dom'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
    backgroundColor:'white'
  },
  statContainer: {
    padding: '0px 20px 0px 30px'
  },
  avatar: {
    width: '260px',
    height: 'auto',
    margin:'30px 0px 0px 30px'
  }
}))

const PokemonDetail = () => {
  const classes = useStyles()
  const location = useLocation()
  const pokemon = location.pathname.match(/\d+/)[0]
  const pokemonDetail = useSelector(state => state.PokemonList.data[pokemon-1].data)

  return (
    <div className={classes.main} key={pokemon.id}>
          <div>
        <img
          className={classes.avatar}
          alt={pokemon.name}
          src={`http://img.pokemondb.net/artwork/${pokemonDetail.name}.jpg`}
      />
    </div>
      <div className={classes.statContainer}>
        
        <h1 className={classes.avatar}>
          {pokemonDetail.name}
        </h1>
        <div>
          Weight: {pokemonDetail.weight}
        </div>
        <div>
          Height: {pokemonDetail.height}
        </div>
        <div>
          Base experience: {pokemonDetail.base_experience}
        </div>
        <div>
          Abilities: {pokemonDetail.abilities.map((el) => {
            return <div>- {el.ability.name}</div>
          })}
        </div>  
      </div>
    </div>
  )
}

export default PokemonDetail
