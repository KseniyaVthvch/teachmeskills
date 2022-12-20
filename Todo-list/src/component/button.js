import { createElement } from "../utils/createElement.js";

export const button = (className1, className2, textContent, onClick) => {
   const btn = createElement("button", {
      className: className1,
      className: className2,
      textContent: textContent,
   })

   btn.addEventListener("click", onClick)
   return btn
}


export const deleteAllButtonClickHandler = currentElem => {
   root.removeChild(currentElem)
}

