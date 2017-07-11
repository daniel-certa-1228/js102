"use strict";

console.log("strings.js");

let phrase = "The quick brown fox and the brown cat ate lunch at the Taco House";
console.log("phrase index ", phrase.indexOf("t"));
console.log("fox: ", phrase.indexOf("fox"));
console.log("phrase length", phrase.length);

// let newPhrase = phrase.replace("brown", "yellow");
let newPhrase = phrase.replace(/brown/g, "yellow");
console.log("newPhrase", newPhrase);

let greeting = "Hello Cohort 21";
let newGreeting = greeting.slice(3,8);
console.log("newGreeting", newGreeting);

let phraseSplit = phrase.split(" ");
console.log("phraseSplit", phraseSplit);

let exiting = "Goodbye class";
let exitingUpper = exiting.toUpperCase();
console.log("exitingUpper", exitingUpper);

let newDialog = greeting.concat(" and ", exiting);
console.log("newDialog", newDialog);