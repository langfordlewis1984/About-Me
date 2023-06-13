"use strict"

let user;

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
}