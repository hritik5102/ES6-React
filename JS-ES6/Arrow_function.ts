var price = function() {
  return 10;
};
console.log(price());

var price = () => {
  return 12;
};
console.log(price());

var equation = (m, c) => m * 10 + c;
console.log(equation(2, -3));
