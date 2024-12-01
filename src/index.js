import { Book } from "./collections/book";
import { Collection } from "./collections/collection";
import { pageContent } from "./ui/UI";
import "./ui/stylesheet.css";

const defaultCollection = new Collection();
console.log(defaultCollection);

pageContent();

console.log(defaultCollection);
