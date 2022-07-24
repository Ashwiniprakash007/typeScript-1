// console.log("Hello world");
// Boolean
var isDone = false;
isDone = true;
//Number.
var price = 10;
//strings.
var first_name = "masai";
var last_name = "school";
var full_name = "".concat(first_name, "_").concat(last_name);
console.log(full_name);
//Arrays.
var arr1 = [1, 2, 3, 4];
var arrayOfStrings = ["masai", "school"];
arrayOfStrings.push("karnataka");
console.log(arrayOfStrings);
// interface person {
//     first_name: string;
//     last_name: string;
//     age: number;
// }
var masai = {
    first_name: "masai",
    last_name: "school",
    age: 3,
    isWorking: true
};
// console.log(masai);
//Tupples.
//1. the no. of element in tuples are fixed.
var tuple;
tuple = ["masai", 3];
console.log(tuple);
//Enums -> a group of named constants
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["GREEN"] = 1] = "GREEN";
    color[color["BLUE"] = 2] = "BLUE";
})(color || (color = {}));
var greencolor = color.GREEN;
console.log(greencolor);
//functions.
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
var printName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age, isWorking = _a.isWorking;
    console.log("".concat(first_name, "_").concat(last_name));
};
var person1 = {
    first_name: "masai",
    last_name: "school",
    age: 3,
    isWorking: true
};
printName(person1);
// union.
var output;
output = ["masai", 3];
// intersection 
var coder = {};
