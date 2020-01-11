"use strict";
// destructring array
var employeee = ["nick", "mick", "male"];
var fname = employeee[0], lname = employeee[1], male = employeee[2];
console.log(fname);
console.log(lname);
console.log(male);
// destructring objects
var people = {
    first: "Hritik",
    second: "Jaiswal",
    Male: "Male"
};
var f = people.first, l = people.second, m = people.Male;
console.log(f);
console.log(l);
console.log(m);
// string concatination
var user = "bob";
var greet = "Welcome " + user;
console.log(greet);
// for loops
var animal = ["cat", "dog", "tiger"];
for (var i in animal) {
    console.log(animal[i]);
}
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var i = animal_1[_i];
    console.log(i);
}
//# sourceMappingURL=Destructring.js.map