import { setName } from "./utils/setName.js"
export let todo = [
   {
      id: 0,
      isChecked: true,
      text: 'Todo text',
   },
   {
      id: 1,
      isChecked: true,
      text: 'Todo text',
   }

]

if (localStorage.getItem('todos') === null) {
   setName(todo)
}

todo = JSON.parse(localStorage.getItem('todos'))
