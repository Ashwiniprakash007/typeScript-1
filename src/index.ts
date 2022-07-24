
// console.log("Hello world");

// Boolean
let isDone: boolean = false;
isDone = true;

//Number.
let price: number = 10;

//strings.
let first_name: string = "masai";
let last_name: string = "school";
let full_name = `${first_name}_${last_name}`;
console.log(full_name);


//Arrays.
let arr1: number[] = [1,2,3,4];
let arrayOfStrings: string[] = ["masai", "school"];
arrayOfStrings.push("karnataka");
console.log(arrayOfStrings);



// Objects.
type softwareDeveloper ={
    skills: string
}
type person = {first_name: string;
     last_name: string; 
     age?: number ;
    isWorking: boolean;};

// interface person {
//     first_name: string;
//     last_name: string;
//     age: number;
// }
const masai: person = {
    first_name: "masai",
    last_name: "school",
    age:3,
    isWorking:true,
};
// console.log(masai);




//Tupples.
//1. the no. of element in tuples are fixed.
let tuple : [string , number];
tuple = ["masai", 3];
console.log(tuple)




//Enums -> a group of named constants

enum color{
    RED, GREEN, BLUE
}
let greencolor = color.GREEN;
console.log(greencolor);






//functions.
function sum(a:number,b:number){
    return a+b;

}
console.log(sum(2 , 2));



const printName = ({first_name, last_name, age, isWorking}: person): void => {
    console.log(`${first_name}_${last_name}`);
};
let person1: person = {
    first_name: "masai",
    last_name: "school",
    age: 3,
    isWorking: true,
};
printName(person1);



// union.
let output: (number | string)[];
output = ["masai", 3]


// intersection 
// let coder: (person & softwareDeveloper) = {
    
// }
