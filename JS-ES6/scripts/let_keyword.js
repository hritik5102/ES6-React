"use strict";
// let is block scope not an functional scope
// i.e we have to define that globally
function test(name) {
    var greet;
    if (name == "john") {
        greet = "hellow test";
    }
    else {
        greet = "hii test";
    }
    console.log(greet);
}
test("john");
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
// let with loops
for (var i = 1; i < 5; i++) {
    _loop_1(i);
}
//# sourceMappingURL=let_keyword.js.map