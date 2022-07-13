import React from "react"
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import title from "../img/title.png"
import Badge from '@material-ui/core/Badge'
import { useLocation } from 'react-router-dom'
import { makeStyles } from "@material-ui/core"
import { searchPokemon } from "../actions/PokemonActions";


// const useStyles = makeStyles(() => ({
//   pokemonFavouriteOff: {
//     color: "black",
//     backgroundColor: "white",
//     transition: ".5s ease-out",
//     border: "white"
//   },
//   pokemonFavouriteOn: {
//     color: "black",
//     backgroundColor:"lightblue",
//     transition: ".5s ease-out",
//     border: "1px solid darkgrey" 
//   },
//     pokemonArenaOff: {
//     color: "black",
//     backgroundColor: "white",
//     transition: ".5s ease-out",
//     border: "white"
//   },
//   pokemonArenaOn: {
//     color: "black",
//     backgroundColor:"lightblue",
//     transition: ".5s ease-out",
//     border: "1px solid darkgrey" 
//   }
// }))

const NavBar = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const locationData = location.pathname
 
  const favPokemon = useSelector(state => state.FavPokemon.data)
  const favPokeCount = favPokemon.length
  const ArenaPokemon = useSelector(state => state.ArenaPokemon.data)
  const arenaPokeCount = ArenaPokemon.length
  if (locationData === '/') {
    const dataSearch = ''
    dispatch(searchPokemon(dataSearch))
  }

  return (
    <AppBar color="inherit" position="fixed" sx={{ bgcolor: "lightgray" }}>
      <Toolbar className="nav-links">
        <IconButton />
        <Button
          component={Link} to={'/'}
          className="navbarButton"
          color="inherit"
          sx={{ m: -3, p: 1, bgcolor: "background.inherit" }}
          placeholder="Strona główna">
          <img src={title} alt="Strona główna" margin-top="20px" width="200px" height="auto" />
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 3 }}
        ></Typography>   
        <Badge badgeContent={favPokeCount} color={locationData === '/fav' ? "secondary" : "primary"} >
          <Button
            // className={locationData === '/fav'? classes.pokemonFavouriteOn : classes.pokemonFavouriteOff}           
            component={Link} to={'/fav'}
            color="inherit"
          >Ulubione
          </Button>
        </Badge>
        <Badge badgeContent={arenaPokeCount} color="primary">
          <Button
            // className={locationData === '/arena'? classes.pokemonArenaOn : classes.pokemonArenaOff}                      
            component={Link} to={'/arena'}
            sx={{ ml: 3, bgcolor: "background.inherit" }}
            color="inherit"
          >Arena
          </Button>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar