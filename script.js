let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let numClosedDoors = 3;
let currentWin = document.getElementById("Current");
let bestWin =document.getElementById("Best");
let win = 0;
let best = 0;
let openDoor1 = null;
let openDoor2 = null;
let openDoor3 = null;
let currentlyPlaying = true;
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath  = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

// randomChoreDoorGenerator = () =>{
//   let choreDoor = Math.floor(Math.random() * numClosedDoors);
//   console.log(choreDoor);
//   if(choreDoor === 0) {
//     openDoor1 = botDoorPath;
//     openDoor2 = beachDoorPath;
//     openDoor3 = spaceDoorPath;
//   } else if (choreDoor === 1){
//     openDoor1 = spaceDoorPath;
//     openDoor2 = botDoorPath;
//     openDoor3 = beachDoorPath;
//   } else if (choreDoor === 2){
//     openDoor1 = beachDoorPath;
//     openDoor2 = spaceDoorPath;
//     openDoor3 = botDoorPath;
//   } else { console.log("ERROR!")
//   };
// };
// randomChoreDoorGenerator();

randomChoreDoorGenerator = () =>{
  let choreDoor = Math.floor(Math.random() * 6);
  console.log(choreDoor);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1){
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 2){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 3){
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  } else if (choreDoor === 4){
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  } else if (choreDoor === 5){
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  } else { console.log("ERROR!")
  };
};
randomChoreDoorGenerator();

doorImage1.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
  playDoor(doorImage1);
};
};

doorImage2.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
};
};

doorImage3.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
};
};

startButton.onclick = () =>{
  if(startButton.innerHTML === 'You win! Play again?'){
    // startNextRound();<<vs. newRound>>
    startRound();
  } else if(startButton.innerHTML === 'Game over! Play again?'){
    // startNewRound();<<vs. newRound>>
    startRound();
  } else(console.log('ERROR!'))
}

const startRound = () => {
  console.log(win);
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML =  'Good luck!';
  randomChoreDoorGenerator(); 
}

// const startNextRound = () => {
//   doorImage1.src = closedDoorPath;
//   doorImage2.src = closedDoorPath;
//   doorImage3.src = closedDoorPath;
//   numClosedDoors = 3;
//   currentlyPlaying = true;
//   startButton.innerHTML =  'Good luck!';
//   randomChoreDoorGenerator(); 
// }
// const startNewRound = () => {
//   doorImage1.src = closedDoorPath;
//   doorImage2.src = closedDoorPath;
//   doorImage3.src = closedDoorPath;
//   numClosedDoors = 3;
//   win = 0;
//   currentWin.innerHTML = `Current streak: ${win}`
//   currentlyPlaying = true;
//   startButton.innerHTML =  'Good luck!';
//   randomChoreDoorGenerator(); 
// }  <<vs. newRound>>

const gameOver = (status) =>{
  // if (status === 'win' && best === win){
  //   best++;
  // }; <<vs. newRound>>
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    score('win');
  // win++; <<vs. newRound>>
  // currentWin.innerHTML = `Current streak: ${win}`;
  // bestWin.innerHTML = `Current streak: ${best}`;
} else {
  startButton.innerHTML = 'Game over! Play again?'
  score('lose');
};
  currentlyPlaying = false;
};

const isBot = (door) =>{
   if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  };
};

const isClicked = (door) =>{
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
};
};

const playDoor = door =>{
  numClosedDoors--;
  if (numClosedDoors === 0) {
  gameOver('win');
  } else if(isBot(door)){
  gameOver('lose');
};
};

const score = status =>{
  if(status === 'win'){
    win++;
    currentWin.innerHTML = `Current streak: ${win}!`;
    if(best < win){
      best++;
      bestWin.innerHTML = `Best streak: ${best}!`;
    }
  } else if(status === 'lose'){
    win = 0;
    currentWin.innerHTML = `Current streak: ${win}!`;
  };
;}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

