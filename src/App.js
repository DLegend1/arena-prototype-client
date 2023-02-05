import './App.css';
import React, { useEffect,useState } from 'react';

import MapComponent from './components/Map';


import styles from './components/Map.module.css'
import {players,playersRace,playersStack} from "./Helpers/MockData/Players";
import {og,newMap} from "./Helpers/MapStringHelper";
import newplayers from './Helpers/MockData/NewPlayers';
import {Shots} from './Helpers/MockData/Shots';


function App() {
  const [gamePlayers,setGamePlayers] = useState([...playersStack]);
  const [map,setMap] = useState(og);
  const [shots,setShoots] = useState([])
  useEffect(() => {
    setGamePlayers(playersStack);
  }, []);
  return (
    // <React.StrictMode>
    <div>

    <MapComponent players = {gamePlayers} mapString = {map} shots= {shots}/>
    <button onClick={()=> setGamePlayers(MovePlayers(gamePlayers))}> Click Me! </button>
    <button onClick={()=> setMap(newMap)}> Change Map! </button>
    <button onClick={()=> setShoots(CleanShootData(Shots))}> Click me to see shots!</button>
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

// Clean shoot data to have Coords {row and col}
//Assumption col and row are always 1 digit
function CleanShootData(shoots){
  for (let shoot of shoots){
    let coordsRow = shoot.Coords[1];
    let coordsCol = shoot.Coords[3];
    shoot.Coords = {row: parseInt(coordsRow), col: parseInt(coordsCol)};
  }

  return shoots;
}




export default App;
