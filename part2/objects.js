// Q2.1
// Creating a movie object with the title and year properties
let myMovie = {
  Title: "The longest day",
  Year: 1964
};

console.log(myMovie);

// Q2.2
// Adding a rating and summary properties to the movie object and assigning values to them
myMovie.Rating = 5;
myMovie.Summary = "World War II movie about the Normandy landings";

console.log(myMovie);

// Q2.3
// Reassigning values to existing properties within movie object
myMovie.Rating = 4;
myMovie.Year = 1962;

console.log(myMovie);

// Q2.4
// Removed summary property from movie object
delete myMovie.Summary;

console.log(myMovie);