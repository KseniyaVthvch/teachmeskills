// Objects
// Complete exercise
// NORMAL level
// Task 1 💻
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.
const obj1 = {
	width: 100,
	height: 200,
}

delete obj1.width
delete obj1.height

console.log(obj1)
// Task 2 🖥
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true
const obj2 = {
	width: 100,
	height: 200,
}

console.log("width" in obj2)

// Task 3 🖥
// Дан обьект:

//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.
const student = {
	name: 'John',
	age: 19,
	isHappy: true
}

for (let key in student) {
	console.log(key)
	console.log(student[key])
}

// Task 4 🖥
// Дан обьект:

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// Вывести в консоль слово красный и синий
const colors = {
	'ru pum pu ru rum': {
		red: 'красный',
		green: 'зеленый',
		blue: 'синий'
	},
};
console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue)


// Task 5 🖥
// Дан обьект:

//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

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

// Task 6 🖥
// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные.Если верно введен логин и пароль, вывести сообщение 
// Добро пожалоВать.
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
// ADVANCED level
// Task 1 🖥
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
	name: 'Polina',
	age: 27,
}

let student2 = {
	name: 'Polina',
	age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2))


// Task 2 🖥
// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ. Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

// const animals = {
//    cat: {
//       name: 'Енчик',
//       age: 3,
//    },
//    dog: {
//       name: 'Орео',
//       age: 2,
//    }
// }
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
