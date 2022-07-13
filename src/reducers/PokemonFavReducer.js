const initialState = {
  data: []
}

const PokemonFavReducer = (state = initialState, action) => {
    if (action.type === "POKEMON_ADD" &&  !state.data.includes(action.payload)) 
      return {
        ...state,
        data: [...state.data, action.payload],
    } 
    else if (action.type === "POKEMON_SUB" &&  state.data.includes(action.payload)) 
      return {
        ...state,
        data: state.data.filter(item => item !== action.payload),
      } 
      return state
}

export default PokemonFavReducer