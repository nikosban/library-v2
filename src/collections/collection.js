export class Collection {
  constructor() {
    this.bookCollection = [];
  }

  getCollection() {
    console.log(this);
  }

  addBook(book) {
    this.bookCollection.push(book);
  }
}
