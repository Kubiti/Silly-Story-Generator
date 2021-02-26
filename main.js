// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = `It was <em>94 fahrenheit</em> outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. <strong>Bob</strong> saw the whole thing, but was not surprised — :insertx: weighs <em>300 pounds</em>, and it was a hot day.
`, 
insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'],
insertY = ['the soup kitchen', 'Disneyland', 'the White House'],
insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  
  let newStory = storyText, 
  xItem = randomValueFromArray(insertX),
  yItem = randomValueFromArray(insertY),
  zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/gi, xItem);
  newStory = newStory.replace(/:inserty:/gi, yItem);
  newStory = newStory.replace(/:insertz:/gi, zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace(/Bob/gi, name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature =  Math.round((94 - 32) * 5/9) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);

  }

  story.innerHTML = newStory;
  story.style.visibility = 'visible';
}



