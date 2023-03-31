
const numOfWallSections = ;
const brickOrBlock = ;
const numberOfSkins = ;
const wallLength = ;
const wallHeight = ;



const wallArea = () => {
    const exactQuantity = 0;
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
    return exactQuantity
}

console.log(wallArea())