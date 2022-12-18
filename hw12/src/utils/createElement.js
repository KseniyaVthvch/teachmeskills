export const createElement = (tag, options) => {
	const elem = document.createElement(tag)
	Object.keys(options).forEach(item => {
		elem[item] = options[item]
	})
	return elem
}