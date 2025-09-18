// Q1.1
// An array of numbers
let myArr = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(myArr);

// Q1.2
// Array of numbers sorted from smallest to largest (ascending)
// toSorted() sorts the array based on the initial of each primitive
// function(a, b) changes toSorted() to sort by whole value
let myArrAsc = myArr.toSorted(function(a, b){return a - b});
console.log(myArrAsc);

// Q1.3
// Adding 3 numbers to end of array
myArrAsc.push(19, 23, 30);
// sorting existing array
myArrAsc.sort(function(a, b){return a - b});
console.log(myArrAsc);