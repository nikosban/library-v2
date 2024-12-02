import { Book } from "./collections/book";
import { Collection } from "./collections/collection";
import { pageContent } from "./ui/UI";
import "./ui/stylesheet.css";

export const defaultCollection = new Collection();

const book1 = new Book("1", "2", 123, 123, false);

defaultCollection.addBook(book1);

export const coll1 = defaultCollection.bookCollection;

pageContent();
