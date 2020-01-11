// destructring array
let employeee = ["nick", "mick", "male"];

let [fname, lname, male] = employeee;

console.log(fname);
console.log(lname);
console.log(male);

// destructring objects

let people = {
  first: "Hritik",
  second: "Jaiswal",
  Male: "Male"
};

let { first: f, second: l, Male: m } = people;

console.log(f);
console.log(l);
console.log(m);

// string concatination
let user = "bob";
let greet = `Welcome ${user}`;
console.log(greet);

// for loops

let animal = ["cat", "dog", "tiger"];

for (let i in animal) {
  console.log(animal[i]);
}

for (let i of animal) {
  console.log(i);
}
