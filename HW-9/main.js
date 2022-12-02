const todo = [
  {
    checked: true,
    todoText: "test",
    date: ``,
  },
  {
    checked: false,
    todoText: "test",
    date: ``,
  },
]

console.log(todo);

const root = document.getElementById("root");

//first line
const controlPanel = document.createElement("div");
controlPanel.setAttribute("class", "cotroll-panel panel");
root.appendChild(controlPanel);

const BtnDeleteAll = document.createElement("button");
BtnDeleteAll.setAttribute("type", "button");
BtnDeleteAll.setAttribute("class", "conroll-pannel_padding button")
BtnDeleteAll.textContent = "Delete All";
controlPanel.appendChild(BtnDeleteAll);

const BtnDeleteLast = document.createElement("button");
BtnDeleteLast.setAttribute("type", "button");
BtnDeleteLast.setAttribute("class", "conroll-pannel_padding button")
BtnDeleteLast.textContent = "Delete Last";
controlPanel.appendChild(BtnDeleteLast);

const inputEnterTodo = document.createElement("input");
inputEnterTodo.setAttribute("type", "text");
inputEnterTodo.setAttribute("placeholder", "Enter todo");
inputEnterTodo.setAttribute("class", "conroll-pannel_padding text-holder");
controlPanel.appendChild(inputEnterTodo);

const BtnAdd = document.createElement("button");
BtnAdd.setAttribute("type", "button");
BtnAdd.setAttribute("class", "conroll-pannel_padding button")
BtnAdd.textContent = "Add";
controlPanel.appendChild(BtnAdd);


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

const BtnShowAll = document.createElement("button");
BtnShowAll.setAttribute("type", "button");
BtnShowAll.setAttribute("class", "conroll-pannel_padding button")
BtnShowAll.textContent = "Show All";
filterPanelWrapper.appendChild(BtnShowAll);

const BtnShowCompleted = document.createElement("button");
BtnShowCompleted.setAttribute("type", "button");
BtnShowCompleted.setAttribute("class", "conroll-pannel_padding button")
BtnShowCompleted.textContent = "Show Completed";
filterPanelWrapper.appendChild(BtnShowCompleted);

const inputEnterSearch = document.createElement("input");
inputEnterSearch.setAttribute("type", "text");
inputEnterSearch.setAttribute("placeholder", "Search");
inputEnterSearch.setAttribute("class", "conroll-pannel_padding text-holder");
filterPanelWrapper.appendChild(inputEnterSearch);


//List of items to do
const list = document.createElement("div");
list.className = "list";
root.appendChild(list);

todo.forEach((element) => {
  const { checked, todoText, date } = element;

  const listItem = document.createElement("div");
  listItem.classList.add("list-item");
  list.appendChild(listItem);

  const isChecked = document.createElement("input");
  isChecked.type = "checkbox";
  isChecked.classList.add("checkbox");
  if (element.checked) {
    isChecked.setAttribute("checked", "yes");
    listItem.classList.add("checked");
  }
  listItem.appendChild(isChecked);

  const todoTextArea = document.createElement("input");
  todoTextArea.setAttribute("type", "text");
  todoTextArea.setAttribute("placeholder", "Todo text");
  todoTextArea.setAttribute("class", "conroll-pannel_padding text-holder");
  listItem.appendChild(todoTextArea);

  const btnDel = document.createElement("button");
  btnDel.setAttribute("class", "button conroll-pannel_padding");
  btnDel.textContent = "X";
  listItem.appendChild(btnDel);

  const btnDate = document.createElement("button");
  btnDate.setAttribute("class", "button conroll-pannel_padding");
  const today = new Date();
  const now = today.toLocaleDateString('en-US');
  btnDate.textContent = now;
  listItem.appendChild(btnDate);
})