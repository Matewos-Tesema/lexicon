
const minArray = ["Sina","Abdul","Magnus", "Sara", "Matewos"];

minArray.pop();

minArray[1] = "Jakob";

minArray.push("Joakim");

minArray.sort();

console.log("Joakim är på index "+ minArray.indexOf("Joakim"));

minArray.splice(1,1);

for(let i=0; i<minArray.length; i++){
  console.log(minArray[i]);
}