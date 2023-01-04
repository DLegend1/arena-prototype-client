const dirCodeToDirStringMap = { r: 'right', b: 'down', l: 'left' };
let tileCodeToTileMap = {};
let partialCodeToTileMap = {};
let rowStringGlobal = '';
let pos = 0;
let currentChar = '';


// row := (count? tile){3, 9} (symmetry modifiers would go here)
export function parseRow(rowString, fullTiles, partials){
    tileCodeToTileMap = createCodeToTileMap(fullTiles);
    partialCodeToTileMap = createCodeToTileMap(partials);
    partialCodeToTileMap['E'] = { baseClassName: '' };
    rowStringGlobal = rowString;

    let parsedRow = [];
    currentChar = rowString[0];

    while(currentChar){
        let currentCount = count();
        if(currentCount > 1){
            let parsedTile = tile();
            for (let i = 0; i < currentCount; i++) {
                parsedRow.push({...parsedTile, partial: {...parsedTile.partial}});
                
            }
        } else{
            parsedRow.push(tile());
        }
    }
    
    rowStringGlobal = '';
    pos = 0;
    currentChar = '';

    return parsedRow;
}

function advance(){
    pos++;
    if(pos >= rowStringGlobal.length){
        currentChar = null;
    } else{
        currentChar = rowStringGlobal[pos];
    }
}

// tile := code direction? partial?
function tile(){
    let tileCode = code();
    if(!tileCode){
        return null;
    }
    let tileDirection = direction();
    let partialObject = partial();
    let tileObject = { ...tileCodeToTileMap[tileCode] };
    if(tileDirection){
        tileObject.direction = tileDirection;
    }
    if(partialObject){
        tileObject.partial = partialObject;
    }
    return tileObject;
}

// count := 2|3|4|5|6|7|8|9
function count(){
    if(currentChar >= '2' && currentChar <= '9'){
        let number = +currentChar;
        advance();
        return number;
    } else {
        return 1;
    }
}

// code := <dynamically generated from tiles.js>
function code(){
    if(Object.keys(tileCodeToTileMap).includes(currentChar)){
        let code = currentChar;
        advance();
        return code;
    } else {
        return null;
    }
}

// direction := t|r|b|l
function direction(){
    if(Object.keys(dirCodeToDirStringMap).includes(currentChar)){
        let direction = dirCodeToDirStringMap[currentChar];
        advance();
        return direction;    
    } else {
        return null;
    }
}

// partial := LPAR partialstring RPAR
function partial(){
    let partialObject = {up: '', right: '',down: '', left: ''};
    if(currentChar === '('){
        advance();
        let partialCodes = partialString();
        switch(partialCodes.length){
            case 1:
                partialObject.up = partialCodeToTileMap[partialCodes[0]].baseClassName;
                partialObject.right = partialObject.up;
                partialObject.down = partialObject.up;
                partialObject.left = partialObject.up;
                break;
            case 2:
                partialObject.up = partialCodeToTileMap[partialCodes[0]].baseClassName;
                partialObject.down = partialObject.up;
                partialObject.right = partialCodeToTileMap[partialCodes[1]].baseClassName;
                partialObject.left = partialObject.right;
                break;
            case 4:
                partialObject.up = partialCodeToTileMap[partialCodes[0]].baseClassName;
                partialObject.right = partialCodeToTileMap[partialCodes[1]].baseClassName;
                partialObject.down = partialCodeToTileMap[partialCodes[2]].baseClassName;
                partialObject.left = partialCodeToTileMap[partialCodes[3]].baseClassName;
                break;
            default:
                return "null"; // throw exception instead?
        }
    }
    return partialObject;
}

// partialstring := partialcode | partialcode{2} | partialcode{4}
function partialString(){
    let partialCodes = '';

    while(currentChar !== ')'){
        let code = partialCode();
        if(code){
            partialCodes = partialCodes.concat(code);
        } else {
            return null;
        }
    }

    advance();
    return partialCodes;
}

// partialcode := <dynamically generated from tiles.js>
function partialCode(){
    if(Object.keys(partialCodeToTileMap).includes(currentChar)){
        let code = currentChar;
        advance();
        return code;
    } else {
        return null;
    }
}

function createCodeToTileMap(tileObject){
    let codeToTileMap = {};
    for(let tile of Object.values(tileObject)){
        codeToTileMap[tile.code] = {...tile};
    }
    return codeToTileMap;
}