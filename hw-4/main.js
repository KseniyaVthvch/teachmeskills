// Task 1
let result1 = 0

function getSum (num1) {
	for (let i = 0; i <= num1; i++) {
		result1 = result1 + i
	}
	return result1
}

console.log(getSum(100))

// Task 2
const stavka = 1.17
const years = 5

function kredit (sum) {
	let result2 = sum * stavka * years
	return result2
}

console.log(kredit(100))

// Task 3
function trimString (str, a, b) {
	let result3 = str.slice(a, b)
	return result3
}

console.log(trimString("Привет", 2, 4))	

// Task 4
let result4 = 0

function getSum2 (a, b) {
	if (a === b) {
		return a
	} else {
		for(let i = a; i <= b; i++) {
			result4 = result4 + i
		}
		return result4
	}
}

console.log(getSum2(-4, 3))
console.log(getSum2(3, 3))

// Task 5
function foo () {
	console.log("foo")
}

function doo () {
	console.log("doo")
}

function foodoo(bool, f1, f2) {
	if (!!bool === true) {
		f1()
	} else {
		f2()
	}
}
	
foodoo(1, foo, doo)
foodoo("", foo, doo)

// ADVANCED level
// Task 1
function getNum(a, b, c) {
	if ((((a + b) > c) && (a + c) > b && (c + b) > a) > 0) {
		return true
	} else {
		return false
	}
}

console.log(getNum(3, 2, 2))

// Task 2
function nadlom (n, m) {
	if (n < 1 || m < 1) {
		return 0
	} else {
		const result = n * m - 1
		return result
	}
}

console.log(nadlom(3,6))
console.log(nadlom(5,0))

// Task 3
const balance = +prompt("Введите баланс вашего банковского счета", 0)
let newBalance = 0
const nalog = 0.09 //9%
const pricePhone = 63.81
const priceAccessory = 7.46
let amountAccessory = 0
let priceTotal = 0
let nalogPrice = 0

function price () {
	function nalogCalc () {
		return priceTotal * nalog
	}

	while (true) {
		if (confirm("Купить телефон?") == true) {
			amountAccessory = +prompt("Сколько аксессуаров к телефону хотите купить?", 0)
			priceTotal = priceTotal + pricePhone + amountAccessory * priceAccessory
			nalogPrice = priceTotal + nalogCalc()
			newBalance = balance - nalogPrice

			if (priceTotal > balance) {
				return "Вы не можете позволить себе это купить."
			} else {
				console.log(`Вы купили на ${nalogPrice.toFixed(2)} BYN с учетом налога`)
				console.log(`Остаток на вашем счете ${newBalance.toFixed(2)}`)
			}
		} else {
			return `Итого вышло ${nalogPrice.toFixed(2)} BYN с учетом налога`
		}
	}
}

alert(price())