// Task 1
const colors = ['red', 'green', 'blue']

console.log(colors.length)

// Task 2
const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1])

// Task 3
// 1 способ
const numbers1 = [5, 43, 63, 23, 90]
numbers1.splice(0,numbers1.length)

console.log(numbers1)

// 2 способ
const numbers2 = [5, 43, 63, 23, 90]

for (let i = numbers2.length; i > 0; i--) {
    numbers2.pop()
}

console.log(numbers2)

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

for (let item of cats) {
    console.log(item)
}

//Task 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const numbers = evenNumbers.concat(oddNumbers)
const numberIndex = numbers.indexOf(8)

console.log(numbers)
console.log(numberIndex)

// Task 7
const binary = [0, 0, 0, 0]
const str = binary.join('1')

console.log(str)

// ADVANCED level
// Task 1
const palindrom = ["топот", "привет", "как", "андрей", "шалаш", "доход"]
let checkTrue

for (let i = 0; i < palindrom.length; i++) {
    for (let j = 0; j < Math.trunc(palindrom[i].length / 2); j++) {
        if (palindrom[i][j] === palindrom[i][palindrom[i].length - 1 - j]) {
            checkTrue = true
        } else {
            checkTrue = false
            break
        }
    }
    if (checkTrue === true) {
        console.log(`${palindrom[i]} - палиндром`)
    } else {
        console.log(`${palindrom[i]} - не палиндром`)
    }
}

// Task 2
const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
let avarage = 0
let counter = 0

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        avarage += matrix[i][j]
        counter += 1
    }
}

let res = avarage / counter

console.log(res)

// Task 3
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
const positiveNumbers = []
const negativeNumbers = []

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0) {
        positiveNumbers.push(mixedNumbers[i])
    } else {
        negativeNumbers.push(mixedNumbers[i])
    }
}

console.log(positiveNumbers)
console.log(negativeNumbers)

// Task 4
const randomArr = []
const newArr = []

for (let i = 0; i < 4 + Math.ceil(Math.random() * 10); i++) {
    randomArr.push(Math.trunc(Math.random() * 100))
}
console.log(randomArr)

for (let i = 0; i < randomArr.length; i++) {
    newArr.push(randomArr[i] ** 3)
}
console.log(newArr)