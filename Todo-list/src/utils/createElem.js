export const createElemetns = (tag, options) => {
   const addElement = document.createElement(tag)
   Object.keys(options).forEach(item => {
      addElement[item] = options[item]
   })
   return addElement
}
