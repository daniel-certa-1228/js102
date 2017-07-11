"use strict";

console.log("main2.js");

let myDog = {};
myDog.name = "Esme";
myDog.breed = "Twist";
myDog.gender = "Female";
myDog.age = 6;
myDog.speak = function() {
	console.log("woof");
}
console.log("myDog", myDog);
myDog.speak();

for (let prop in myDog) {
	console.log(prop, myDog[prop]);
}

let ourDogs = [];
ourDogs.push({owner: "Brenda", name: "Esme", breed: "Twist", age: 6});
ourDogs.push({owner: "Matt", name: "Lunchbox", breed: "Wildman", age: 6});
ourDogs.push({owner: "Casey", name: "Mr. Butters", breed: "Houd Dog", age: 3});
ourDogs.push({owner: "Brooke", name: "Little Wurst", breed: "Mutt", age: 0});
console.log("ourDogs", ourDogs);


ourDogs.forEach(function(item) {
	console.log("name", item.name, item.age);
});