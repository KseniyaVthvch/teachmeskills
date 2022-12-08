export const createElement = (tag, options) => {
    const elem = document.createElement(tag)

    elem.textContent = options.textContent
    elem.className = options.className
    Object.keys(options).forEach(item => {
        elem[item] = options[item]
    })
    return elem
}