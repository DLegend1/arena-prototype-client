import './App.css';
import React, { useEffect,useState } from 'react';

import MapComponent from './components/Map';


import styles from './components/Map.module.css'
import {players,playersRace,playersStack} from "./Helpers/MockData/Players";
import newplayers from './Helpers/MockData/NewPlayers';


function App() {
  const [gameplayers,setGamePlayers] = useState([...playersStack]);
  useEffect(() => {
    setGamePlayers(playersStack);
  }, []);

  return (
    // <React.StrictMode>
    <div>

    <MapComponent players = {gameplayers} />
    <button onClick={()=> setGamePlayers(MovePlayers(gameplayers))}> Click Me! </button>
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
