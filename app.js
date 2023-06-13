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

    let myName = prompt("Is my full name - Nicholas John Langford Lewis?");
        myName = myName.toLowerCase();
    if (myName === 'yes' || 'y'){
        console.log("Yes it is! Regal ain't it?!")
    }else if (myName === 'no' || 'n'){
        console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
    }else {
        console.log("you gotta say - yes / no / y / n - ya dingus!")
}

let mysteryMan = prompt("Am I a Man of Mystery?");
mysteryMan = mysteryMan.toLowerCase();
    if (mysteryMan === 'yes' || 'y'){
        console.log("Maybe I am, maybe I'm not. Maybe YOU are. Who knows?")
    }else if (mysteryMan === 'no' || 'n'){
        console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
    }else {
        console.log("you gotta say - yes / no / y / n - ya dingus!")
    }


let norwichFan = prompt("Do I support Norwich City Football Club?");
norwichFan = norwichFan.toLowerCase();
    if (norwichFan === 'yes' || 'y'){
        console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
    }else if (norwichFan === 'no' || 'n'){
        console.log("*sings the match of the day theme tune*")
    }else {
        console.log("you gotta say - yes / no / y / n - ya dingus!")
    }


let goToUni = prompt("Did I got to University in London?");
goToUni = goToUni.toLowerCase();
    if (goToUni === 'yes' || 'y'){
        console.log("Cockney Rhyming slang for CODE is A LA MODE")
    }else if (goToUni === 'no' || 'n'){
        console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
    }else {
        console.log("you gotta say - yes / no / y / n - ya dingus!")
    }

let myGoals = prompt("Do I have any Goals?");
myGoals = myGoals.toLowerCase();
    if (myGoals === 'yes' || 'y'){
        console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
    }else if (myGoals === 'no' || 'n'){
        console.log("I haven't got that far yet, sheesh!")
    }else {
        console.log("you gotta say - yes / no / y / n - ya dingus!")
    }
}
// let myName = prompt("Is my full name - Nicholas Rupert Langford Lewis?");

// switch (myName.toLowerCase()) {
//     case "yes" || 'y':
//         console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
//         break;
//     case "no" || 'n':
//         console.log("Yes it is! Regal ain't it?!")
//         break;
//         default:
//         console.log("Does... Not... Compute :-S. Please try again")
// }

// let mysteryMan = prompt("Am I a Man of Mystery?");

// switch (mysteryMan.toLowerCase()) {
//     case "yes" || 'y':
//         console.log("Maybe I am, maybe I'm not. Maybe YOU are. Who knows?")
//         break;
//     case "no" || 'n':
//         console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
//         break;
//         default:
//         console.log("Does... Not... Compute :-S. Please try again")
// }

// let norwichFan = prompt("Do I support Norwich City Football Club?");

// switch (norwichFan.toLowerCase()) {
//     case "yes" || 'y':
//         console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
//         break;
//     case "no" || 'n':
//         console.log("*sings the match of the day theme tune*")
//         break;
//         default:
//         console.log("Does... Not... Compute :-S. Please try again")
// }

// let goToUni = prompt("Did I got to University in London?");

// switch (goToUni.toLowerCase()) {
//     case "yes" || 'y':
//         console.log("Cockney Rhyming slang for CODE is A LA MODE")
//         break;
//     case "no" || 'n':
//         console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
//         break;
//         default:
//         console.log("Does... Not... Compute :-S. Please try again")
// }

// let myGoals = prompt("Do I have any Goals?");

// switch (myGoals.toLowerCase()) {
//     case "yes" || 'y':
//         console.log("[X] EEH AWWWWW\nyou are wrong, try again!")
//         break;
//     case "no" || 'n':
//         console.log("I haven't got that far yet, sheesh!")
//         break;
//         default:
//         console.log("Does... Not... Compute :-S. Please try again")
// }
// }