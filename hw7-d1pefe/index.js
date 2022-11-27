// Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function showNumber(arr) {
	arr.forEach(item => console.log(item))
}

showNumber(fibonacci)

// Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

function getStr(arr) {
	return arr.map((item, id) => `member ${id + 1}: ${item}`)
}

console.log(getStr(users))

// Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21]

function getPosNum(arr) {
	return arr.filter(item => item >= 0)
}

console.log(getPosNum(numbers))

// Task 4
const fibonacciSec = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function calcSum(arr) {
	return arr.reduce((sum, current) => sum + current)
}

console.log(calcSum(fibonacciSec))

// Task 5
const numbersSec = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

function findNum(arr) {
	return arr.find(item => item % 2 === 0)
}

console.log(findNum(numbersSec))