import React, { useEffect} from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import Favourite from "./components/Favourite"
import Arena from "./components/Arena"
import PokemonDetail from "./components/PokemonDetail"
import "./App.css"
import PokemonList from "./components/PokemonList"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonList } from "./actions/PokemonActions"

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {fetchData()})
  const fetchData = () => { dispatch(getPokemonList()) }

  return (  
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/fav" element={<Favourite />} />
        {/* <Route path="/pokemon/:pokemon" element={<PokemonDetail />} /> */}
        {/* <Route path="/pokemon" element={<PokemonDetail />} /> */}
      </Routes>
    </Router>   
  )
}

export default App