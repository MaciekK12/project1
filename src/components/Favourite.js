import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import PokemonCard from './PokemonCard'
import { Grid } from "@mui/material"
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  mainCardContainer: {
    display: "flex",
    justifyContent: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 858,
    justifyContent: "left",
    flexWrap: "wrap",
    flex: "2 0 21%"
  },
    footer: {
    width: "fit-content",
    backgroundColor: "inherit",
  },
  paginate: {
    display: "flex",
    justifyContent: "space-around",
  }
}))

const PokemonFavourite = () => {
    const classes = useStyles()  
    const pokemonList = useSelector(state => state.PokemonList.data)
    const favPokemon = useSelector(state => state.FavPokemon.data)

const showData1 = () => {
    const res = pokemonList.filter(i => favPokemon.some(item => item === i.data.id))

  if (pokemonList.length === 0) {
    console.log(pokemonList.length)
    return (
      <Grid>
        <div>Brak ulubionych pokemonów!</div>
      </Grid>)

  } else {
    return res.map((el, index) => {
      return (
        <Grid className={classes.footer} key={index}>
          <PokemonCard pokemon={el.data} />
        </Grid>
      )
    })
  }
  }

  return (

      <div className={classes.mainCardContainer}>
        <div className={classes.cardContainer}>
            {showData1()}
        </div>
      </div>
  )
}

export default PokemonFavourite