export const createElem = (tag, options, to) => {
    const elem = document.createElement(tag)

    Object.keys(options).forEach(item => {
        elem[item] = options[item]
    })
    to.appendChild(elem)

    return elem
}