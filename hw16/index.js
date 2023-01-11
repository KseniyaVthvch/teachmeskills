const posts = [3, 7, 15, 23]
const posts2 = [9, 4, 2, 8]
const url = `https://jsonplaceholder.typicode.com/posts/${""}`

const getPost1 = (id) => {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then(data => data.json())
		.then(data => console.log(data))
}
const getData1 = (data) => {
	data.forEach(id => {
		getPost1(id)
	})
}
getData1(posts)

async function getPost2(id) {
	let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	let data = await result.json()
	console.log(await data)
}
const getData2 = (data) => {
	data.forEach(id => {
		getPost2(id)
	})
}
getData2(posts2)
