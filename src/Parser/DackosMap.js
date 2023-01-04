import {tiles} from "./Tiles"
import {parseRow} from "./mapParser"

let fullTiles = Object.fromEntries(Object.entries(tiles).filter(kvp => !kvp[1].onlyPartial));
let partials = Object.fromEntries(Object.entries(tiles).filter(kvp => kvp[1].canBePartial));

function loadMapCode (data) {
  let input = String(data);
  let rows = input.split('|');
  let height = rows[0][0];
  let width = rows[0][2];

  if (height < 3 || width < 3){
    alert('Maps must be at least 3x3.');
    return;
  }
  
  if (height > 9 || width > 9){
    alert('Maps must be at most 9x9.');
    return;
  }

  rows = rows.slice(1);

  for(let i = 0; i < rows.length; i++){
    rows[i] = parseRow(rows[i], fullTiles, partials);
    // console.log(rows[i])
  }

  if(!rows.every(row => row.length == width) || rows.length != height){
    alert('The map must be rectangular. Fix the input and try again.');
    return;
  }

  return (rows);
};

export { loadMapCode }

