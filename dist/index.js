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
