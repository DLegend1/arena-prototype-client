import React from "react";
import TileComponent from "./Tile";
import styles from './Map.module.css'
import { loadMapCode } from "./Parser/DackosMap";


const MapComponent = (props) => {

  let tiledata = loadMapCode("6x6|DbH3EW|xHEH2E|3EX(EBEE)HE|EHX(EEEB)3E|2EHEHX|W3EHD");
  console.log(tiledata)
  return (
    <table className={styles.Table}>
      <tbody>
        {tiledata.map((row, row_index) => {
          return (
            <tr key={row_index}>
              {row.map((col, col_index) => (
                <TileComponent key={col_index} 
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
  );
};

export default MapComponent;
