import React, { useEffect,useState } from "react";
import TileComponent from "./Tile";
import OverlayComponent from "./Overlay";

import styles from './Map.module.css'
import { loadMapCode } from "../Parser/DackosMap";
import { getPlayerScreenSpaceCoordinates } from "../Helpers/MapHelper";


const MapComponent = (props) => {
  const [PlayersCopy,setPlayersCopy] = useState([...props.players]);
  let playercoords = props.players.map(p => p.coords);

  // props.setPlayers = setPlayersCopy; 
  // props.playersCopy = PlayersCopy;

  // let setPlayersAt = props.setPlayers;
  // let playersCopyAt = props.playersCopy;

  useEffect (() => {
    console.log("UseEffect")
    let screenspacecoords = playercoords.map(c => getPlayerScreenSpaceCoordinates(c))
    UpdatePlayers(screenspacecoords,PlayersCopy)
  },[props.players])
  
  let tiledata = loadMapCode(props.mapString);
  //console.log(tiledata)
  return (
    <div className={styles.Container}>

      <table className={styles.Table}>
        <tbody>
          {tiledata.map((row, row_index) => {
            return (
              <tr key={row_index}>
                {row.map((col, col_index) => (
                  <TileComponent 
                  id={row_index + col_index.toString()} 
                  key={col_index}
                  text={row_index + col_index.toString()}
                  type={col.baseClassName}
                  partial= {col.partial}
                  rotation ={col.direction}/>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <OverlayComponent players={PlayersCopy} shots = {props.shots}/>

      </div>
  );
  
function UpdatePlayers(newcoords,PlayersCopy){
  if (Array.isArray(PlayersCopy) && PlayersCopy.length){
  let newPlayers = PlayersCopy.map((player,index) => 
  { return {...player,screenspacecoords: {y: newcoords[index].y, x: newcoords[index].x}}} )
  setPlayersCopy(newPlayers)
  }
}

};



export default MapComponent;
