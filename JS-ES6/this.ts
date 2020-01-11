var employee = {
  id: 3,
  greet: function() {
    console.log(this.id);
  }
};
employee.greet();

const laptop = {
  price: 500,
  weight: 200,
  specs: function() {
    return `price of laptop is ${this.price}$`;
  }
};

console.log(laptop.specs());
