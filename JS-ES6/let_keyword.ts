// let is block scope not an functional scope
// i.e we have to define that globally
function test(name) {
  let greet;

  if (name == "john") {
    greet = "hellow test";
  } else {
    greet = "hii test";
  }
  console.log(greet);
}
test("john");

// let with loops

for (let i = 1; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
