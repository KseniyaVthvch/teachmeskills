const root = document.getElementById('root')

async function getTodos() {
   let result = await fetch("https://jsonplaceholder.typicode.com/todos")
   let data = await result.json()
   data.forEach((elem) => printTodos(elem))
}

const printTodos = (elem) => {
   const { id, title } = elem
   const ul = document.createElement("ul")
   const li = document.createElement("li")
   li.textContent = id + " " + title
   li.style.listStyleType = "none"
   root.appendChild(ul)
   ul.appendChild(li)
}

getTodos()
