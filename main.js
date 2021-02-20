// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// 2. RAW TEXT STRINGS

// 2a. Story string using template literals */
let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`,




// let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.
//`, 
insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'],
insertY = ['the soup kitchen', 'Disneyland', 'the White House'],
insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  let newStory = storyText, 
  xItem = randomValueFromArray(insertX),
  yItem = randomValueFromArray(insertY),
  zItem = randomValueFromArray(insertZ);

  // story.textContent = ;
  story.style.visibility = 'visible';
  console.log(xItem, yItem, zItem);
}











console.log(insertX[0], insertY[1], insertZ[2]);