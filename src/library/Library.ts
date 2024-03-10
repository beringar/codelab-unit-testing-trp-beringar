type Book = { title: string; author: string };

export class Library {
  #books: Book[] = [];

  // Add a book to the library
  addBook(book: Book) {
    this.#books.push(book);
  }

  getAllBooks() {
    return this.#books;
  }
}
