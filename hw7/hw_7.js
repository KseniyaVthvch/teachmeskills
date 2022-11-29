/// Task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//1

function getNumbers1(item) {
	console.log(item);
}
fibonacci.forEach(getNumbers1)

//2

fibonacci.forEach(getItem => console.log(getItem))


/// Task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// 1

const newUsers = users.map((user, ind) => `member ${ind + 1}` + ": " + `${user}`)
console.log(newUsers)

// 2
function newUsers2(user, ind) {
	return `member ${ind + 1}` + ": " + `${user}`
}
console.log(users.map(newUsers2));

/// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21]
const posNum = numbers.filter(num => num >= 0)
console.log(posNum);

function getNum(num) {
	return num >= 0
}
console.log(numbers.filter(getNum))

/// Task 4

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

const getSum1 = fibonacci2.reduce((acc, cur) => sum4 = acc + cur, 0)
console.log(getSum1)

function calcSum(acc, cur) {
	return acc + cur
}
console.log(fibonacci2.reduce(calcSum))


/// Task 5

const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const getEven = numbers5.find(x => x % 2 === 0)
console.log(getEven)

function getEvenFunc(x) {
	return x % 2 === 0
}
console.log(numbers5.find(getEvenFunc))

/// Advanced
/// Task 1

function Student(salary, rate, name) {
	this.salary = salary
	this.rate = rate
	this.name = name
	this.checkRate = function () {
		let credit = 0
		if (this.rate == "A") {
			return credit = this.salary * 12
		} else if (this.rate == "B") {
			return credit = this.salary * 9
		} else if (this.rate == "C") {
			return credit = this.salary * 6
		} else if (this.rate == "D") {
			return credit = 0
		}
	}
}
const stud1 = new Student(1000, 'A', 'Darya');
const stud2 = new Student(1000, 'B', 'Masha');
const stud3 = new Student(1000, 'C', 'Denis');
const stud4 = new Student(1000, 'D', 'Vitaliy');
const stud5 = new Student(1000, 'A', 'Polina');

const students = [stud1, stud2, stud3, stud4, stud5]

console.log(students.reduce((acc, item) => {
	acc = item.checkRate() + acc
	return acc
}, 0))


/// Task 4

const str1 = "1 2 3 4 5";
const arr1 = str1.split(' ');
function highAndLowF() {
	return (` ${Math.max(...arr1)}  ${Math.min(...arr1)}`)
}
console.log(highAndLowF(str1))







