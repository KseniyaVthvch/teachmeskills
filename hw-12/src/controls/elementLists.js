export { checkboxCheckedList, labelList, checkboxList }

const checkboxCheckedList = () => document.querySelectorAll("input[type=checkbox]:checked")

const labelList = () => document.querySelectorAll(".todo-list__content > label")

const checkboxList = () => document.querySelectorAll("input[type=checkbox]")