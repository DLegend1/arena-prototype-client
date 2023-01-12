import './App.css';
import React, { useEffect,useState } from 'react';

import MapComponent from './components/Map';


import styles from './components/Map.module.css'
import {players,playersRace,playersStack} from "./Helpers/MockData/Players";
import {og,newMap} from "./Helpers/MapStringHelper";
import newplayers from './Helpers/MockData/NewPlayers';


function App() {
  const [gamePlayers,setGamePlayers] = useState([...playersStack]);
  const [map,setMap] = useState(og);
  useEffect(() => {
    setGamePlayers(playersStack);
  }, []);
  return (
    // <React.StrictMode>
    <div>

    <MapComponent players = {gamePlayers} mapString = {map}/>
    <button onClick={()=> setGamePlayers(MovePlayers(gamePlayers))}> Click Me! </button>
    <button onClick={()=> setMap(newMap)}> Change Map! </button>
    </div>

    // </React.StrictMode>
    
  );
}

function MovePlayers(players) {
  let newplayers = players.map(p => {
    let newcoords = p.coords;
    newcoords.col++;
    return {...p, coords: newcoords};
  });
  return newplayers;  
}




export default App;
