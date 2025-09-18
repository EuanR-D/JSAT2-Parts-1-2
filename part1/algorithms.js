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

console.log(sequentialSearch(myArrAsc, 30));

console.log(sequentialSearch(myArrAsc, 12));