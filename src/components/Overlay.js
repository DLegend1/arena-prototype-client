import React from "react";
import styles from './Map.module.css'
import PlayerComponent from "./Player";

const OverlayComponent = (props) => {
  let playersGroupedByTile = {};
  
  for (let player of props.players){
    let key = player.coords.row.toString() + player.coords.col.toString();
    if (key in playersGroupedByTile){
      playersGroupedByTile[key].push({...player, screenspacecoords: {...player.screenspacecoords} || {}});
    }
    else {
      playersGroupedByTile[key] = [{...player, screenspacecoords: {...player.screenspacecoords} || {}}];
    }
  }
  
  let displace = 8;
  if (props.players[0].screenspacecoords) {
    
    for (let players of Object.values(playersGroupedByTile)){
     /* {Damjan was Right}
       if(players.length === 1){
        continue;
      }

      if (players.length % 2 === 0){
        players[0].screenspacecoords.x = players[0].screenspacecoords.x - ((displace/2) + ((displace) * (players.length/2-1)));
        players[0].screenspacecoords.y = players[0].screenspacecoords.y - ((displace/2) + ((displace) * (players.length/2-1)));
        for (let i = 1; i < players.length; i++){
          players[i].screenspacecoords.x = players[i-1].screenspacecoords.x + displace;
          players[i].screenspacecoords.y = players[i-1].screenspacecoords.y + displace;
        }
      }
      else{
        players[0].screenspacecoords.x = players[0].screenspacecoords.x - (displace * parseInt(players.length/2));
        players[0].screenspacecoords.y = players[0].screenspacecoords.y - (displace * parseInt(players.length/2));
        for (let i = 1; i < players.length; i++){
          players[i].screenspacecoords.x = players[i-1].screenspacecoords.x + displace;
          players[i].screenspacecoords.y = players[i-1].screenspacecoords.y + displace;
        }
      } */
    
      let offset = ((players.length - 1) * displace / 2) * -1;
      for (let player of players){
        player.screenspacecoords.x = player.screenspacecoords.x + offset;
        player.screenspacecoords.y = player.screenspacecoords.y + offset;
        offset += displace;
      }
    }
  }

  // console.log(playersGroupedByTile)
  return (
    <div className={styles.Overlay}>
        {Object.values(playersGroupedByTile).flat().map((player, index) => {
          
          return (
            <PlayerComponent
              key={index}
              top={player.screenspacecoords?.y || 1}
              left={player.screenspacecoords?.x || 1}
              color={player.color}
            />
          );
        })}
    </div>
  );
};

export default OverlayComponent;
