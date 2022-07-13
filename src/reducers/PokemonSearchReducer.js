const initialState = {
  data: []
}

const PokemonSearchReducer = (state = initialState, action) => {
  if (action.type === "POKEMON_SEARCH") 
      return {
        ...state,
        data: action.payload
    } 
      return state
}

export default PokemonSearchReducer