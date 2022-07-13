const setFavourite = payload => {
    return {type: "SET_FAVOURITE", payload}
}

const arenaAdd = payload => {
    return {type: "ARENA_ADD", payload}
}

const arenaSub = payload => {
    return {type: "ARENA_SUB", payload}
}

const openDetails = payload => {
    return {type: "OPEN_DETAILS", payload}
}

const pokemonFight = payload => {
    return {type: "POKEMON_FIGHT", payload}
}





export {
    setFavourite,
    openDetails,
    pokemonFight,
    arenaSub,
    arenaAdd

}