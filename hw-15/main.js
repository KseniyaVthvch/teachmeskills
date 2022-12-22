const root = document.getElementById("root")

const ul = document.createElement("ul")
root.appendChild(ul)

async function getTodos() {
	let result = await fetch("https://jsonplaceholder.typicode.com/todos")
	let data = await result.json()
	
	data.forEach(item => {
		printTodos(item)
	})
}

getTodos()

function printTodos(elem) {
	const { userId, id, title,  completed } = elem

	const li = document.createElement("li")
	li.textContent = `${id}) ${title}`
	ul.appendChild(li)
}
