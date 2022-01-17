"use strict";
let id = 5;
console.log("ID:", id);
//enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
const person = {
    id: 1,
    name: "me"
};
console.log(person.name);
//functions
function add(x, y) {
    return x + y;
}
//or 
function add2({ x, y }) {
    return x + y;
}
const person1 = {
    id: 1,
    name: "me"
};
const adding = (x, y) => x + y;
const sub = (x, y) => x + y;
