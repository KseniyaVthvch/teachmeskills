const root = document.getElementById("root")
const ul = document.createElement("ul")
root.appendChild(ul)
const printTodos = (elem) => {
	const { id, title } = elem
	const li = document.createElement("li")
	li.textContent = id + " " + title
	ul.appendChild(li)
}

async function getTodos() {
	let result = await fetch('https://jsonplaceholder.typicode.com/todos')
	let data = await result.json()
	data.forEach(elem => {
		printTodos(elem)
	});
}
getTodos()