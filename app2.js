// declare a variable

// const number = "7";
const number = Math.floor(Math.random() * 10 + 1);
console.log(number);

for (let i = 3; i >= 0; i--) {
  let guesses = i + 1;

  let guess = prompt(
    "Guess number between 1 and 10, you have" + guesses + "attempts"
  );

  const guessNum = parseInt(guess);

  if (guessNum === number) {
    // console.log("you win");
    alert("you win");
    break;
  } else if (guessNum < number) {
    // console.log("too low")
    alert("too low");
  } else if (guessNum > number) {
    // console.log("too high")
    alert("too high");
  }

  if (i === 0) {
    alert("the correct number was" + number);
    break;
  }
}

//FROM CHRIS

// // const number = "7";
// const number = Math.floor(Math.random() * 10 + 1);
// console.log(number);

// for (let i = 2; i >= 0; i--) {
//   let guesses = i + 1;

//   let guess = prompt("Guess a number between 1 and 10! you have " + guesses + " attempts");

//   const guessNum = parseInt(guess);

//   if (guessNum === number) {
//     // console.log("You win");
//     alert("You win");
//     break;
//   } else if (guessNum < number) {
//     // console.log("to low");
//     alert("to low");
//   } else if (guessNum > number) {
//     // console.log("to high");
//     alert("to high");
//   }

//   if (i === 0) {
//     alert("The correct number was " + number);
//     break;
//   }
// }

// // My Process
// // declare a variable named number set the value to number that is a string ie - "7"
// // create a for loop that:
// // initialises i as 3
// // condition is i > 0
// // afterthought / decrement by 1 i--
// // inside the loop:
// // declare a variable named guess equals to a prompt to guess a number
// // create an if statement:
// // if guess === number - console.log("You win")
// // make sure you break the loop here as the correct answer was found
// // else if guess > number - console.log("to high")
// // else if guess < number - console.log("to low")
// // create a second if statement:
// // if i === 0 alert the correct number was + number
// // break the code inside this if statement
// // the loop runs to many times... so:
// // at the top of the loop declare a varaible named guesses = i + 1
// // change initialisation in for loop to 2
// // change condition in for loop to i >= 0
// // change i in prompt to guesses
// // change console.log for an alert and set the messages to corrispond.
// // change the number variable to use Math.floor and Math.random to generate a random number.
// // declare a variable named guessNum and set the value to parseInt(guess)

// //MORE FUNCTIONS

("use strict");

console.log("this works");

function sayHello() {
  console.log("Hello World");
}

sayHello();

function sayGoodbye(name) {
  console.log("goodby " + name);
}

sayGoodbye("neo");

function getFullName(firstName, secondName) {
  return firstName + " " + secondName;
}

let ada = getFullName("ada", "lovelace");
console.log("ada " + ada);

function yesOrNoPrompt(promptInfo) {
  let userInput = prompt(promptInfo);

  if (userInput === "yess") {
    console.log("hurray");
  } else if (userInput === "maybe") {
    console.log("well make up your mind");
  } else {
    console.log("ERROR: incorrect usage");
  }
}
console.log("hurray");

yesOrNoPrompt("well yess or no");
yesOrNoPrompt("how about yess or no");

const myName = function (name) {
  console.log(name);
};

myName("charlie");

// () => () ARROW FUNCTION

// QUESTION 7 - TOP TEN
const tenFilms = [
  "2001: A Space Odyssey",
  "The Godfather",
  "Chungking Express",
  "Throne of Blood",
  "Rear Window",
  "The Straight Story",
  "The Good, The Bad and the Ugly",
  "Spirited Away",
  "Heat",
  "This is Spinal Tap",
];

for (let i = 5; i >= 0; i--) {
  let winner = false;
  console.log(winner);

  let attempts = i + 1;

  let filmGuess = prompt(
    "Name one the locations Tech Educators currently offer a coding bootcamp? You have " +
      attempts +
      " attempts"
  ).toLowerCase();

  for (let j = 0; j < tenFilms.length; j++) {
    if (tenFilms[j] === filmGuess) {
      // console.log("You win");
      alert("Well done " + tenFilms[j] + " is a correct answer!");
      winner = !winner;
      console.log(winner);
      break;
    }
  }

  if (!winner) {
    alert("Unfortunately " + filmGuess + " is not a correct answer!");
  }

  if (i === 0 || winner) {
    alert("My Top Ten Films are");
    break;
  }
}
