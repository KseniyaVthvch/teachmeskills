/// Task 1

const n = +prompt("Введите число")
function getSum(n) {
	if (typeof n === "number" && n >= 0) {
		let result = 0
		for (let i = 0; i <= n; i++) {
			result = result + i
		}
		return result
	} else { return "не число" }
}
const sum = getSum(n)
console.log(sum)

/// Task 2

const credit = +prompt("Введите сумму кредита")
function getCredit(credit) {
	if (typeof credit === "number" && credit >= 0) {
		return (credit + (credit * 0.17 * 5))
	} else { return "не число" }
}
const creditTotal = getCredit(credit)
console.log("Итоговая сумма выплат по кредиту на 5 лет: ", creditTotal)

/// Task 3

const longString = prompt("Введите текст")
const trimStart = prompt("Введите значение начала обрезки(включительно)", "5")
const trimEnd = prompt("Введите значение конца обрезки(не включительно)", "10")

function trimString(longString, trimStart, trimEnd) {
	const trim = longString.slice(trimStart, trimEnd);
	return trim
}
const resultTask3 = trimString(longString, trimStart, trimEnd)
console.log(resultTask3)

/// Task 4

const a = +prompt("Введите число а")
const b = +prompt("Введите число b")

function getSum2(a, b) {
	if (a === b) {
		return a
	} else if (a < b) {
		let result = 0
		for (let i = a; i <= b; i++) {
			result = result + i
		}
		return result
	}
	else {
		let result = 0
		for (let i = b; i <= a; i++) {
			result = result + i
		}
		return result
	}
}
const sum2 = getSum2(a, b)
console.log(sum2)

/// Task 5

function foo() {
	console.log("foo")
}
function boo() {
	console.log("boo")
}
function fooboo(bool, f1, f2) {
	if (bool === true) {
		f1()
	} else {
		f2()
	}
}

fooboo(false, foo, boo)
fooboo(true, foo, boo)

/// Advanced level

/// Task 1

function getNum(a, b, c) {
	if (a + b > c && a + c > b && b + c > a) {
		console.log("True")
	} else {
		console.log("False")
	}
}
const triangle = getNum(3, 4, 5)
console.log(triangle)

/// Task 2

function breakCount(n, m) {
	if (n < 1 || m < 1) {
		return 0
	} else {
		const result = n * m - 1
		return result
	}
}
console.log(breakCount(3, 3))






