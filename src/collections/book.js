export class Book {
  constructor(id, name, author, pages, releasedYear, read = true) {
    this.id = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.releasedYear = releasedYear;
    this.read = read;
  }

  getBook() {
    console.log(this);
  }

  getId() {
    let position = this.id;
    console.log(position);
  }

  updateName(newName) {
    this.name = newName;
  }
}
