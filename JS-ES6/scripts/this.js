"use strict";
var employee = {
    id: 3,
    greet: function () {
        console.log(this.id);
    }
};
employee.greet();
var laptop = {
    price: 500,
    weight: 200,
    specs: function () {
        return "price of laptop is " + this.price + "$";
    }
};
console.log(laptop.specs());
//# sourceMappingURL=this.js.map