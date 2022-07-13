const initialState = {
  data: [],
  fightDone: false
}

const PokemonArenaReducer = (state = initialState, action) => {
  if (action.type === "POKEMON_ADD_ARENA" && !state.data.includes(action.payload)) {
        if (state[0] > action.payload) {
      return {
        ...state,
        data: [action.payload,...state.data]
      } 
    } else {
            return {
        ...state,
        data: [...state.data,action.payload]
      } 
    }
  } else if (action.type === "POKEMON_SUB_ARENA" && state.data.includes(action.payload)) {
      return {
        ...state,
        data: state.data.filter(item => item !== action.payload)
    } 
  } else if ( action.type === "POKEMON_ARENA_RESET") {
    return {
      ...state,
      data: []
      }
  } else if(action.type === "POKEMON_FIGHT_ARENA_AFTER") {
    return {
        ...state,
        fightDone: true
    }
  } else if(action.type === "POKEMON_FIGHT_ARENA_BEFORE") {
    return {
        ...state,
        fightDone: false
    }
  }
    
     return state
}

export default PokemonArenaReducer