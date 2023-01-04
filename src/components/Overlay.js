import React from "react";
import styles from './Map.module.css'
import PlayerComponent from "./Player";
import { getTileScreenSpaceCoordinates } from "../Helpers/MapHelper";

const OverlayComponent = (props) => {
  console.log(props.players)
  return (
    <div className={styles.Overlay}>
        {props.players.map((player, index) => {

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
