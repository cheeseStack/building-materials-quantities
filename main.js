const inputs = new URLSearchParams(window.location.search)

// Take in the number of wall elements needed

const numOfWallSections = inputs.get('numberOfWalls')
const numWallsValue = document.getElementById('numberOfWalls')
numWallsValue.value = numOfWallSections
console.log(numOfWallSections)



const wallForm2 = document.getElementById('wall-form-2')
const wallForm3 = document.getElementById('wall-form-3')
const wallForm4 = document.getElementById('wall-form-4')

wallForm2.hidden = true;
wallForm3.hidden = true;
wallForm4.hidden = true;

if (numOfWallSections == 1) {
    wallForm2.hidden = true;
    wallForm3.hidden = true;
    wallForm4.hidden = true;
} else if (numOfWallSections == 2) {
    wallForm2.hidden = false;
} else if (numOfWallSections == 3) {
    wallForm2.hidden = false;
    wallForm3.hidden = false;
} else if (numOfWallSections == 4) {
    wallForm2.hidden = false;
    wallForm3.hidden = false;
    wallForm4.hidden = false;
}


// get the length, height, number skins
const length = inputs.get('length')
const height = inputs.get('height')
const skins = inputs.get('skins')

const wallArea = () => {
    let area = length * height * skins;
    const areaResult = document.getElementById('area-result');
    areaResult.innerHTML = area
    console.log(area)

};

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', wallArea)


