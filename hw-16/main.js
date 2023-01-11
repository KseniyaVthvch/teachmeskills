const postsArr = [15,23,7,3]

const render = (elem) => {
	const { userId, id, title, body } = elem

	const postTitle = document.createElement("h1")
	postTitle.textContent = id + ") " + title.toUpperCase()
	document.body.appendChild(postTitle)

	const postBody = document.createElement("p")
	postBody.textContent = body[0].toUpperCase() + body.slice(1) + "."
	document.body.appendChild(postBody)
}

postsArr.forEach(item => {
	const promise = fetch("https://jsonplaceholder.typicode.com/posts/" + item)
		.then(response => response.json())
		.then(data => render(data))
		.catch(err => console.log('Fetch Error :(', err))
})