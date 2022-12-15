// let todo = [
//   {
//     id: 0,
//     checked: true,
//     todoText: "first todo",
//     date: ``,
//   },
//   {
//     id: 1,
//     checked: false,
//     todoText: "second todo",
//     date: ``,
//   },
// ]

// const storageKey = "todos";

// const setName = (obj) => {
//   localStorage.setItem(storageKey, JSON.stringify(obj));
// }
// const getName = () => {
//   return JSON.parse(localStorage.getItem(storageKey));
// }

// const storageData = getName();




// const root = document.getElementById("root");

// //first line
// const controlPanel = document.createElement("div");
// controlPanel.setAttribute("class", "cotroll-panel panel");
// root.appendChild(controlPanel);

// const btnDeleteAll = document.createElement("button");
// btnDeleteAll.setAttribute("type", "button");
// btnDeleteAll.setAttribute("class", "conroll-pannel_padding button")
// btnDeleteAll.textContent = "Delete All";
// controlPanel.appendChild(btnDeleteAll);
// btnDeleteAll.addEventListener("click", () => {
//   list.replaceChildren();
//   setName([]);
//   calculate();
// })

// const btnDeleteLast = document.createElement("button");
// btnDeleteLast.setAttribute("type", "button");
// btnDeleteLast.setAttribute("class", "conroll-pannel_padding button")
// btnDeleteLast.textContent = "Delete Last";
// controlPanel.appendChild(btnDeleteLast);
// btnDeleteLast.addEventListener("click", () => {
//   list.removeChild(list.children[list.children.length - 1]);
//   calculate();
// })

// const inputEnterTodo = document.createElement("input");
// inputEnterTodo.setAttribute("type", "text");
// inputEnterTodo.setAttribute("placeholder", "Enter todo");
// inputEnterTodo.setAttribute("class", "conroll-pannel_padding text-holder");
// controlPanel.appendChild(inputEnterTodo);

// const btnAdd = document.createElement("button");
// btnAdd.setAttribute("type", "button");
// btnAdd.setAttribute("class", "conroll-pannel_padding button")
// btnAdd.textContent = "Add";
// controlPanel.appendChild(btnAdd);
// btnAdd.addEventListener("click", () => {
//   const today = new Date();
//   const now = today.toLocaleDateString('en-US');
//   const newItem = {
//     id: `${inputEnterTodo.value}-${todo.length}`,
//     checked: false,
//     todoText: inputEnterTodo.value,
//     date: now,
//   }
//   inputEnterTodo.value = "";
//   todo.push(newItem);
//   setName(todo);
//   renderTodoElement(newItem);
// })

// //second line
// const filterPanelWrapper = document.createElement("div");
// filterPanelWrapper.className = "selection-panel panel";
// root.appendChild(filterPanelWrapper);

// const filterPanel = document.createElement("div");
// filterPanel.className = "selection-panel_info";
// filterPanelWrapper.appendChild(filterPanel);
// const lenghtList = document.createElement("h2");
// const getArrayLength = function (array) {
//   return array.length;
// }
// lenghtList.textContent = `All: ${getArrayLength(todo)}`;

// filterPanel.appendChild(lenghtList);


// const countOfCompleted = document.createElement("h2");
// function filterById(item) {
//   return item.checked;
// }
// let checkedItems = todo.filter(filterById);
// countOfCompleted.textContent = `Completed ${checkedItems.length}`;
// filterPanel.appendChild(countOfCompleted);

// const btnShowAll = document.createElement("button");
// btnShowAll.setAttribute("type", "button");
// btnShowAll.setAttribute("class", "conroll-pannel_padding button")
// btnShowAll.textContent = "Show All";
// filterPanelWrapper.appendChild(btnShowAll);

// const btnShowCompleted = document.createElement("button");
// btnShowCompleted.setAttribute("type", "button");
// btnShowCompleted.setAttribute("class", "conroll-pannel_padding button")
// btnShowCompleted.textContent = "Show Completed";
// filterPanelWrapper.appendChild(btnShowCompleted);

// const inputEnterSearch = document.createElement("input");
// inputEnterSearch.setAttribute("type", "text");
// inputEnterSearch.setAttribute("placeholder", "Search");
// inputEnterSearch.setAttribute("class", "conroll-pannel_padding text-holder");
// filterPanelWrapper.appendChild(inputEnterSearch);


// //List of items to do

// const removeItemsClickHandler = (item) => {
//   list.removeChild(item);
// }

// const list = document.createElement("div");
// list.className = "list";
// root.appendChild(list);



// const renderTodoElement = (element) => {
//   const { checked, todoText, date } = element;

//   const listItem = document.createElement("div");
//   listItem.classList.add("list-item");
//   list.appendChild(listItem);

//   const isChecked = document.createElement("input");
//   isChecked.type = "checkbox";
//   isChecked.classList.add("checkbox");
//   if (element.checked) {
//     isChecked.setAttribute("checked", "yes");
//     listItem.classList.add("checked");
//   }
//   listItem.appendChild(isChecked);

//   isChecked.addEventListener("click", () => {
//     if (listItem.classList.contains("checked")) {
//       listItem.classList.remove("checked");
//     }
//     else {
//       listItem.classList.add("checked");
//     }
//   })

//   const todoTextArea = document.createElement("input");
//   todoTextArea.setAttribute("type", "text");
//   todoTextArea.setAttribute("placeholder", "Todo text");
//   todoTextArea.setAttribute("class", "conroll-pannel_padding text-holder");
//   todoTextArea.setAttribute("value", todoText);
//   listItem.appendChild(todoTextArea);

//   const btnDel = document.createElement("button");
//   btnDel.setAttribute("class", "button conroll-pannel_padding");
//   btnDel.textContent = "X";
//   listItem.appendChild(btnDel);
//   btnDel.addEventListener("click", () => {
//     removeItemsClickHandler(listItem);
//   })

//   const btnDate = document.createElement("button");
//   btnDate.setAttribute("class", "button conroll-pannel_padding");
//   const today = new Date();
//   const now = today.toLocaleDateString('en-US');
//   btnDate.textContent = now;
//   listItem.appendChild(btnDate);
// }

// function calculate() {
//   lenghtList.textContent = `All: ${todo.length}`;
// }

// // todo.forEach((element) => {
// //   renderTodoElement(element);
// // })
// if (storageData !== null) {
//   todo = storageData;
// }
// todo.forEach((element) => {
//   renderTodoElement(element);
// })

