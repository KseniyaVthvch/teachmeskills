const mainElem = document.getElementById('main')

const newElem = document.createElement('ul')
mainElem.appendChild(newElem)

const printTodos = (elem) => {
   const {id, title} = elem

   const addLi = document.createElement('li')
   addLi.innerText = `${id}. ${title}`

   newElem.appendChild(addLi)
}


async function getTodos() {
   let result = await fetch('https://jsonplaceholder.typicode.com/todos')
   let data = await result.json()

   data.forEach(element => {
      printTodos(element)
   });
}

getTodos()



