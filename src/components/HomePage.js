// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@mui/material/Grid";
// import Search from "./Search";
// import axios from "axios";
// import PokemonCard from "./PokemonCard";
// import useFetch from "../hooks/useFetch";
// import PokemonList from "./PokemonList";

// const useStyles = makeStyles(() => ({
//   footer: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   h2: {
//     textAlign: "center",
//   },
//   grid: {
//     // display: "flex",
//     justifyContent: "center",
//     maxWidth: "100%",
//     alignItems: "center",
//     backgroundColor: "inherit",
//   },
// }))

// const HomePage = () => {
  
//   const classes = useStyles()

//   const [pokemon, setPokemon] = useState([])

//   const getPokemonData = async (pokemon) => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     return response
//   }

//   const getPokemonList = async () => {
//     const pokemonArray = []
//     for (let pokemon = 1; pokemon <= 151; pokemon++) {
//       pokemonArray.push(await getPokemonData(pokemon))
//     }
//     setPokemon(pokemonArray)
//   }

//    useEffect(() => {
//     getPokemonList()
//   }, [])

//   return (
//     <>
//       <h2 className={classes.h2}>
//         {/* <Search
//           sx={{ borderColor: "grey", borderStyle: "solid", borderWidth: "1px" }}
//         /> */}
//       </h2>
        
//       <Grid container className={classes.grid}>
        

//         {pokemon?.map((p) => (
//           <Grid className={classes.footer} key={p.data.name}>
//             <PokemonCard pokemon={p.data} />
//           </Grid>  
//         ))}
        
//       </Grid>
//     </>
//   )
// }

// export default HomePage;
