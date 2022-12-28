const rootTag = document.getElementById('root');
const div=document.createElement('div');
div.classList.add("container");
rootTag.appendChild(div);

const list = document.createElement('ul');
div.appendChild(list);

const posts= [15,23,7,3]
const url = `https://jsonplaceholder.typicode.com/todos/${""}`

const getPost = (id,title)=>{
return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
.then(data=>data.json())
.then(data=>console.log(data))
}

const getData=(data)=>{
data.forEach(id=>{
    getPost(id)
    const li = document.createElement('li');
   li.textContent=`${id}`
   list.appendChild(li) 
   })
   
}
getData(posts)
//2й вариант  Async / await
const secondPosts= [75,80,35,60]
async function getSecondPost(id) {
	let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	let data = await result.json()
	console.log(await data)
}
const getsecondData = (data) => {
	data.forEach(id => {
		getSecondPost(id)
   const li = document.createElement('li');
   li.textContent=`${id}`
   list.appendChild(li) 
	})
}
getsecondData(secondPosts)




