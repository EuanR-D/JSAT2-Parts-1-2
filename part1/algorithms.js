// File: algorithms.js
// Description: JavaScript Assessment task 2: Part B - Q1.1 - 1.11
// Author: Euan Renfrey-Douglas
// Date created: 2025-08-29
// Last modified: 2025-10-17
// Version: 1.6.4



// Q1.1
// Declaring variable containing an array of numbers
let myArr = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
// Outputting the array to the console
console.log(myArr);



// Q1.2
// Creating a copy of myArr with numbers sorted from smallest to largest (ascending)
// toSorted() method sorts the array by comparing the initial of each primitive 
// (i.e 45 < 5 < 8)
// Adding a function that compares the two numbers by subtraction changes toSorted() to compare by whole value 
// (i.e 5 < 8 < 45)
let myArrAsc = myArr.toSorted(function(a, b){return a - b});

// Outputting the sorted array to the console
console.log(myArrAsc);



// Q1.3
// Using the push method 3 numbers to end of array variable
myArrAsc.push(19, 23, 30);

// Using the sort() method to modify the array instead of creating a copy
// Using the same function as Q1.2 to sort by whole value
myArrAsc.sort(function(a, b){return a - b});

// Outputting the longer sorted array to the console
console.log(myArrAsc);



// Q1.4
// using splice with indexOf to find values within array and remove them

// Removing the number 8 from the array
// Using indexOf method to find the position of 8 in the array
// Embedding that value into the splice method, to start at that index, and then remove 1 item only
myArrAsc.splice(myArrAsc.indexOf(8), 1);

// Repeating above steps to remove number 31 from the array
myArrAsc.splice(myArrAsc.indexOf(31), 1);

// Outputting the modified array to console 
console.log(myArrAsc);



// Q1.5
// function to search through array from start
function sequentialSearch(arr, target) {
  // result variable set to default value for not found
  let foundIndex = -1;

  // for loop to iterate through each item off array
  for(let i = 0; i <= arr.length; i++) {
    // if statement to compare current item to target value
    if (arr[i] == target) {
      // updates result to position of target value and stops
      foundIndex = i;
      break;
    }
  }
  // returning value of result
  return foundIndex;
}

console.log(sequentialSearch(myArrAsc, 30));

console.log(sequentialSearch(myArrAsc, 12));