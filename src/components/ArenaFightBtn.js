import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles"
import Button from "@mui/material/Button";
import { fightArenaPokemon, resetArenaPokemon, fightArenaPokemonAfter, fightArenaPokemonBefore } from "../actions/PokemonActions";
import {Link} from "react-router-dom"

const useStyles = makeStyles(() => ({
  fightBtn: {
    height: 80,
    width: 200,
    fontWeight: "bold",
    fontSize: "large",
    border: "2px solid black",
    color: 'black',
    marginTop: 3,
    marginLeft: 3,
    marginRight: 3,
    "&:hover": {
      color: "red",
      border: "3px solid red",
      "& .MuiListItemIcon-root": {},
      height: 86,
      width: 206,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      transition: ".2s ease-out"
    }
  },
  fightBtnInactive:{
    height: 80,
    width: 200,
    fontWeight: "bold",
    fontSize: "large",
    border: "2px solid grey",
    color: 'grey',
    marginTop: 3,
    marginLeft: 3,
    marginRight: 3,
    disabled: 'true'
  },
  fightBtnContainer: {
    height: 90
  }
}))
  
const ArenaFightBtn = () => {

  const classes = useStyles()  
  const dispatch = useDispatch()
  const ArenaPokemon = useSelector(state => state.ArenaPokemon.data)
  const pokemonList = useSelector(state => state.PokemonList.data)
  const ArenaPokemonLen = useSelector(state => state.ArenaPokemon.data.length)
  const arenaFightData = pokemonList.filter(i => ArenaPokemon.some(item => item === i.data.id))
  const isFightDone = useSelector(state => state.ArenaPokemon.fightDone)

  let isArenaSet = false

  if (ArenaPokemonLen === 2) {
    isArenaSet = true
  } else {
    isArenaSet = false
  }

  const showBtn = () => {
    if (isArenaSet === true && isFightDone === false) {
      return (
        <div>
          <Button
            className={isArenaSet !== true ? classes.fightBtnInactive : classes.fightBtn}
            onClick={() => {handleClick()}}
            type="submit"
          >
            WALCZ!
          </Button>
        </div>
      )
    } else if (isArenaSet === true && isFightDone === true) {
      return (
        <div>
          <Link to={`/`} style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <Button
              className={isArenaSet !== true ? classes.fightBtnInactive : classes.fightBtn}
              onClick={() => {handleClick2()}}
              type="submit"
            >
              OPUŚC ARENĘ
            </Button>
            </Link>
        </div>
      )
    }
  }

  const handleClick = () => {
    dispatch(fightArenaPokemon(arenaFightData))
    dispatch(fightArenaPokemonAfter())
  }   

  const handleClick2 = () => {
    dispatch(resetArenaPokemon())
       dispatch(fightArenaPokemonBefore())
  }  

  return (
    <div>
      <div className={classes.fightBtnContainer}>
        {showBtn() }
      </div>
    </div>    
  )
}

export default ArenaFightBtn