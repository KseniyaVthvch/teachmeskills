export const createElement = (tag, options) => {
   const newElem = document.createElement(tag)
   const arrayKeys = Object.keys(options)
   arrayKeys.forEach(item => newElem[item] = options[item])
   return newElem
}