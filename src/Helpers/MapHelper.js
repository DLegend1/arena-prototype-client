import { tilesize } from "./MockTileSize";

//Partial dimension is hardcoded for now

export function getPlayerScreenSpaceCoordinates(coords){
    let id = coords.row + coords.col.toString();
    let tile = document.getElementById(id);
    let screenspacecoords = tile.getBoundingClientRect();
    return {y: screenspacecoords.top + parseInt((tilesize.tileDimension/2)-tilesize.svgDimension/2),
         x: screenspacecoords.left + parseInt((tilesize.tileDimension/2)-tilesize.svgDimension/2)
        }
}


// Get center of edge of tile
export function getTileEdgeCenterScreenSpaceCoordinates(coords,direction) {
    let id = coords.row + coords.col.toString();
    let tile = document.getElementById(id);
    let screenspacecoords = tile.getBoundingClientRect();
    switch (direction) {
        case "Up": 
            return{
                y: screenspacecoords.top + parseInt((tilesize.tileDimension/5)),
                x: screenspacecoords.left + parseInt((tilesize.tileDimension/2) - (getPartialDimension()/4))
            }
        case "Right":
            return{
                y: screenspacecoords.top + parseInt((tilesize.tileDimension/2) - (getPartialDimension()/4)),
                x: screenspacecoords.left + parseInt((tilesize.tileDimension/5))
            }
        case "Bottom":
            return{
                y: screenspacecoords.top + parseInt((tilesize.tileDimension/5)),
                x: screenspacecoords.left + parseInt((tilesize.tileDimension/2) - (getPartialDimension()/4))
            }
        case "Left":
            return{
                y: screenspacecoords.top + parseInt((tilesize.tileDimension/2) - (getPartialDimension()/4)),
                x: screenspacecoords.left + parseInt((tilesize.tileDimension/5))
            }
    }
}

// Get tile dimension
export function getTileDimension() {
    return tilesize.tileDimension;
}

export function getShotLength() {
    return tilesize.tileDimension - (tilesize.tileDimension/5)*2;
}

// Get partial dimension
export function getPartialDimension() {
    return tilesize.tileDimension/5;
}