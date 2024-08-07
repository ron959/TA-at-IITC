// console.log("Hello World");

let x = 10;
const y = 11;

x = 12;

// console.log(x);

function greet (name, age) {
    console.log(`Hello ${name}, you are ${age}`)
}

// greet("Tal", 24)
// greet("Lirone", 24)
// greet("Moshe", 12)
// greet("Dana", 30)

let grades = [12, 18, 24, 80, 100];
let grades2 = [50, 4, 80, 90, 70];

// console.log(grades)

function printGrade(gradesArr, idx) {
    console.log(gradesArr[idx]);
}

function printArr(grades) {
    for (let i = 0; i < grades.length; i++) {
        console.log(grades[i])
    }
}

printArr(grades)