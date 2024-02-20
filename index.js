import { readJson, updateJson } from "./fileUtils.js";

const sendResponse = (code, body = null) => {
  const response = {
    code,
    body,
  };

  switch (code) {
    case 200:
      response.msg = "Ok";
      break;
    case 400:
      response.msg = "Endpoint not valid";
      break;
    case 404:
      response.msg = "Not found";
      break;
    case 500:
      response.msg = "Internal Server Error";
      break;
    default:
      response.msg = "Unknown status code";
  }

  return response;
}

// //1. getBook, takes one book title OR ISBN and return it if exists.
// const getBook = (titleOrISBN) => {
//   const books = readJson("books.json");
//   try {
//     const book = books.find((currentBook) => currentBook.ISBN === titleOrISBN || currentBook.title === titleOrISBN);
//     if (!book) return sendResponse(404);
//     return sendResponse(200, book);
//   } catch (error) {
//     return sendResponse(500, error);
//   }
// };

// console.log(getBook("9780804139021"));

// // 2.getBooks, return all existing books.
// const getBooks = () => {
//   try {
//     const books = readJson("books.json");
//     if (books.length > 0) {
//       console.log(books)
//       return sendResponse(200)
//     }
//     return sendResponse(404)
//   } catch (error) {
//     return sendResponse(500, error)
//   }
// }

// console.log(getBooks());

// // 3. addBook, adds a new book to the books array and return the book created, and the new array, including the new book.
// const addBook = (title, ISBN, year, genre, author, stock, publisher) => {
//   try {
//     const books = readJson("books.json");
//     let exists = books.some(book => book.ISBN === ISBN);
//     if (exists) {
//       return sendResponse(400);
//     } else {
//       const newBook = { "title": title, "ISBN": ISBN, "year": year, "genre": genre, "author": author, "stock": stock, "publisher": publisher };
//       books.push(newBook);
//       updateJson("books-test.json", books);
//       console.log("New book added:", newBook);
//       return sendResponse(200, newBook);
//     }
//   } catch (error) {
//     return sendResponse(500, error);
//   }
// }

// console.log(addBook("The Princess Bride", "9780804139030", 1973, "Fantasy", "William Goldman", 5, "Harcourt Brace Jovanovich"));

// //4. removeBookByTitleOrISBN, takes a title OR ISBN and, if found, removes the element from the array, it returns the deleted element and the new array.
// const removeBookByTitleOrISBN = (book) => {
//   const books = readJson("books.json");
//   try {
//     let result = books.find((result) => result.ISBN === book || result.title === book);
//     if (result) {
//       const index = books.indexOf(result);
//       books.splice(index, 1);
//       updateJson("books-test.json", books);
//       console.log("Book removed:", result);
//       return sendResponse(200, result);
//     } else {
//       return sendResponse(404);
//     }
//   } catch (error) {
//     return sendResponse(500, error);
//   }
// }

// console.log(removeBookByTitleOrISBN("9781408855652"));

// //5. filterBy, the first param will be the filtering property (genre, author, or publisher), the second will be the string that is being searched. You must return all books that match the condition.
// const filterBy = (property, query) => {
//   let result;
//   try {
//     const books = readJson("books.json")
//     switch (property) {
//       case "genre":
//         result = books.filter(book => book.genre === query);
//         if (result.length > 0) {
//           console.log(result);
//           return sendResponse(200);
//         }
//         else {
//           return sendResponse(404);
//         }
//       case "author":
//         result = books.filter(book => book.author === query);
//         if (result.length > 0) {
//           console.log(result);
//           return sendResponse(200);
//         }
//         else {
//           return sendResponse(404);
//         }
//       case "publisher":
//         result = books.filter(book => book.publisher === query);
//         if (result.length > 0) {
//           console.log(result);
//           return sendResponse(200);
//         }
//         else {
//           return sendResponse(404);
//         }
//     }
//   }
//   catch (error) {
//     return sendResponse(500, error);
//   }
// }

// console.log(filterBy("genre", "Fantasy"));

