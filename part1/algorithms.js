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

// Q1.4
// using splice with indexOf to find values within array and remove them
myArrAsc.splice(myArrAsc.indexOf(8), 1);
myArrAsc.splice(myArrAsc.indexOf(31), 1);
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

console.log(sequentialSearch(myArrAsc, 5));

console.log(sequentialSearch(myArrAsc, 30));

console.log(sequentialSearch(myArrAsc, 12));




// Q1.6
// function that uses binary search algorithm
// 2 params, array to search through, and target value
function binarySearch(arr, target) {

  console.log(`binarySearch looking for: ${target}`);
  console.log(`Initial array: [${arr}]`);

  // setting default value to return if target isnt found
  let foundIndex = -1;

  // sorting the array first to allow the algorithm to function properly
  let sortedArray = arr.toSorted(function(a, b){return (a - b)});
  console.log(`Sorted array: [${sortedArray}]`);

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
  return `${target} at index ${foundIndex}`;
}


console.log(myArr);
console.log(binarySearch(myArr, 16));

console.log(myArr);
console.log(binarySearch(myArr, 15));

