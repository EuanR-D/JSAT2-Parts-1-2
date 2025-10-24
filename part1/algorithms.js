// File: algorithms.js
// Description: JavaScript Assessment task 2: Part B - Q1.1 - 1.11
// Author: Euan Renfrey-Douglas
// Date created: 2025-08-29
// Last modified: 2025-10-24
// Version: 1.7.1


// Functions
// sequentialSearch - Searches through each item in an array for a target
// binarySearch - uses binary algorithm to search for target in an array



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
// Returns a message stating the index where the target was found, or if it was not found
function sequentialSearch(arr, target) {
  
  // Log to state function is attempting to search for target.
  console.log(`sequentialSearch looking for: ${target}`);
  
  // Log to show the array being searched
  console.log(`Searching array [${arr}]`);
  

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
// A function that searches for a target value by checking the middle item in a sorted array, moving up or down if its too low or high, and halving its search area each time.
// Parameters are the array to search through, and the value to search for
// Returns a message stating the index where the target was found, or if it was not found
function binarySearch(arr, target) {

  // Log to state function is attempting to search for target.
  console.log(`binarySearch looking for: ${target}`);

  // Log to output the input unsorted array
  console.log(`Initial array: [${arr}]`);

  // Result index variable set to -1 as default for Not-found
  let foundIndex = -1;

  // sorting the array first to allow the algorithm to function properly
  let sortedArray = arr.toSorted(function(a, b){return (a - b)});

  // Log to output the sorted copy of the array
  console.log(`Sorted array: [${sortedArray}]`);

  // initial start and endpoint of algorithm range, spanning whole array
  let startpoint = 0;
  let endpoint = sortedArray.length - 1;

  // condition becomes untrue when startpoint is higher than endpoint, which occurs when no match is found
  while (startpoint <= endpoint) {

    // midpoint of range where the algorithm will check
    // rounded down to nearest int
    let midpoint = Math.floor((startpoint + endpoint) / 2);
    
    // if the midpoint matches the target, update index and end loop
    if (sortedArray[midpoint] == target) {
      foundIndex = midpoint;
      break;
    }
     // if the midpoint is lower than target, it will bring the startpoint above the midpoint, halving the subsequent search range
    else if (sortedArray[midpoint] < target) {
      startpoint = midpoint + 1;
    } 
    // if the midpoint is higher than target, it will bring the endpoint below the midpoint, halving the subsequent search range
    else if (sortedArray[midpoint] > target) {
      endpoint = midpoint - 1;
    }
  }

  // If the index variable remains default, then the target was not found and the output will display that in the console
  if (foundIndex == -1) {
    return console.log(`The target ${target} was not found`);
  } else {

    // If the index variable has updated, then it will output display the position the target was found at in the console
    return console.log(`The target ${target} was found at index ${foundIndex}`);
  }
}

// Calling the function to find a number that does exist in the array
binarySearch(myArr, 16);

// Calling the function to find a number that is not in the array
binarySearch(myArr, 15);