// // 6. listBooks, return a list of all the books in the next format: Title - Author - Year.
// const listBooks = () => {
//   try {
//     const books = readJson("books.json")
//     if (books.length > 0) {
//       let newArrayBooks = books.map(function (book) {
//         return { title: book.title, author: book.author, year: book.year };
//       });
//       console.log(newArrayBooks);
//       return sendResponse(200);
//     }
//     else {
//       return sendResponse(404);
//     }
//   }
//   catch (error) {
//     return sendResponse(500, error);
//   }
// }

// console.log(listBooks());

// // 7. getBooksByYear, return all books for a given year.
// const getBooksByYear = (date) => {
//   let result;
//   try {
//     const books = readJson("books.json")
//     result = books.filter(book => book.year === date);
//     if (result.length > 0) {
//       console.log(result);
//       return sendResponse(200);
//     }
//     else {
//       return sendResponse(404);
//     }
//   }
//   catch (error) {
//     return sendResponse(500, error);
//   }
// }

// console.log(getBooksByYear(2011));

// // 8. genreFullAvailability, return true or false if all books from a given genre have stock available.
// const genreFullAvailability = (genre) => {
//   try {
//     const books = readJson("books.json")
//     const result = books.filter(book => book.genre === genre);
//     if (result.length === 0) {
//       return sendResponse(404);
//     }
//     const isAvailable = result.every(book => book.stock > 0);
//     if (isAvailable) {
//       console.log("Is there available stock for every book of", genre, "genre?:", isAvailable);
//       return sendResponse(200);
//     } else {
//       console.log("Is there available stock for every book of", genre, "genre?:", isAvailable);
//       return sendResponse(404);
//     }
//   } catch (error) {
//     return sendResponse(500, error);
//   }
// }

// console.log(genreFullAvailability("Fantasy"));

// // 9. genrePartialAvailability, return true or false if at least ONE book from a given genre has stock availability.
// const genrePartialAvailability = (genre) => {
//   try {
//     const books = readJson("books.json");
//     const result = books.filter(book => book.genre === genre);
//     if (result.length === 0) {
//       return sendResponse(404);
//     }
//     const hasAvailability = result.some(book => book.stock > 0);
//     if (hasAvailability) {
//       console.log("At least one", genre, "book has available stock?:", hasAvailability);
//       return sendResponse(200);
//     } else {
//       console.log("At least one", genre, "book has available stock?:", hasAvailability);
//       return sendResponse(404);
//     }
//   } catch (error) {
//     return sendResponse(500, error);
//   }
// }

// console.log(genrePartialAvailability("Science"));


// // 10. getCountBy, the first param will be the counting property (genre, author, or publisher), you must return a new object with the name of the property that you are counting and the counter.
// const getCountBy = (property, query) => {
//   try {
//     const books = readJson("books.json")
//     let result;
//     switch (property) {
//       case "genre":
//         result = books.filter(book => book.genre === query);
//         break;
//       case "author":
//         result = books.filter(book => book.author === query);
//         break;
//       case "publisher":
//         result = books.filter(book => book.publisher === query);
//         break;
//       default:
//         return sendResponse(400);
//     }

//     if (result.length > 0) {
//       const totalCount = result.reduce((acc, book) => acc + 1, 0);
//       console.log("The total number of books counted according to their", property, "(", query, ")", "are:", totalCount);
//       return sendResponse(200);
//     } else {
//       return sendResponse(404);
//     }
//   } catch (error) {
//     return sendResponse(500, error);
//   }
// }

// console.log(getCountBy("genre", "Fantasy"));











// const updateBookTitle = (isbn, title) => {
//   try {
//     const books = readJson("books-test.json");
//     let updatedBook;
//     const newBooks = books.map((book) => {
//       if (book.ISBN === isbn) {
//         updatedBook = { ...book, title };
//         return updatedBook;
//       }

//       return book;
//     });

//     updateJson("books-test.json", newBooks);
//     return updatedBook;
//   } catch (error) {
//     console.error(error);
//   }
// };

// function main() {
//   const args = process.argv.slice(2);

//   const endpoint = args[0];

//   switch (endpoint) {
//     case "getBook":
//       const titleOrISBN = args[1];
//       console.log(getBook(titleOrISBN));
//       break;
//     case "updateBookTitle":
//       const isbn = args[1];
//       const title = args[2];

//       console.log(updateBookTitle(isbn, title));
//       break;
//     default:
//       console.log("Endpoint no válido");
//   }
// }

// main();