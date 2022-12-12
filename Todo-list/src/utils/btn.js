import { createElemetns } from "./createElem.js";

export const button = (textContent, onClick) => {
   const btn = createElemetns("button", {
      textContent: textContent
   })

   btn.addEventListener("click", onClick)
   return btn
}