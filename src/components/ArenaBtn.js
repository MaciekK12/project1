import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { addArenaPokemon, subArenaPokemon } from "../actions/PokemonActions";
import { Icon } from '@iconify/react';
import { makeStyles } from "@material-ui/core";

const AddArenaBtn = ({id}) => {
  const dispatch = useDispatch()
  const pokemonArray = useSelector(state => state.ArenaPokemon.data)
  const isInArena =  pokemonArray.includes(id)

  const handleClick = () => {
    if (!pokemonArray.includes(id)) {
      if (pokemonArray.length < 2) {
        dispatch(addArenaPokemon(id))
      } else {
        alert("Do areny mogą dołączyć tylko dwa pokemony!")
      }
    } else {
      dispatch(subArenaPokemon(id))
    }   
  }

  return (
    <IconButton     
      sx={{
        color: isInArena ? 'black' : 'lightgray', 
        "&:hover": {
          color: "black",
          "& .MuiListItemIcon-root": {},
        },
      }}
      onClick={() => {handleClick()}}
      type="submit"
    >
      <Icon icon="charm:swords" />   
    </IconButton>
  )
}

export default AddArenaBtn