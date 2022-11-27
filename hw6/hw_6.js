/// Task 1

const colors = ['red', 'green', 'blue']
console.log(colors.length)

/// Task 2

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1]);

/// Task 3

/// Вариант 1
const numbers = [5, 43, 63, 23, 90]
for (let a = numbers.length; a > 0; a--) {
	numbers.pop()
}
console.log(numbers)

///Вариант 2

const numbers2 = [5, 43, 63, 23, 90]
numbers2.splice(0, numbers2.length)
console.log(numbers2)

/// Task 4

const students = ['Polina', 'Dasha', 'Masha']

students.splice(students.length - 1, 1, "Borya")
students.splice(0, 1, "Andrey")
console.log(students)

/// Task 5

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
	console.log(cats[i])
}

for (let arg of cats) {
	console.log(arg)
}

/// Task 6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const newNumbers = evenNumbers.concat(oddNumbers)
console.log(newNumbers)
console.log(newNumbers.indexOf(8))

/// Task 7

const binary = [0, 0, 0, 0]
const str1 = binary.join("1")
console.log(str1)

/// Advanced

/// Task1

function checkWord(word) {
	if (word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) {
		return `${word} палиндром`
	} else {
		return `${word} не палиндром`;
	}
}

console.log(checkWord("потоп"));
console.log(checkWord("слово"));



/// Task 2

const matrix = [
	[12, 98, 78, 65, 23],
	[54, 76, 98, 43, 65],
	[13, 324, 65, 312],
	[9092, 22, 45, 90000],
]
let average = 0
for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix[i].length; j++) {
		average = average + matrix[i][j]
	}
}
let numElem = 0
for (let i = 0; i < matrix.length; i++) {
	numElem = numElem + matrix[i].length
}
console.log(average / numElem)


/// Task 3

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
const plusNumbers = []
const minusNumbers = []

for (let i = 0; i < mixedNumbers.length; i++) {
	if (mixedNumbers[i] >= 0) {
		plusNumbers.push(mixedNumbers[i])
	} else {
		minusNumbers.push(mixedNumbers[i])
	}
}
console.log(plusNumbers)
console.log(minusNumbers)



