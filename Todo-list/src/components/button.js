import { createElement } from "../utils/createElement.js"

export const button = (textContent, className, onClick) => {
   const btn = createElement("button", {
      textContent,
      className
   })
   btn.addEventListener("click", onClick)
   return btn
}