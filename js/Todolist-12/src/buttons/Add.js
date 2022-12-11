
export const addBtn = document.createElement("button")
addBtn.classList.add("add__btn")
addBtn.innerText = "Add"
addBtn.addEventListener('click',() => {
    let value = inputTodo.value
    let newtodo = {
        id: `${value}-${todo.length}-${Math.random()}`,
        isChecked: false,
        text: value
    };
    todo.push(newtodo);
    localStorage.setItem("todo",JSON.stringify(todo))
    renderToDoItem(newtodo)
    console.log(value)
} )