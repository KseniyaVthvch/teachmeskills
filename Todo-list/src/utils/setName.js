export const setName = (data => {
   localStorage.setItem('todos', JSON.stringify(data))
})