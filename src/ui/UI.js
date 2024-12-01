import { Book } from "../collections/book";
import { Collection } from "../collections/collection";

export function pageContent() {
  //get the container
  const container = document.getElementById("container");

  //create the header
  header(container);
}

function header(parent) {
  const headerWrapper = document.createElement("div");
  const title = document.createElement("h1");
  const addBtn = document.createElement("buton");

  //headerwrapper
  headerWrapper.className = "header";
  //title
  title.textContent = "The library";
  title.className = "heading-1";

  //createBtn
  addBtn.classList.add("prmBtn");
  addBtn.setAttribute("id", "create");
  addBtn.setAttribute("type", "button");
  addBtn.textContent = "Add Book";
  addBtn.addEventListener("click", () => {
    addModal();
  });

  headerWrapper.appendChild(title);
  headerWrapper.appendChild(addBtn);
  parent.appendChild(headerWrapper);
}

//add dialog
function addModal() {
  const modal = document.getElementById("addModal");
  modal.showModal();
}

document.getElementById("submit").addEventListener("click", (event) => {
  const dialog = document.getElementById("addModal");
  event.preventDefault();
  createBook(defaultCollection);
  dialog.close();
});

//add a new Book
function createBook(defaultCollection) {
  let newItem = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("publishYear").value,
    document.getElementById("read").checked,
  );

  defaultCollection.addBook(newItem);
  console.log(defaultCollection);
}
