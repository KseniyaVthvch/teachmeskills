const rootElem = document.getElementById('root')

const renderElem = (elem) => {
   const {id, title} = elem

   const addElem = document.createElement('p')
   addElem.innerText = `${id}. ${title}`

   rootElem.appendChild(addElem)
}

///

const post = [15, 23, 7, 3]

/// Promise chaining

const getPosts = (id) => {
   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then(data => data.json())
   .then(data => renderElem(data))
   .catch(error => console.log('Error'))
}

const getData = (data) => {
   data.forEach(id => {
      getPosts(id)
   });
}

getData(post)

/// Async / await

async function getPosts2(id) {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await response.json()
   console.log(data);
}

const getData2 = (data) => {
   data.forEach(id => {
      getPosts2(id)
   });
}

getData2(post)