import React, { useEffect,useState } from "react";
import TileComponent from "./Tile";
import OverlayComponent from "./Overlay";

import styles from './Map.module.css'
import { loadMapCode } from "../Parser/DackosMap";
import { getTileScreenSpaceCoordinates } from "../Helpers/MapHelper";


const MapComponent = (props) => {
  //console.log("Check")
  //console.log(props.players)
  const [PlayersCopy,setPlayersCopy] = useState([...props.players]);
  let playercoords = props.players.map(p => p.coords);
  //console.log("Dacko")

  

  // props.setPlayers = setPlayersCopy; 
  // props.playersCopy = PlayersCopy;

  // let setPlayersAt = props.setPlayers;
  // let playersCopyAt = props.playersCopy;

  useEffect (() => {
    console.log("UseEffect")
    let screenspacecoords = playercoords.map(c => getTileScreenSpaceCoordinates(c))
    UpdatePlayers(screenspacecoords,PlayersCopy)
    //console.log("Dacko2")
  },[props.players])
  
  let tiledata = loadMapCode("6x6|DbH3EW|xHEH2E|3EX(EBEE)HE|EHX(EEEB)3E|2EHEHX|W3EHD");
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
      <OverlayComponent players={PlayersCopy}/>

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
