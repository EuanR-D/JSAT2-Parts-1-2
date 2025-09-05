// Q1.1
// An array of numbers
let myArr = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(myArr);

// Q1.2
// Array of numbers sorted from smallest to largest (ascending)
// toSorted() compares 2 numbers and rearranges based on 1st symbol of value and creates new array
// function(a, b) compares the whole value and brings 'a' forward if -neg and back if +pos
let myArrAsc = myArr.toSorted(function(a, b){return a - b});
console.log(myArrAsc);