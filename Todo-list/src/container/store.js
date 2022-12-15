export let todo = [
   {
      id: 0,
      isChecked: false, 
      text: "Todo text"
   },
   {
      id: 1,
      isChecked: false, 
      text: "Todo text"
   },
]

export const setName = (data) => {
   localStorage.setItem("todos", JSON.stringify(data))
}

const getItem = localStorage.getItem("todos")
if (getItem === null) {
   setName(todo)
}
todo = JSON.parse(getItem)

