//1

const colors = ['red', 'green', 'blue']
console.log(colors.length)

//2

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1])

//3

const numbers = [5, 43, 63, 23, 90]
numbers.splice(0, 5)
console.log(numbers)

//4

const students = ['Polina', 'Dasha', 'Masha']
students.splice(2, 1, `Borya`)
students.splice(0, 1, `Andrey`)
console.log(students)

//5

const cats = ['Gachito', 'Tom', 'Batman']
for (let i = 0; i <= cats.length - 1; i++) {
   console.log(cats[i])
}

for (const name of cats) {
   console.log(name)
}

//6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const evenNumbersOddNumbers = evenNumbers.concat(oddNumbers)
console.log(evenNumbersOddNumbers)

const result = evenNumbersOddNumbers.indexOf(8, 0)
console.log(result)

//7

const binary = [0, 0, 0, 0]
const binary1 = [1, 1, 1, 1]

function merge(binary, binary1) {
   for (let i = 0; binary.length;)
      binary1.splice(i++ * 2, 0, binary.shift())
   return binary1
}
console.log(merge(binary, binary1))

//ADVANCED level
//1

const matrix = [
   [12, 98, 78, 65, 23],
   [54, 76, 98, 43, 65],
   [13, 324, 65, 312],
   [9092, 22, 45, 90000],
]
function getAverage(numbers) {
   let sum = 0
   for (let i = 0; i < matrix.length; i += 1) {
      sum = sum + matrix[i]
   }
   for (let j = 0; j < matrix.length; j++) {
      sum = sum + matrix[j]
   }
   return sum / matrix.length
}
console.log(getAverage(matrix))