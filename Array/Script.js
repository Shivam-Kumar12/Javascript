const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
function myFunction() {
    fruits.push("Lemon");
    document.getElementById("demo").innerHTML = fruits;
} 
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46; 
document.getElementById("demo").innerHTML =
person[0] + " " + person.length;


if (condition) {
  
}