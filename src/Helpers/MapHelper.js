import { tilesize } from "./MockTileSize";

export function getTileScreenSpaceCoordinates(coords){
    let id = coords.row + coords.col.toString();
    let tile = document.getElementById(id);
    let screenspacecoords = tile.getBoundingClientRect();
    return {y: screenspacecoords.top + parseInt((tilesize.tileDimension/2)-tilesize.svgDimension/2),
         x: screenspacecoords.left + parseInt((tilesize.tileDimension/2)-tilesize.svgDimension/2)
        }
}
