import { todoList, storageKey } from "./store.js";
import { setName, getName } from "./utils/localStorage.js";
import { renderHeader } from "./containers/header/header.js";
import { renderList } from "./containers/list/list.js";

const storageData = getName(storageKey);
let todo = todoList;

if (storageData !== null) {
  todo = storageData;
}

const root = document.getElementById("root");

const list = document.createElement("div");
list.className = "list";


renderHeader(todo, storageKey, list);

renderList(list, todo, storageKey);
root.appendChild(list);