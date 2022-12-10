
export let blocks = [
   {
      id: 0,
      isChecked: false,
      textTODO: 'Todo text',
   },
   {
      id: 1,
      isChecked: false,
      textTODO: 'Todo text',
   },
]
if (localStorage.getItem("todos") === null) {
   localStorage.setItem("todos", JSON.stringify(blocks))
}

blocks = JSON.parse(localStorage.getItem('todos'))
console.log(blocks)