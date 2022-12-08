import {users} from "../store.js";
import {createElement} from "../utils/createElement.js";
import renderUserElement from "../utils/renderUserElement.js"

const root = document.getElementById("root")

const title = createElement("h3", {
    className: "title",
    textContent: "Users"
})

root.appendChild(title)

users.forEach((elem) => {
    renderUserElement(elem)
})