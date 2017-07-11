console.log("function.js");

let returnNothing = function(){
	console.log("I don't return anything");
}


function returnNothing2() {
	console.log("this is the second function");
}

returnNothing();
returnNothing2();


function addStuff() {
	let sum = 2 + 2;
	return sum;
}

console.log("addStuff", addStuff());

function add (one, two) {
	return one + two;
}

console.log("add", add(4, 5));

function subtract(n1, n2) {
	return n1 - n2;
}

console.log("subtract", subtract(10, 3));

function performCalc(n1, n2, action) {
	let doneIt = action(n1, n2)
	return doneIt;
} 

let addValue = performCalc(4,12,add);
console.log("addValue", addValue);

let subValue = performCalc(10,2,subtract);
console.log("subValue", subValue);

