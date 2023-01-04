import './App.css';
import { useEffect,useState } from 'react';

import MapComponent from './components/Map';


import styles from './components/Map.module.css'
import players from "./Helpers/MockData/Players";


function App() {
  

  return (
    
    <MapComponent players = {players} UpdatePlayers= {UpdatePlayers}/>
  );
}

function UpdatePlayers(newcoords,setPlayersCopy,PlayersCopy){
  if (Array.isArray(PlayersCopy) && PlayersCopy.length){
  let newPlayers = PlayersCopy.map((player,index) => 
  { return {...player,screenspacecoords: {y: newcoords[index].y, x: newcoords[index].x}}} )
  setPlayersCopy(newPlayers)
  }
}



export default App;
