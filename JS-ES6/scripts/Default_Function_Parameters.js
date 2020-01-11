"use strict";
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = 5; }
    console.log(value + bonus);
};
// if its does not have a value it will take a default value
getValue();
// we pass the parameteric value
getValue(20);
getValue(20, 30);
//# sourceMappingURL=Default_Function_Parameters.js.map