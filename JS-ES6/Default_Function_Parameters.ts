let getValue = function(value = 10, bonus = 5) {
  console.log(value + bonus);
};
// if its does not have a value it will take a default value
getValue();
// we pass the parameteric value
getValue(20);

getValue(20, 30);
