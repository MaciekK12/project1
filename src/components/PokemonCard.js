import React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"
import FavBtn from "./FavBtn"
import { useSelector } from "react-redux"
import { Grid } from "@mui/material"
import ArenaBtn from "./ArenaBtn"
import {Link, useLocation} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 270,
    height: 420,
    justifyContent:'space-between',    
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
      transform: 'scale3d(1.02, 1.02, 1)',
      cursor: 'pointer',
    },
    margin: '8px',
    textAlign: 'center',
  },
  cardInactive: {
    pointerEvents: 'none',
    opacity: 0.6,
    filter: 'grayscale(100%)',
    display: 'flex',
    flexDirection: 'column',
    width: 270,
    height: 420,
    justifyContent:'space-between',    
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
      transform: 'scale3d(1.02, 1.02, 1)',
      cursor: 'pointer',
    },
    margin: '8px',
    textAlign: 'center',
  },
  pokemonIdNumber: {
    display: 'flex',
    fontSize: 14,
    justifyContent: 'flex-end',
  },
  avatar: {
    flex: 1,
    maxHeight:'100%',
    maxWidth: '100%'
  },
  avatarContainer: {
    height: theme.spacing(19),
  },
  cardContent: {
    paddingBottom:'0px !important'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 0,
    marginLeft: 30
  },
  statDesc: {
    fontWeight: 'bold',
    fontSize: 16
  },
  stat: {
    fontSize: 18,
    color: 'rgb(0 0 0 / 54%)'
  },
  pokeName: {
    padding: 8,
    fontWeight: 'bold',
    textTransform: 'capitalize' 
  },
  arenaStatsWon: {
    fontFamily: "Helvetica",
    fontSize: 'medium',
    color: "green",
    fontWeight: 'bold',
  },
  arenaStatsLost: {
    fontFamily: "Helvetica",
    fontSize: 'medium',
    color: "red",
    fontWeight: 'bold',
  },
  arenaStatsContainer: {
    width: 85,
    textAlign: 'left'
  }
}))

const PokemonCard = ({ pokemon }) => {
  const location = useLocation()
  const locationData = location.pathname
  const classes = useStyles()
  const pokemonArenaFight = useSelector(state => state.fightArenaPokemon)
  const pokemonLost = useSelector(state => state.fightArenaPokemon.pokemonLost)
  
  let showArenaData = []

  if(pokemonArenaFight.data.length === 0){ 
    showArenaData = pokemon
  } else if(pokemonArenaFight.data.length > 0 ){
    showArenaData = pokemonArenaFight.data[pokemon.id-1].data    
  }

  return (
    <Card className={pokemonLost === pokemon.id && locationData !== '/' ? classes.cardInactive : classes.card} variant="elevation" >
      <Link to={`/pokemon/${pokemon.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> 
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.pokemonIdNumber}
          color="textSecondary"
        >
          ID: {pokemon.id}
        </Typography>
          <div className={classes.avatarContainer}>
            <img
              alt={pokemon.name}
              src={`http://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
              className={classes.avatar}
            />
          </div>          
        <Typography
            variant="h6"  
          className={classes.pokeName}  
        >
          {pokemon.name}
        </Typography>
        <Grid container className={classes.statContainer}>
          <Grid item xs={6} sx={{ mb: 1 }}>
            <Grid className={classes.stat}>{pokemon.height}</Grid>
            <Typography className={classes.statDesc}>
              Height
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mb: 1 }}>
              <Grid className={classes.stat} >{showArenaData.base_experience}</Grid>
            <Typography className={classes.statDesc}>
              Base exp.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mb: 1 }}>
              <Grid className={classes.stat}>{pokemon.weight}</Grid>
            <Typography className={classes.statDesc}>
              Weight
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mb: 1 }}>
            <Grid className={classes.stat}>{pokemon.abilities[0].ability.name}</Grid>
            <Typography className={classes.statDesc}>
              Ability
            </Typography>
          </Grid>
        </Grid>
        </CardContent>
        </Link>
      <CardActions className={classes.cardActions}>
        <FavBtn id={pokemon.id} />
          <ArenaBtn id={pokemon.id} />
        <div className={classes.arenaStatsContainer}>
          <div className={classes.arenaStatsWon}>Won: {showArenaData.won}</div>
          <div className={classes.arenaStatsLost}>Lost: {showArenaData.lost}</div>
          <div></div>
        </div>
      </CardActions>      
    </Card>
  )
}

export default PokemonCard
