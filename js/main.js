"use strict";

let skyIsBlue = true;

if (!skyIsBlue) {
	console.log("The sky is blue")
}  else  {
	console.log("No. Just, no.")
}

let jedi = ["Skywalker", "Yoda", "Obi-wan", "Qui-gon", "Windu"];
let jediText = "";

console.log("How many Jed1?", jedi.length);

for (let i = 0; i < jedi.length; i++) {
	// console.log("what is i?", i)
	jediText += `<li>${jedi[i]}</li>`;
}

console.log("jediText-", jediText);

document.getElementById("demo").innerHTML = jediText;