import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import PokemonCard from './PokemonCard'
import { Grid } from "@mui/material"
import ArenaFightBtn from './ArenaFightBtn'

const useStyles = makeStyles(() => ({
    mainCardContainer: {
        display: "flex",
        justifyContent: "center"
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        maxWidth: 858,
        justifyContent: "left",
        flexWrap: "wrap",
        flex: "2 0 21%"
    },
    arenaContainer: {
        display: "flex",
        flexDirection: "row",
        width: 820,
        justifyContent: "space-between",
        flexWrap: "wrap",
        flex: "2 0 21%",
        footer: {
            width: "fit-content",
            backgroundColor: "inherit"
        },
    },
    fightCardContainer:{
        width: 286,
        height: 436
    },
    paginate: {
        display: "flex",
        justifyContent: "space-around"
    },
    fightCard: {
        backgroundColor: "lightgrey",
        border: "1px solid red",
        borderRadius: 4,
        width: 286,
        height: 436,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    btnContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"     
    },
    midText: {
        display: "flex",
        height: 60,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    pokeStat: {
        fontWeight: "bold",
        lineHeight: "1.5em",
        height: "3em",     
        overflow: "hidden",
        width: 80,
        textAlign: "center",
        border: "1px solid darkgrey",
        borderRadius: 3
    }
}))

const PokemonArena = () => {
    const classes = useStyles()  
    const pokemonList = useSelector(state => state.PokemonList.data)
    const ArenaPokemon = useSelector(state => state.ArenaPokemon.data)
    const res = pokemonList.filter(i => ArenaPokemon.some(item => item === i.data.id))

    const poke1 = () => {
        if (!res[0]){
            return <div className={classes.fightCard}>Nie wybrano pokemona!</div>              
        }
        return <PokemonCard pokemon={res[0].data} />  
    }
    const poke1Stat = () => {
        if (!res[0]){
            return <div className={classes.pokeStat}>-</div>              
        }
        return <div className={classes.pokeStat}>Power<br></br>{res[0].data.weight*res[0].data.base_experience} </div>
    }
    const poke2 = () => {
        if (!res[1]){
            return <div className={classes.fightCard}>Nie wybrano pokemona!</div>            
        }
        return <PokemonCard pokemon={res[1].data} />  
    }
    const poke2Stat = () => {
        if (!res[1]){
            return <div className={classes.pokeStat}>-</div>            
        }
        return <div className={classes.pokeStat}>Power<br></br>{res[1].data.weight*res[1].data.base_experience} </div>
    }

    return (
        <div className={classes.mainCardContainer}>
            <div className={classes.cardContainer}>
                <div className={classes.arenaContainer}>
                    <Grid className={classes.footer}>
                            {poke1()}          
                    </Grid>
                    <div className={classes.btnContainer}>
                        <div className={classes.midText}>{poke1Stat()} VS.{poke2Stat()}</div>
                        <ArenaFightBtn/>
                    </div>
                    <Grid className={classes.footer}>              
                            {poke2()}           
                    </Grid>

                </div>   
            </div>
      </div>
  )
}

export default PokemonArena
