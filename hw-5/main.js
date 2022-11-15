// Task 1
const obj1 = {
	name: "Daniil",
	age: "68"
}

delete obj1.name
delete obj1.age

console.log(obj1)

// Task 2
const obj2 = {
	name: "Daniil",
	age: "68"
}

console.log("name" in obj2)

// Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
	console.log(key)
	console.log(student[key])
}

// Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue)

// Task 5
let salaries = {
    andrey1: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
}

function calcAverage (obj) {
	let r = 0
	for (let key in obj) {
		r += obj[key]
	}
	return r / Object.keys(obj).length
}

console.log(calcAverage(salaries))

//Task 6
const obj6 = {}

obj6.login = prompt("Придумайте логин")
obj6.pass = prompt("Придумайте пароль")

const checkData = (login, password) => {login === prompt("Подтвердите логин") && password === prompt("Подтвердите пароль") ? alert("Добро пожаловать") : alert("Неверные данные")}

checkData(obj6.login, obj6.pass)

// ADVANCED level
// Task 1
let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2))

// Task 2
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
console.log(animals.cat.name)