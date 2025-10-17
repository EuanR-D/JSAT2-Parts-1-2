// File: algorithms.js
// Description: JavaScript Assessment task 2: Part B - Q1.1 - 1.11
// Author: Euan Renfrey-Douglas
// Date created: 2025-08-29
// Last modified: 2025-10-17
// Version: 1.6.5



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
// A function that searches for a target value by checking everything from start to finish in an array, stopping if it is found
// Parameters are the array to search through, and the value to search for
function sequentialSearch(arr, target) {
  // Result index variable set to -1 as default for Not-found
  let foundIndex = -1;

  // Using a For loop to iterate through each item off array
  // Counter starts at 0
  // Will run when the counter is less than the length of given array, so it can cover everything in the array
  // Counter will increase by 1 each loop
  for(let i = 0; i < arr.length; i++) {

    // Using an If condition to check if the current item in the array is equal to the target number
    if (arr[i] == target) {

      // If it is, the result index will update result to the current position, and end the loop early
      // If it isnt, the loop will keep running until it has checked the entire array
      foundIndex = i;
      break;
    }
  }

  // If the index variable remains default, then the target was not found and the output will display that in the console
  if (foundIndex == -1) {
    return console.log(`The target ${target} was not found`);
  } else {

    // If the index variable has updated, then it will output display the position the target was found at in the console
    return console.log(`The target ${target} was found at index ${foundIndex}`)
  }
}

// Calling the function to find a number that does exist in the array
sequentialSearch(myArrAsc, 30);

// Calling the function to find a number that is not in the array
sequentialSearch(myArrAsc, 12);



// Q1.6
// function that uses binary search algorithm
// 2 params, array to search through, and target value
function binarySearch(arr, target) {
  // setting default value to return if target isnt found
  let foundIndex = -1;

  // sorting the array first to allow the algorithm to function properly
  let sortedArray = arr.toSorted(function(a, b){return (a - b)});
  console.log(sortedArray);

  // initial range of algorithm, spanning whole array
  let start = 0;
  let end = sortedArray.length - 1;

  // condition becomes untrue if value isnt found when start = end +1
  while (start <= end) {
    // midpoint of range, rounded down to nearest int
    let midpoint = Math.floor((start + end) / 2);
    
    if (sortedArray[midpoint] == target) {
      // matching value updates index and breaks loop
      foundIndex = midpoint;
      break;
    } else if (sortedArray[midpoint] < target) {
      // lower than target changes start to 1 space above current midpoint
      start = midpoint + 1;
    } else if (sortedArray[midpoint] > target) {
      // higher than target changes start to 1 space below current midpoint
      end = midpoint - 1;
    }
  }

  // returning the value of index after searching through
  return `target: "${target}" at index: ${foundIndex}`;
}


console.log(myArr);
console.log(binarySearch(myArr, 16));

console.log(myArr);
console.log(binarySearch(myArr, 15));

