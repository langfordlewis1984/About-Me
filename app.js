"use strict"

let user;
let points = 0;

function userName() {
    user = prompt("Hi There! What is your name?");
    console.log("Name = " + user);
    const welcomeMsg = alert ("Welcome " + user + "!\nSo, you wanna know about little ol' me, ay?");
}

userName();

function myFunc() {

    alert("please answer the following with YES/NO or Y/N");

    let myName = prompt("Is my full name - Nicholas John Langford Lewis?").toLowerCase();

while (myName != "yes" && myName != "no" && myName != "y" && myName != "n") {
  alert("you gotta say - yes/no or y/n only - ya dingus!");
  myName = prompt("Is my full name - Nicholas John Langford Lewis?").toLowerCase();
}

if (myName === "yes" || myName === "y") {
  // console.log("Yes it is! Regal ain't it?!");
  alert("Yes it is! Regal ain't it?!");
} else if (myName === "no" || myName === "n") {
  // console.log("[X] EEH AWWWWW\nyou are wrong, try again!");
  alert("[X] EEH AWWWWW\nyou are wrong!!");
}

let mysteryMan = prompt("Am I a Man of Mystery?").toLowerCase();

while (mysteryMan != "yes" && mysteryMan != "no" && mysteryMan != "y" && mysteryMan != "n") {
  alert("you gotta say - yes/no or y/n only - ya dingus!");
  mysteryMan = prompt("Am I a Man of Mystery?").toLowerCase();
}

if (mysteryMan === "yes" || mysteryMan === "y") {
  // console.log("Maybe I am, maybe I'm not. Maybe YOU are. Who knows?");
  alert("Maybe I am, maybe I'm not. Maybe YOU are. Who knows?");
} else if (mysteryMan === "no" || mysteryMan === "n") {
  // console.log("[X] EEH AWWWWW\nyou are wrong, try again!");
  alert("[X] EEH AWWWWW\nyou are wrong!!");
}

let norwichFan = prompt("Do I support Norwich City Football Club?").toLowerCase();

while (norwichFan != "yes" && norwichFan != "no" && norwichFan != "y" && norwichFan != "n") {
  alert("you gotta say - yes/no or y/n only - ya dingus!");
  norwichFan = prompt("Do I support Norwich City Football Club?").toLowerCase();
}

if (norwichFan === "yes" || norwichFan === "y") {
  // console.log("[X] EEH AWWWWW\nyou are wrong, try again!");
  alert("[X] EEH AWWWWW\nyou are wrong!");
} else if (norwichFan === "no" || norwichFan === "n") {
  // console.log("*sings the match of the day theme tune*");
  alert("*sings the match of the day theme tune*");
}
   
let goToUni = prompt("Did I got to University in London?").toLowerCase();

while (goToUni != "yes" && goToUni != "no" && goToUni != "y" && goToUni != "n") {
  alert("you gotta say - yes/no or y/n only - ya dingus!");
  goToUni = prompt("Did I got to University in London?").toLowerCase();
}

if (goToUni === "yes" || goToUni === "y") {
  // console.log("Cockney Rhyming slang for CODE is A LA MODE");
  alert("Cockney Rhyming slang for CODE is A LA MODE");
} else if (goToUni === "no" || goToUni === "n") {
  // console.log("[X] EEH AWWWWW\nyou are wrong, try again!");
  alert("[X] EEH AWWWWW\nyou are wrong!");
}

let myGoals = prompt("Do I have any Goals?").toLowerCase();

while (myGoals != "yes" && myGoals != "no" && myGoals != "y" && myGoals != "n") {
  alert("you gotta say - yes/no or y/n only - ya dingus!");
  myGoals = prompt("Do I have any Goals?").toLowerCase();
}

if (myGoals === "yes" || myGoals === "y") {
  // console.log("[X] EEH AWWWWW\nyou are wrong, try again!");
  alert("[X] EEH AWWWWW\nyou are wrong!\nThanks for taking the time to get to know me " + user + "!");
} else if (myGoals === "no" || myGoals === "n") {
  // console.log("I haven't got that far yet, sheesh!");
  alert("I haven't got that far yet, sheesh!\nThanks for taking the time to get to know me " + user + "!");
}


// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

  alert("How about we play a little number game?!")

  const number = 5;
  
  let guess = prompt("I suppose you think you know me pretty well now, huh?\nHow about you try and guess the number I am thinking of...\nGuess with a single digit only ie. 0-9");

  while (guess != 1 && guess != 2 && guess != 3 && guess != 4 && guess != 5 && guess != 6 && guess != 7 && guess != 8 && guess != 9 && guess != 0) {
    alert("you gotta use a single digit - ya dingus!\n ie. 0-9");
    guess = prompt("How about you try and guess the number I am thinking of...");
  }


for (let i = 3; i >= 0; i--) {
if (i === 0) {
  alert("You don't got no more try agains " + user + "!\nThe answer was 5")
  break;
}
if (guess < number) {
  alert("That guess a little low, try again " + user + "!");
  guess = prompt("Guess a number between 0-9...\nYou have " + i + " tries left");
} else if (guess > number) {
  alert("That guess a little high, try again " + user + "!");
  guess = prompt("Guess a number between 0-9...\nYou have " + i + " tries left");
} else {
  points++;
  alert("Damn you DO know me well, " + user + "!\nThats correct the answer is 5!");
  break;
}
}

const tenFilms = ["2001: A Space Odyssey", "The Godfather", "Chungking Express", "Throne of Blood", "Rear Window", "The Straight Story", "The Good, The Bad and the Ugly", "Spirited Away", "Heat", "This is Spinal Tap"];

alert("How about we play a little memory game?!")

let filmGuess = prompt("Can you name one of my Top Ten Films??").toLowerCase();

for (let i = 5; i >= 0; i--) {
if (i === 0) {
  alert("You don't got no more try agains " + user + "!\nThe answers were " + tenFilms)
  break;
}

while (filmGuess == null) {
  alert("That was not an option - ya dingus!\nTRY AGAIN!");
  filmGuess = prompt("Let's try this again\nName one of my Top Ten Films...").toLowerCase();
}

if (filmGuess != "2001: A Space Odyssey" || filmGuess != "The Godfather" || filmGuess != "Chungking Express" || filmGuess != "Throne of Blood" || filmGuess != "Rear Window" || filmGuess != "The Straight Story" || filmGuess != "The Good, The Bad and the Ugly" || filmGuess != "Spirited Away" || filmGuess != "Heat" || filmGuess != "This is Spinal Tap") {
  alert("Not quite, " + user + "! Try again.");
  filmGuess = prompt("Can you name one of my Top Ten Films??\nYou have " + i + " tries left");
} else
  alert("Damn DAMN damn DaMn, " + user + "!\nThat IS one of my Top Ten Films!");
  points++;
  alert("well done you got " + points + "!")
}
}


// if (guess === "0") {
//   // console.log("Cor Blimey! You DO know me well.\nThat is correct!");
//   alert("Cor Blimey! You DO know me well.\nThat is correct!");
// } else {
//   // console.log("[X] EEH AWWWWW\nyou are wrong, try again!");
//   alert("[X] EEH AWWWWW\nyou are wrong!!");
// }


//Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

// STRETCH GOALS

// Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
// Make the number-guessing question use a random number as its correct answer.