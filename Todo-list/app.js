const root = document.getElementById("root")

const title = document.createElement("h3")
title.setAttribute("class","title")
title.textContent = "List Users"
root.appendChild(title)

const users = [
    {
        id:0,
        text: "Todo text",
        check: true ,
    },
    {
        id:1,
        text: "Poncik",
        check: true ,
    }
]


const option = document.createElement("div")
option.classList.add("option")
root.appendChild(option)

const deleteAll = document.createElement("button")
deleteAll.classList.add("delete")
deleteAll.textContent = "Delete All"
option.appendChild(deleteAll)

const deleteAllButtonHandler = () => {
const usersItems = document.querySelectorAll(".todo")
usersItems.forEach((item)=>{
    item.remove()
})
}
deleteAll.addEventListener("click",deleteAllButtonHandler)


const enterIn = document.createElement("input")
enterIn.type = "text"
enterIn.placeholder = "Enter todo..."
enterIn.classList.add("enter")
option.appendChild(enterIn)

const add = document.createElement("button");
add.setAttribute("type", "button");
add.setAttribute("class","add");
add.textContent="Add";
option.appendChild(add);
add.addEventListener("click", () => {
    if(enterIn.value !== ""){
        const newUsers = {
        check: false,
        text: enterIn.value,
        date: ``,
        id: users.length,
    }

    renderToDoElement(newUsers);
    enterIn.value = "";
    console.log(newUsers)}

    else {
        alert("Blank field")
    }

})




const deleteBtnClickHandler = (currentElem) => {
console.log(currentElem)
root.removeChild(currentElem)
}


const renderToDoElement = (item) => {
    const   {id,text , check } = item

    const toDo = document.createElement("div")
    toDo.classList.add("todo")
    toDo.setAttribute("id", String(id))
    root.appendChild(toDo)

    const todoName = document.createElement("div")
    todoName.classList.add("todo__name")
    toDo.appendChild(todoName)

    const isCheck = document.createElement("input")
    isCheck.classList.add("todo__check")
    isCheck.type = "checkbox"
    isCheck.checked = check
    todoName.appendChild(isCheck)
    
    const isText = document.createElement("input")
    isText.classList.add("todo__text")
    isText.placeholder = text
    todoName.appendChild(isText)


    const toOption = document.createElement("div")
    toOption.classList.add("todo__option")
    toDo.appendChild(toOption)

    const btn = document.createElement("button")
    btn.classList.add("btn_x")
    btn.textContent="X"
    btn.addEventListener("click",() => deleteBtnClickHandler(toDo))
    toOption.appendChild(btn)

    
    const date = document.createElement("div")
    date.classList.add("date")
    const isDate = new Date()
    date.textContent = `${isDate.getDate()}.${isDate.getMonth() +1}.${isDate.getFullYear()}`
    toOption.appendChild(date)

}

users.forEach((item) => {
    renderToDoElement(item);
})
