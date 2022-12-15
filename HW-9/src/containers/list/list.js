import { setName } from "../../utils/localStorage.js";
export const renderTodoElement = (list, element, todo, storageKey) => {
  const { id, checked, todoText, date } = element;

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

  isChecked.addEventListener("click", () => {
    if (listItem.classList.contains("checked")) {
      listItem.classList.remove("checked");
      element.checked = false;
      setName(storageKey, todo);
    }
    else {
      listItem.classList.add("checked");
      element.checked = true;
      setName(storageKey, todo);
    }
  })

  const todoTextArea = document.createElement("input");
  todoTextArea.setAttribute("type", "text");
  todoTextArea.setAttribute("placeholder", "Todo text");
  todoTextArea.setAttribute("class", "conroll-pannel_padding text-holder");
  todoTextArea.setAttribute("value", todoText);
  listItem.appendChild(todoTextArea);

  const btnDel = document.createElement("button");
  btnDel.setAttribute("class", "button conroll-pannel_padding");
  btnDel.textContent = "X";
  listItem.appendChild(btnDel);
  btnDel.addEventListener("click", () => {

    const index = todo.findIndex((todoItem) => {
      if (todoItem.id === id) {
        return true;
      }
      else {
        return false;
      }
    })
    todo.splice(index, 1);
    list.removeChild(listItem);
    setName(storageKey, todo);
  })

  const btnDate = document.createElement("button");
  btnDate.setAttribute("class", "button conroll-pannel_padding");
  const today = new Date();
  const now = today.toLocaleDateString('en-US');
  btnDate.textContent = now;
  listItem.appendChild(btnDate);
}

export const renderList = (list, todo, storageKey) => {
  todo.forEach((el) => {
    renderTodoElement(list, el, todo, storageKey);
  })
}