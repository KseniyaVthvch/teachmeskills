import { setName } from "../../utils/localStorage.js";
import { renderTodoElement } from "../list/list.js";

function calculate(lenghtList, todo) {
  lenghtList.textContent = `All: ${todo.length}`;
}
function renderHeader(todo, storageKey, list) {
  const controlPanel = document.createElement("div");
  controlPanel.setAttribute("class", "cotroll-panel panel");
  root.appendChild(controlPanel);

  const btnDeleteAll = document.createElement("button");
  btnDeleteAll.setAttribute("type", "button");
  btnDeleteAll.setAttribute("class", "conroll-pannel_padding button")
  btnDeleteAll.textContent = "Delete All";
  controlPanel.appendChild(btnDeleteAll);
  btnDeleteAll.addEventListener("click", () => {
    list.replaceChildren();
    setName(storageKey, []);
    calculate(lenghtList, todo);
  })

  const btnDeleteLast = document.createElement("button");
  btnDeleteLast.setAttribute("type", "button");
  btnDeleteLast.setAttribute("class", "conroll-pannel_padding button")
  btnDeleteLast.textContent = "Delete Last";
  controlPanel.appendChild(btnDeleteLast);
  btnDeleteLast.addEventListener("click", () => {
    list.removeChild(list.children[list.children.length - 1]);
    todo.pop();
    setName(storageKey, todo);
    calculate(lenghtList, todo);
  })

  const inputEnterTodo = document.createElement("input");
  inputEnterTodo.setAttribute("type", "text");
  inputEnterTodo.setAttribute("placeholder", "Enter todo");
  inputEnterTodo.setAttribute("class", "conroll-pannel_padding text-holder");
  controlPanel.appendChild(inputEnterTodo);

  const btnAdd = document.createElement("button");
  btnAdd.setAttribute("type", "button");
  btnAdd.setAttribute("class", "conroll-pannel_padding button")
  btnAdd.textContent = "Add";
  controlPanel.appendChild(btnAdd);
  btnAdd.addEventListener("click", () => {
    const today = new Date();
    const now = today.toLocaleDateString('en-US');
    const newItem = {
      id: `${inputEnterTodo.value}-${todo.length}`,
      checked: false,
      todoText: inputEnterTodo.value,
      date: now,
    }
    inputEnterTodo.value = "";
    todo.push(newItem);
    setName(storageKey, todo);
    renderTodoElement(list, newItem, todo, storageKey);
  })

  //second line
  const filterPanelWrapper = document.createElement("div");
  filterPanelWrapper.className = "selection-panel panel";
  root.appendChild(filterPanelWrapper);

  const filterPanel = document.createElement("div");
  filterPanel.className = "selection-panel_info";
  filterPanelWrapper.appendChild(filterPanel);
  const lenghtList = document.createElement("h2");
  const getArrayLength = function (array) {
    return array.length;
  }
  lenghtList.textContent = `All: ${getArrayLength(todo)}`;

  filterPanel.appendChild(lenghtList);


  const countOfCompleted = document.createElement("h2");
  function filterById(item) {
    return item.checked;
  }
  let checkedItems = todo.filter(filterById);
  countOfCompleted.textContent = `Completed ${checkedItems.length}`;
  filterPanel.appendChild(countOfCompleted);

  const btnShowAll = document.createElement("button");
  btnShowAll.setAttribute("type", "button");
  btnShowAll.setAttribute("class", "conroll-pannel_padding button")
  btnShowAll.textContent = "Show All";
  filterPanelWrapper.appendChild(btnShowAll);

  const btnShowCompleted = document.createElement("button");
  btnShowCompleted.setAttribute("type", "button");
  btnShowCompleted.setAttribute("class", "conroll-pannel_padding button")
  btnShowCompleted.textContent = "Show Completed";
  filterPanelWrapper.appendChild(btnShowCompleted);

  const inputEnterSearch = document.createElement("input");
  inputEnterSearch.setAttribute("type", "text");
  inputEnterSearch.setAttribute("placeholder", "Search");
  inputEnterSearch.setAttribute("class", "conroll-pannel_padding text-holder");
  filterPanelWrapper.appendChild(inputEnterSearch);
}

export { renderHeader };