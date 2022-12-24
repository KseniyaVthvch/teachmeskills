export const createElement = (tag, container, options) => {
    const element = document.createElement(tag)

    if(options) {
        Object.keys(options).forEach((key) => {
            element[key] = options[key]
        })
    }

    if(container) {
        container.appendChild(element)

    }

    return element
}