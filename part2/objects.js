// File: objects.js
// Description: JavaScript Assessment task 2: Part B - Q2.1 - 2.4
// Author: Euan Renfrey-Douglas
// Date created: 2025-09-24
// Last modified: 2025-10-31
// Version: 1.4.1



// Q2.1
// Creating a movie object with the title and year properties
let myMovie = {
  Title: "The longest day",
  Year: 1964
};

// logging the movie object to the console
console.log(myMovie);



// Q2.2
// Adding a rating and summary properties to the movie object and assigning values to them
myMovie.Rating = 5;
myMovie.Summary = "World War II movie about the Normandy landings";

// logging updated movie object to console
console.log(myMovie);



// Q2.3
// Reassigning values to existing properties within movie object
myMovie.Rating = 4;
myMovie.Year = 1962;

// logging updated movie object to console
console.log(myMovie);



// Q2.4
// Removed summary property from movie object using delete method
delete myMovie.Summary;

// logging updated movie object to console
console.log(myMovie);