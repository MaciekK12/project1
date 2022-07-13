import {combineReducers} from "redux"
import PokemonListReducer from "./PokemonListReducer"
import PokemonFavReducer from "./PokemonFavReducer"
import PokemonArenaReducer from "./PokemonArenaReducer"
import PokemonSearchReducer from "./PokemonSearchReducer"
import PokemonArenaFightReducer from "./PokemonArenaFightReducer"
// import PokemonHandleReducer from "./PokemonHandleReducer"

const RootReducer = combineReducers({
  PokemonList:PokemonListReducer,
  FavPokemon:PokemonFavReducer,
  ArenaPokemon:PokemonArenaReducer,
  searchPokemon:PokemonSearchReducer,
  fightArenaPokemon:PokemonArenaFightReducer,
  // handlePokemonList:PokemonHandleReducer
})

export default RootReducer