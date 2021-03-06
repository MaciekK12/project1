const initialState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0,
}

const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      }
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: true,
        errorMsg: "unable to get pokemon",
      }
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "SUCCESS",
        count: 151
      }
    default:
      return state
  }
}

export default PokemonListReducer