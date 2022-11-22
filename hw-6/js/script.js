// TASK 1
const colors = ['red', 'green', 'blue']
console.log(colors.length)

//TASK 2
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1])

//TASK 3
const numbers = [5, 43, 63, 23, 90]
const delNumb = numbers.splice(0, 5,)
console.log(numbers)

// Способ 2
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
console.log(numbers)

//TASK 4
const students = ['Polina', 'Dasha', 'Masha']
students.splice(2, 1, "Borya")
students.splice(0, 1, "Andrey")
console.log(students)

//TASK 5
const cats = ['Gachito', 'Tom', 'Batman']
for (let i of cats) {
   console.log(i)
}
for (let i = 0; i < cats.length; i++) {
   console.log(cats[i])
}

//TASK 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const allNumbers = evenNumbers.concat(oddNumbers)
console.log(allNumbers)
const index = allNumbers.indexOf(8)
console.log(index)

//TASK 7
const binary = [0, 0, 0, 0]
const newBinary = binary.join('1')
console.log(newBinary)

//ADVANCED level

//TASK 1
const palindrom = ["дед", ",бабка", "конь", "как"]

function getPal(p) {
   for (let i = 0; i < p.length; i++) {
      if (p[i] === p[i].split('').reverse().join('')) {
         console.log("Слово палиндром")
      } else {
         console.log("Слово не палидром")
      }
   }
}
getPal(palindrom)


// TASK 2
const matrix = [
   [12, 98, 78, 65, 23],
   [54, 76, 98, 43, 65],
   [13, 324, 65, 312],
   [9092, 22, 45, 90000],
]

function getArr(c) {
   let res = 0;
   let count = 0;
   let res1;
   for (let i = 0; i < c.length; i++) {
      count += c[i].length
      for (let j = 0; j < c[i].length; j++) {
         res += c[i][j]
         res1 = res / count
      }
   }
   return res1
}
console.log(getArr(matrix))




// TASK 3
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
const mixedPl = []
for (let i = 0; i < mixedNumbers.length; i++) {
   if (mixedNumbers[i] >= 0) {
      mixedPl.push(mixedNumbers[i])
   }
}
console.log(mixedPl)

const mixedNeg = []
for (let j = 0; j < mixedNumbers.length; j++) {
   if (mixedNumbers[j] < 0) {
      mixedNeg.push(mixedNumbers[j])
   }
}
console.log(mixedNeg)

