//function 1
const hello = () => "Hello world";
console.log(hello());

//function 2
const greet = (name) => "Hej "+name+" hur mår du?";
console.log(greet("Johannes"));

//function 3
const calc = (numberOne,numberTwo) => numberOne+numberTwo;
console.log(calc(8,5));

//function 4
const tip = (sum,percent) =>{
  let total = sum+sum*percent;
  return total;
}
console.log(tip(8,5));
