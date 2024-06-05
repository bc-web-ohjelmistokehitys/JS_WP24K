// Task 1
// Create a JavaScript object named `library` that represents a collection of books.
// Each book should have properties for `title`, `author`, and `yearPublished`.
// Add at least two book objects to this collection.

let library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960
  }
];
console.log(library);
// Task 2
// Access the `title` of the first book in the `library` collection and log it to the console.
// Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.

console.log(library[0].title);
library[1].yearPublished = 1962;
console.log(library[1]);

// Task 3
// Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
// Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.

library[0].genres = ["Fiction", "Classics"];
library[0]["isAvailable"] = true;

// Task 4
// Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
// Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.

function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}

let newBook = new Book("1984", "George Orwell", 1949, ["Dystopian", "Political Fiction"]);
library.push(newBook);

// Task 5
// Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
// The function should return a new book object with these properties.
// Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.

function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres
  };
}

let userBook = createBook("The Catcher in the Rye", "J.D. Salinger", 1951, ["Literary Fiction"]);
console.log(userBook);

// Task 6
// Convert the `library` collection to a JSON string and log it to the console.
// Parse the JSON string back into a JavaScript object and log the first book's title to the console.

let libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

let parsedLibrary = JSON.parse(libraryJSON);
console.log(parsedLibrary[0].title);
