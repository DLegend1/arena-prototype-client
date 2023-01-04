export function getTileScreenSpaceCoordinates(coords){
    let id = coords.row + coords.col.toString();
    let tile = document.getElementById(id);
    console.log(id)
    console.log(tile)
    let screenspacecoords = tile.getBoundingClientRect();
    return {y: screenspacecoords.top,
         x: screenspacecoords.left
        }
}
