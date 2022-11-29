//TASK1

const colors = ['red', 'green', 'blue']

console.log(colors.length)

//TASK2

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length -1])

//TASK3

const numbers = [5, 43, 63, 23, 90]

numbers.splice(0, numbers.length)

console.log(numbers)

//TASK4

const students = ['Polina', 'Dasha', 'Masha']

students.pop()
students.push("Borya")
students.shift()
students.unshift("Andrey")

console.log(students)


const students1 = ['Polina', 'Dasha', 'Masha']

students1.splice(0 , 1 , "Andrey")
students1.splice( -1 , 1 , "Borya")


console.log(students1)

//TASK5

const cats = ['Gachito', 'Tom', 'Batman']

for(let i = 0 ; i < cats.length; i++ ) {
    console.log(cats[i])
}

for(let cat of cats) {
    console.log(cat)
}

//TASK6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const newNumbers = evenNumbers.concat(oddNumbers)

console.log(newNumbers)
console.log(newNumbers.indexOf(8))

//TASK7

const binary = [0, 0, 0, 0]

const newBinary = binary.join("1")

console.log(newBinary)


//TASK2
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function getArr(c) {
    let b = 0;
    let a = 0;
    for (let i = 0; i < c.length; i++) {
       a += c[i].length
       for (let j = 0; j < c[i].length; j++) {
          b += c[i][j]
       }
    }
    return b / a
 }
 console.log(getArr(matrix))


 //TASK3

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