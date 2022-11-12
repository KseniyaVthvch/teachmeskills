// Задание 1
const a1 = 'true'
const b1 = false
const c1 = 17
const d1 = undefined
const e1 = null

console.log(typeof a1)
console.log(typeof b1)
console.log(typeof c1)
console.log(typeof d1)
console.log(typeof e1)

// Задание 2
const height = 15
const width = 20

if (height > width) {
	console.log(height)
} else if (height === width) {
	console.log("Они равны")
} else {
	console.log(width)
}

// Задание 3
for (let i = 1; i < 21; i++) {
	if (i % 3 === 0) {
		console.log(i)
	}
}

// Задание 4
const key = true
const documents = true
const pen = true
const apple = false
const orange = true
const shouldGoToWork = 'Все взяли'
	//возможно не совсем так понял задание, но какой именно ответ мы должны взять в переменную shouldGoToWork? Сделал так
if (key && documents && pen && (apple || orange)) {
	console.log(shouldGoToWork)
} else {
	console.log('Что-то забыли')
}

// Zadanie 5
const a5 = +prompt('Vvedite chislo')

if (a5 % 5 === 0 && a5 % 3 === 0) {
	console.log('FizBuz')
} else if (a5 % 3 === 0) {
	console.log('Buz')
} else if (a5 % 5 === 0) {
	console.log('Fiz')
}

// Zadanie 6
const a6 = +prompt('Vvedite vash vozrast')

if (a6 > 18) {
	console.log('Bahni pivka')
} else if (a6 <= 18 && a6 >= 16) {
	console.log('Vikuri sigaretku')
} else {
	console.log('Pey vodu')
}

// Задание 7
const a7 = prompt('В какую сторону света поедешь?')

switch (a7) {
	case 'юг':
	console.log('на юг пойдешь счастье найдешь')
	break;
	case 'север':
	console.log('на север пойдешь много денег найдешь')
	break;
	case 'запад':
	console.log('на запад пойдешь верного друга найдешь')
	break;
	case 'восток':
	console.log('на восток пойдешь разработчиком станешь')
	break;
	default:
	console.log('Неверные данные, попробуйте еще раз')
}

//ADVANCED level
//Task 1
//Намудрил тут чето, но вроде работает
const name = 'пОлИнА нАбЕрЕжНаЯ'
const word1 = String(name.split(" ")[0])
const len1 = word1.length
const word2 = String(name.split(" ")[1])
const len2 = word2.length
let firstName = `${word1[0].toUpperCase()}`
let lastName = `${word2[0].toUpperCase()}`

for (let i = 1; i < len1; i++) {
	firstName = firstName + word1[i].toLowerCase()
}
for (let i = 1; i < len2; i++) {
	lastName = lastName + word2[i].toLowerCase()
}

alert(`Привет, ${firstName} ${lastName}!`)

// Task 2
const num1 = +prompt('Введите число')
const minus = +prompt('Сколько отнять?')
const plus = +prompt('Сколько прибавить?')
const umnozh = +prompt('На сколько умножить?')
const delenie = +prompt('На сколько разделить?')
const res = (((num1 - minus) + plus) * umnozh) / delenie

alert(`(((${num1} - ${minus}) + ${plus}) * ${umnozh}) / ${delenie} = ${res}`)
	
// Task 3
let r = ''

for (let i = 0; i < 11; i++) {
	r = r + '#'
	console.log(r)
}