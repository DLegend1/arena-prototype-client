import { useState } from "react";
import { getTileEdgeCenterScreenSpaceCoordinates,getTileDimension,getPartialDimension, getShotLength } from "../Helpers/MapHelper";
import ShotRenderComponent from "./ShotRender";

const ShotComponent = (props) => {
  
    if (props.shots.length > 0){
    let shotscoords = props.shots.map((c) => [c.Coords,c.Direction]);
    console.log(shotscoords)
    let screenspacecoords = shotscoords.map(c => getTileEdgeCenterScreenSpaceCoordinates(c[0],c[1]))
    let ShotCopy = UpdateShots(screenspacecoords,props.shots)


    // Set Shots and give them screenspace coordinates
    //  Displace shots if they are in the same tile depending on direction
    let shotsGroupedByTile = {};
    console.log(ShotCopy)
    for (let shot of ShotCopy){
        let key = shot.Coords.row.toString() + shot.Coords.col.toString();
        if (key in shotsGroupedByTile){
            shotsGroupedByTile[key].push({...shot, screenspacecoords: {...shot.screenspacecoords}, direction: {...shot.direction} || {}});
        }
        else {
            shotsGroupedByTile[key] = [{...shot, screenspacecoords: {...shot.screenspacecoords}, direction: {...shot.direction} || {}}];
        }
    }

    let displace = 10;
    if (ShotCopy[0].screenspacecoords) {
      for (let shots of Object.values(shotsGroupedByTile)){
        let offsetequation = ((shots.length - 1) * displace / 2) * -1;
        let offset = offsetequation;
        if (shots.Direction === "Up" || shots.Direction === "Bottom"){
            for (let shot of shots){
                shot.screenspacecoords.x = shot.screenspacecoords.x + offset;
                offset += displace;
            }
        }
        else {
            for (let shot of shots){
                shot.screenspacecoords.y = shot.screenspacecoords.y + offset;
                offset += displace;
            }
        }
      }
    }

    // Set shots width and height
    let shotLength = getShotLength();
    for (let shot of Object.values(shotsGroupedByTile).flat()){
        if (shot.Direction === "Up" || shot.Direction === "Bottom"){
            shot.width = getPartialDimension()/2;
            shot.height = shotLength;
        }
        else {
            shot.width = shotLength;
            shot.height = getPartialDimension()/2;
        }
    }
    console.log(shotsGroupedByTile)
    // Render shots
    return (
        <div >
            {Object.values(shotsGroupedByTile).flat().map((shot, index) => {
              
              return (
                <ShotRenderComponent
                    key={index}
                    top={shot.screenspacecoords?.y || 1}
                    left={shot.screenspacecoords?.x || 1}
                    color={shot.Team}
                    width={shot.width}
                    height={shot.height}
                    direction = {shot.Direction}
                />
              );
            })}
        </div>);
    }

    function UpdateShots(screenspacecoords,ShotCopy){
        let newShots = ShotCopy.map((shot,index) => 
        { return {...shot,screenspacecoords: {y: screenspacecoords[index].y, x: screenspacecoords[index].x}}} )
        return newShots;
    }

}


export default ShotComponent;