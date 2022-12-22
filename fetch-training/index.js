const root = document.querySelector('#root')


const listUl = document.createElement('ul')
listUl.className = 'list-ul'
listUl.innerText = 'TODO list'
root.appendChild(listUl)


const printTodos = (elem) => {
   const { id, title } = elem
   const itemLi = document.createElement('li')
   itemLi.className = 'item-li '
   itemLi.innerText = id + '.' + " " + title
   listUl.appendChild(itemLi)
}


const getTodos = async () => {
   const result = await fetch('https://jsonplaceholder.typicode.com/todos')
   const data = await result.json()
   data.forEach(element => {
      printTodos(element)
   })
}
getTodos()