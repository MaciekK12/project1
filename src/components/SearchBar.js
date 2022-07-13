import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { InputBase, IconButton, Paper } from "@mui/material"
import { searchPokemon } from "../actions/PokemonActions"
import { FaSearch } from "react-icons/fa"

const useStyles = makeStyles(() => ({
    searchBox: {
        width: "fit-content"
    },
    searchBoxContainer: {
        display: "flex",
        justifyContent: "center"
    },
    searchBoxInput: {
        paddingLeft:12,
        flex: 1,
        width: 400,
        height: 38
    }
}))

const SearchBar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList.data)
    const pokeData = pokemonList.map(data => ({ id: data.data.id, name: data.data.name }))

    const searchText = (event) => {
        let dataSearch = []
        if (event.target.value !== '') {
             dataSearch = pokeData.filter(item => {
                return Object.keys(item).some(key =>
                    item[key].toString().toLowerCase().includes(event.target.value))
            }).map(key => { return { data: { id: key.id } } })           
        } else {
            dataSearch.length = 0 
        }
        dispatch(searchPokemon(dataSearch))
    }

    return (
        <div className={classes.searchBoxContainer}>
        <Paper component="form" className={classes.searchBox}>
            <InputBase
                className={classes.searchBoxInput}
                placeholder={"Find Your pokemon with name or ID..."}
                inputProps={{ "aria-label": "search" }}
                onChange = {searchText}
            />
            <IconButton disabled aria-label="search"> 
                <FaSearch />
            </IconButton>
        </Paper>
        </div>
    )
}

export default SearchBar