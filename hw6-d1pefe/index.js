// Task 1
const colors = ['red', 'green', 'blue']

console.log(colors.length)

// Task 2
const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1])

// Task 3

// fir
const numbersFir = [5, 43, 63, 23, 90]
numbersFir.splice(0,numbersFir.length)

console.log(numbersFir)

// sec
const numbersSec = [5, 43, 63, 23, 90]

for (let i = numbersSec.length; i > 0; i--) {
    numbersSec.pop()
}

console.log(numbersSec)

// Task 4
const students = ['Polina', 'Dasha', 'Masha']

students.splice(students.length - 1, 1, 'Borya')
students.splice(0, 1, 'Andrey')

console.log(students)

// Task 5
const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}

for (let s of cats) {
    console.log(s)
}

//Task 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const numbers = evenNumbers.concat(oddNumbers)
console.log(numbers)

const numberIndex = numbers.indexOf(8)
console.log(numberIndex)

// Task 7
const binary = [0, 0, 0, 0]
const binaryWith1 = binary.join('1')

console.log(binaryWith1)