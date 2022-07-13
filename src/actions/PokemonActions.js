import axios from "axios"

let pokemonArray = []

export const getPokemonList = () => async dispatch => {
    const pokemonArrayBefore = []

    for (let i = 1; i < 152; i++){
        pokemonArrayBefore.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))        
    }

    pokemonArray = pokemonArrayBefore.map(key =>
    ({
        ...key,
        data: { ...key.data,won:0,lost:0 }
    }))

    try {
        dispatch({
            type:"POKEMON_LIST_LOADING"
        })        
        dispatch({
            type: "POKEMON_LIST_SUCCESS", 
            payload: pokemonArray
        })
    } catch (error) {
        dispatch({
            type: "POKEMON_LIST_FAIL",
        })
    }
}

export const addFavPokemon = (id) => async dispatch => {

    try {
        dispatch({
            type: "POKEMON_ADD", 
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const subFavPokemon = (id) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_SUB", 
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const addArenaPokemon = (id) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_ADD_ARENA", 
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const resetArenaPokemon = () => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_ARENA_RESET", 
        })
    } catch (error) {
        console.log(error)
    }
}

export const subArenaPokemon = (id) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_SUB_ARENA", 
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const searchPokemon = (dataSearch) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_SEARCH", 
            payload: dataSearch
        })
    } catch (error) {
        console.log(error)
    }
}

export const fightArenaPokemon = (arenaFightData) => async dispatch => {

    const poke1 = pokemonArray[arenaFightData[0].data.id - 1].data
    const poke2 = pokemonArray[arenaFightData[1].data.id - 1].data
    const poke1Pwr = poke1.base_experience * poke1.weight
    const poke2Pwr = poke2.base_experience * poke2.weight
    let pokeWon = ''
    let pokeLost = ''

    if (poke1Pwr > poke2Pwr) {
        pokemonArray[arenaFightData[0].data.id - 1].data.won +=1
        pokemonArray[arenaFightData[0].data.id - 1].data.base_experience +=10
        pokemonArray[arenaFightData[1].data.id - 1].data.lost +=1
        pokeWon = poke1.id
        pokeLost = poke2.id       
    }
    else if (poke1Pwr < poke2Pwr) {
        pokemonArray[arenaFightData[1].data.id - 1].data.won +=1
        pokemonArray[arenaFightData[1].data.id - 1].data.base_experience +=10
        pokemonArray[arenaFightData[0].data.id - 1].data.lost +=1
        pokeWon = poke2.id
        pokeLost = poke1.id    
    }  
    else if (poke1Pwr === poke2Pwr) {
        pokemonArray[arenaFightData[0].data.id - 1].data.base_experience += 5 
        pokemonArray[arenaFightData[1].data.id - 1].data.base_experience += 5        
        pokeWon = ''
        pokeLost = ''   
    } 

    try {
        dispatch({
            type: "POKEMON_FIGHT_ARENA",
            pokemonWonPayload: pokeWon,
            pokemonLostPayload: pokeLost,
            payload: pokemonArray 
        }) 
    } catch (error) {
        console.log(error)
    }
}

export const fightArenaPokemonBefore = () => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_FIGHT_ARENA_BEFORE", 
        })
    } catch (error) {
        console.log(error)
    }
}

export const fightArenaPokemonAfter = () => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_FIGHT_ARENA_AFTER", 
        })
    } catch (error) {
        console.log(error)
    }
}
