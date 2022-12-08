// import {addItemHandler} from "./index.js";

const input = document.querySelector("#message")
const container = document.querySelector("#root")
const inputWrapper = document.querySelector(".inputWrapper")
const btn = document.createElement("button")
btn.id="btn"
btn.textContent = "Save"

// btn.addEventListener("click", () => {
//     addItemHandler(input, container)
// })
inputWrapper.appendChild(btn)


