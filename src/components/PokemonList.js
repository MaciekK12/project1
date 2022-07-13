import React, { useState } from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import PokemonCard from "./PokemonCard"
import ReactPaginate from 'react-paginate'
import Grid from "@mui/material/Grid"
import SearchBar from "./SearchBar"

const useStyles = makeStyles(() => ({
  mainCardContainer: {
    display: "flex",
    justifyContent: "center"
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 858,
    justifyContent: "center",
    flexWrap: "wrap",
    flex: "2 0 21%"
  },
    footer: {
    width: "fit-content",
    backgroundColor: "inherit"
  },
  paginationContainer: {
    marginTop: 9,
    display: "flex",
    height: "auto",
    justifyContent: "center" 
  },
  paginationBorder: {
    height: "auto",
    backgroundColor: "white",
    border: "1px solid lightgrey",
    borderRadius: 3, 
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 4%), 0px 1px 3px 0px rgb(0 0 0 / 2%)"
  },
  paginate: {
    display: "flex",
    justifyContent: "space-between",
    height: 30,
    padding: "0px 10px 0px 10px",
    margin:"4px 0px 0px 0px",
    width: 820
  },
}))

const PokemonList = () => {
  
  const classes = useStyles()  
  const pokemonList = useSelector(state => state.PokemonList.data)
  const pokemonSearch = useSelector(state => state.searchPokemon.data)
  const pokemonArenaFight = useSelector(state => state.fightArenaPokemon)

  const [startNum, setPage] = useState(0)
  const changePage = (start) => { 
    setPage(start)
  }

  const showData = (start) => {
    const end = start + 15
    if (pokemonList !== []) {
      if (Object.keys(pokemonSearch).length === 0) {
        return pokemonList.slice(start, end).map((el, index) => {
          return ( 
            <Grid className={classes.footer} key={index}>
                <PokemonCard pokemon={el.data}/>
            </Grid>                      
          )
        })
      } else {
        const res = pokemonList.filter(i => pokemonSearch.some(item => item.data.id === i.data.id))   
        return res.map((el, index) => {
          return ( 
            <Grid className={classes.footer} key={index}>
              <PokemonCard pokemon={el.data}/>
            </Grid>          
          )
        })
      }
    } else if (pokemonList.data === [] && pokemonList.errorMsg === 'unable to get pokemon') {
      return <p>Unable to get data</p>
    }
      return <p>Loading...</p>
  }

  return (
    <div>
     <SearchBar/> 

      <div className={classes.paginationContainer}>
        <div className={classes.paginationBorder}>
          <ReactPaginate
            className={classes.paginate}
            pageCount={Math.ceil(pokemonList.length / 15 - 1)}
            pageRangeDisplayed={10}
            marginPagesDisplayed={10}
            onPageChange={(start) => changePage((start.selected*15)+start.selected)}
            />
        </div>
      </div>
      <div className={classes.mainCardContainer}>
        <div className={classes.cardContainer}>
            {showData(startNum)}
        </div>
      </div>
    </div>
  )
}

export default PokemonList