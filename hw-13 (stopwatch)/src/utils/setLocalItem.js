import { todo } from "../containers/form.js"

export const setItem = () => localStorage.setItem("todo", JSON.stringify(todo))