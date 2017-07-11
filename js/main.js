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

let colors = ["red", "yellow", "blue", "green", "orange", "purple"];
let reverseColors = colors.reverse();
console.log("reverseColors", reverseColors);

let sortedColors = colors.sort();
console.log("sorted colors", sortedColors);

//******************************************************

let numbers = [2, 56, 11, 76, 3, 90, 6, 3, 77, 78, 41];
// console.log("sort numbers", numbers.sort());

let sortedNumbers = numbers.sort(function(first, second){
	console.log("first", first, "second", second);
	return first - second;

});

console.log("sortedNumbers", sortedNumbers);

//******************************************************

let joinedColors = colors.join(",")
console.log("joinedColors", joinedColors, typeof(joinedColors));


//******************************************************

let fruits = ["peaches", "oranges", "lemon", "banana", "mango"];
let citrus = fruits.slice(1,3);
console.log("citrus", citrus);

fruits.push("strawberry");
console.log("new fruit", fruits);

let whatItem = fruits.pop();
console.log("whatItem", whatItem);

//******************************************************


let evenOdds = [];
for (let i = 100; i >= 0; i--) {
	console.log("i modulus", i % 3);

	if(i % 2 === 0) {
		evenOdds.unshift(i)
	}  else {
		evenOdds.push(i)
	}
} 

console.log("evenOdds", evenOdds);














