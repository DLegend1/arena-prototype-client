import './App.css';
import React, { useEffect,useState } from 'react';

import MapComponent from './components/Map';


import styles from './components/Map.module.css'
import players from "./Helpers/MockData/Players";
import newplayers from './Helpers/MockData/NewPlayers';


function App() {
  const [gameplayers,setGamePlayers] = useState([...players]);
  useEffect(() => {
    setGamePlayers(players);
  }, []);

  return (
    <React.StrictMode>
    <MapComponent players = {gameplayers} />
    <button onClick={()=> setGamePlayers(newplayers)}> Click Me! </button>
    </React.StrictMode>
    
  );
}




export default App;
