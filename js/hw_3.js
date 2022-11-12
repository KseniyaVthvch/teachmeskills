/// Task 1 

const type1 = 'true'
const type2 = false
const type3 = 17
const type4 = undefined
const type5 = null
console.log(typeof type1)
console.log(typeof type2)
console.log(typeof type3)
console.log(typeof type4)
console.log(typeof type5)

/// Task 2

let height = 15
let width = 20

if (height > width) { console.log(height) }
else { console.log(width) }

/// Task 3

for (let i = 1; i <= 20; i++) {
	if (i % 3 === 0) { console.log(i) }
}

/// Task 4

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = undefined
if ((key && documents && pen && (apple || orange))) {
	shouldGoToWork = "Можно идти на работу";
	console.log(shouldGoToWork)
} else {
	shouldGoToWork = "Что-то забыл"
	console.log(shouldGoToWork)
}

/// Task 5

let ask1 = +prompt("Введите число")
if (ask1 % 3 === 0 && ask1 % 5 === 0) {
	console.log('FizBuz')
} else if (ask1 % 3 === 0) {
	console.log('Buz')
} else if (ask1 % 5 === 0) {
	console.log('Fiz')
}

/// Task 6

let age2 = +prompt("Введите ваш возраст")
if (age2 >= 16 && age2 <= 18) { console.log("Можешь выкурить сигаретку, только маме не говори") }
else if (age2 < 18) { console.log("Пей колу") }
else { console.log("Попей пивка") }

/// Task 7

let task7 = prompt('В какую сторону света поедешь?')

switch (task7) {
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

/// Advanced
/// Task 1

const str = 'пОлИнА нАбЕрЕжНаЯ'
const len = str.length
let newStr1 = ""
let newStr2 = ""
for (let p = 0; p < 6; p++) {
	if (p % 2 != 0) {
		newStr1 = newStr1 + str[p].toLowerCase()
	} else {
		newStr1 = newStr1 + str[p]
	}
}
for (let p = 7; p < 17; p++) {
	if (p % 2 == 0) {
		newStr2 = newStr2 + str[p].toLowerCase()
	} else {
		newStr2 = newStr2 + str[p]
	}
}

let name10 = newStr1 + " " + newStr2
alert(`Привет, ${name10}!`)
// Как правильно поменять первые буквы на большие ??? newStr1[0].toUppercase не хочет

// Task 2

let num11 = +prompt("Введите число")
let minus = +prompt('Сколько отнять?')
let plus = +prompt('Сколько прибавить?')
let multiply = +prompt('На сколько умножить?')
let divide = +prompt('На сколько разделить?')
let res = (((num11 - minus) + plus) * multiply) / divide
alert(`(((${num11} - ${minus}) + ${plus}) * ${multiply}) / ${divide} = ${res}`)


// Task 3

let sym = ''

for (let i = 0; i < 5; i++) {
	sym = sym + '#'
	console.log(sym)
}
