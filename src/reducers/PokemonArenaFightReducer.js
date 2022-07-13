const initialState = {
  pokemonWon: '',
  pokemonLost: '',
  data: []
}

const PokemonArenaFightReducer = (state = initialState, action) => {
  if (action.type === "POKEMON_FIGHT_ARENA") {
      return {
        ...state,
        data: action.payload,
        pokemonWon: action.pokemonWonPayload,
        pokemonLost: action.pokemonLostPayload
    }
  } 
      return state
}

export default PokemonArenaFightReducer