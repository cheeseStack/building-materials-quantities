//  GET the values from the input fields
const vals = new URLSearchParams(window.location.search);

// general global constants 
const areaOfBrick = 0.22 * 0.07
const areaOfBlock = 0.445 * 0.22

// assign variables to the inputted values

const numOfWallSections = vals.get('numberOfWalls');
const brickOrBlock = vals.get('brickOrBlock');
const numberOfSkins = vals.get('skins');
const wallLength = vals.get('length');
const wallHeight = vals.get('height');

const opening1Width = vals.get('opening-1-width');
const opening1Height = vals.get('opening-1-height');
const opening2Width = vals.get('opening-2-width');
const opening2Height = vals.get('opening-2-height');
const opening3Width = vals.get('opening-3-width');
const opening3Height = vals.get('opening-3-height');


const wallArea = () => {
    let exactQuantity = 0;
    const areaToRemove = (opening1Height
    *opening1Width) + (opening2Height*opening2Width) + (opening3Height*opening3Width);

    const totalArea = wallLength * wallHeight * numberOfSkins - areaToRemove
    
    if (brickOrBlock === 'brick') {
        exactQuantity = Math.ceil(totalArea / areaOfBrick)
    } else if (brickOrBlock === 'brick'){
        exactQuantity = Math.ceil(totalArea / areaOfBlock)
    } else {
        exactQuantity = null
    }
    return exactQuantity.toLocaleString("en-GB")
}



console.log(wallArea())