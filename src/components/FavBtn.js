import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { addFavPokemon, subFavPokemon } from "../actions/PokemonActions";

const FavBtn = ({id}) => {

  const dispatch = useDispatch()
  const pokemonArray = useSelector(state => state.FavPokemon.data)
  const isFav =  pokemonArray.includes(id)

  const handleClick = () => {
      if (pokemonArray.includes(id)) {
        dispatch(subFavPokemon(id))
      } else if (!pokemonArray.includes(id)) {
        dispatch(addFavPokemon(id))
      }
  }

  return (
    <IconButton
      sx={{
        color: isFav ? 'darkred' : 'lightgray', 
        "&:hover": {
          color: "red",
          "& .MuiListItemIcon-root": {},
        },
      }}
      onClick={() => {handleClick()}}
      type="submit"
    >
      <FavoriteIcon />
    </IconButton>
  )
}

export default FavBtn