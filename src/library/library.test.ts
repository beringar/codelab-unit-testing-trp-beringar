import { expect, test } from "vitest";
import { Library } from "./library";

test("library adds book", () => {
  const library = new Library();
  const mockBook = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
  };

  library.addBook(mockBook);

  const books = library.getAllBooks();
  expect(books[0]).toBe(mockBook);
});
