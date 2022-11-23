// Task 1
const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function showNumber(arr) {
	arr.forEach(item => console.log(item))
}

showNumber(fibonacci1)

// Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

function getStr(arr) {
	return arr.map((item, id) => `member ${id + 1}: ${item}`)
}

console.log(getStr(users))

// Task 3
const numbers1 = [7, -4, 32, -90, 54, 32, -21]

function getPosNum(arr) {
	return arr.filter(item => item >= 0)
}

console.log(getPosNum(numbers1))

// Task 4
const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function calcSum(arr) {
	return arr.reduce((sum, current) => sum + current)
}

console.log(calcSum(fibonacci2))

// Task 5
const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

function findNum(arr) {
	return arr.find(item => item % 2 === 0)
}

console.log(findNum(numbers2))


// ADVANCED level
// Task 1
function Student(salary, rate, name) {
	this.salary = salary;
	this.rate = rate;
	this.name = name;
	
	this.checkRate = function() {
		let credit = 0;
		switch (this.rate) {
			case 'A': 
				credit = this.salary * 12;
				console.log(`${this.name} имеет отличный рейтинг и мы можем дать ему(ей) кредит на ${credit}`);
				break;
			case 'B': 
				credit = this.salary * 9;
				console.log(`${this.name} имеет хороший рейтинг и мы можем дать ему(ей) кредит на ${credit}`);
				break;
			case 'C': 
				credit = this.salary * 6;
				console.log(`${this.name} имеет неплохой рейтинг и мы можем дать ему(ей) кредит на ${credit}`);
				break;
			case 'D': 
				console.log(`${this.name} имеет плохой рейтинг и мы не можем дать ему(ей) кредит`);
				break;
		}
		return credit
	}
}

const student1 = new Student(1500, 'A', 'Иван');
const student2 = new Student(1300, 'B', 'Даниил');
const student3 = new Student(1200, 'C', 'Юлия');
const student4 = new Student(1000, 'D', 'Александра');
const student5 = new Student(1300, 'B', 'Богдан');

const students = [student1, student2, student3, student4, student5];

const studentsArr = arr => {
	const res = arr.map(item => item.checkRate()).reduce((sum, current) => sum + current);
	return `\nОбщая сумма кредитов, которую можно выдать группе составляет: ${res}`;
}

console.log(studentsArr(students));

// Task 2
const getStr2 = str => {
	const vowels = ['A','E','I','O','U','a','e','i','o','u']
	console.log(vowels[0] + 'a')
	let newStr = ''
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i]) === false) {
			newStr += str[i]
		}
	}
	return newStr
}

console.log(getStr2('This website is for losers LOL!'))

//в инете нашел вот такое решение, хотелось бы понять что тут вообще происходит в скобках
let disemvowel = (str) => str.replace(/[aeiouy]/gi, '')

console.log(disemvowel('testaeiouyAEIOUYtest'));

// Task 3
const accum = str => {
	let res = []
	for (let i = 0; i < str.length; i++) {
		let current = []
		for (let j = 0; j < i; j++) {
			current.push(str[i].toLowerCase())
		}
		res.push(str[i].toUpperCase() + current.join(''))
	}
	return res.join('-')
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))

// Task 4
// 1 способ
const highAndLow1 = str => {
	return `${Math.max.apply(null,str.split(' '))} ${Math.min.apply(null,str.split(' '))}`
}

console.log(highAndLow1("1 2 3 4 5"))
console.log(highAndLow1("1 2 -3 4 5"))
console.log(highAndLow1("1 9 3 4 -5"))

// 2 способ
const highAndLow2 = str => {
	const res = str.split(' ').sort((a, b) => b - a)
	return `${res[0]} ${res[res.length - 1]}`
}

console.log(highAndLow2("1 2 3 4 5"))
console.log(highAndLow2("1 2 -3 4 5"))
console.log(highAndLow2("1 9 3 4 -5"))