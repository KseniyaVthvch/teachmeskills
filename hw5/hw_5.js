/// Task 1

const obj1 = {
	width: 100,
	height: 200,
}

delete obj1.width
delete obj1.height

console.log(obj1)


/// Task 2

const obj2 = {
	width: 100,
	height: 200,
}

console.log("width" in obj2)

/// Task 3
const student = {
	name: 'John',
	age: 19,
	isHappy: true
}

for (let key in student) {
	console.log(key)
	console.log(student[key])
}

/// Task 4

const colors = {
	'ru pum pu ru rum': {
		red: 'красный',
		green: 'зеленый',
		blue: 'синий'
	},
};
console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue)

/// Task 5

let salaries = {
	andrey: 500,
	sveta: 413,
	anton: 987,
	olga: 664,
	alexandra: 199,
}

function calcSal(obj5) {
	let k = 0
	for (let key in obj5) {
		k = k + obj5[key]
	}
	result = k / Object.keys(obj5).length
	return result
}
console.log(calcSal(salaries))


/// Task 6

askLogin = prompt("Введите логин")
askPassword = prompt("Введите пароль")

const askData = {
	login: askLogin,
	password: askPassword,
}

confirmLogin = prompt("Подтвердите логин")
confirmPassword = prompt("Подтвердите пароль")

const confirmData = {
	login: confirmLogin,
	password: confirmPassword,
}

if (askData.login === confirmData.login && askData.password === confirmData.password) {
	console.log("Добро пожаловать.")
} else { console.log("Данные не совпадают") }

/// Advanced
/// Task 1

let student1 = {
	name: 'Polina',
	age: 27,
}

let student2 = {
	name: 'Polina',
	age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2))

/// Task 2
const animals = {
	cat: {
		name: 'Енчик',
		age: 3,
	},
	dog: {
		name: 'Орео',
		age: 2,
	}
}

console.log(animals.bird?.name)







