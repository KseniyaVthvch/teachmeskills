// Task 1 💻

const colors = ['red', 'green', 'blue']
console.log(colors.length)

// Task 2🖥

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length -1])

// Task 3🖥

const numbers = [5, 43, 63, 23, 90]

numbers.splice(0,numbers.length)
console.log(numbers)

// Task 4🖥

const students = ['Polina', 'Dasha', 'Masha']

students.pop()
students.push(`Borya`)

students.shift()
students.unshift(`Andrey`)

console.log(students)

// Task 5🖥
// Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.
const cats = ['Gachito', 'Tom', 'Batman']

for(let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}

for(let i of cats) {
    console.log(i)
}

// Task 6🖥

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const newArr = evenNumbers.concat(oddNumbers).indexOf(8)
console.log(newArr)

// Task 7 🖥

const binary = [0, 0, 0, 0]
const arr = binary.join(`1`)
console.log(arr)

// ADVANCED level

// Task 2 👨‍🏫

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function myFn(mtx) {
    let a = 0
    let b =0
    for(let i = 0; i < mtx.length; i++) {
        a += mtx[i].length
        for(let j = 0; j < mtx[i].length; j++) {
            b += mtx[i][j]
        }
    }
    return a/b
}

console.log(myFn(matrix)) 

// Task 3 👨‍🏫

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const plusNumbers = []
const minusNumber = []

for(let i = 0; i <mixedNumbers.length; i++) {
    if(mixedNumbers[i] >= 0) {
        plusNumbers.push(mixedNumbers[i])
    }else{
        minusNumber.push(mixedNumbers[i])
    }
}
console.log(plusNumbers,minusNumber)


