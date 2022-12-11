// // Task 1
// const colors = ['red', 'green', 'blue']
// console.log(colors.length)

// // Task 2
//  const animals = ['monkey', 'dog', 'cat']
// console.log(animals[animals.length -1])

// // Task 3
// const numbers = [5, 43, 63, 23, 90]
// let result = numbers.reduce((sum, current) => sum + current, 0);
// console.log(result)
// let newNumbers = numbers.splice(0,5)
// console.log(numbers)

// // Task 4
// const students = ['Polina', 'Dasha', 'Masha']
// students.splice(0,1,'Andrey')
// students.splice(2,1,'Borya')
// console.log(students)

// // // Task 5
// const cats = ['Gachito', 'Tom', 'Batman']
// // вариант с for in
// for (let prop in cats){
//    console.log("cat:" + prop + " = " + cats[prop]);
// } 
// // вариант с for of 
// for (let value of cats){
//    console.log(value);
// }

// // Task 6
// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]
// const newNumbers = evenNumbers.concat(oddNumbers)
// console.log(newNumbers)
// console.log(newNumbers.indexOf(8))

// // Task 7
// const binary = [0, 0, 0, 0]
// console.log(binary.join(1))

// ADVANCED level

// // Task 1
// let word = prompt("wright word")
// let reverseWord = word.split("").reverse().join("")
// console.log(reverseWord)
// if (word === reverseWord) console.log("палиндромом")
// else console.log("try again")

// // Task 2
// const matrix = [
//    [12, 98, 78, 65, 23],
//    [54, 76, 98, 43, 65],
//    [13, 324, 65, 312],
//    [9092, 22, 45, 90000],
// ]
// newMatrix = matrix.flat()
// console.log(newMatrix)
// const resultMatrix = newMatrix.reduce((sum, current)=> sum + current, 0) / newMatrix.length
// console.log(resultMatrix)

// // Task 3
// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

// const plusNumbers = []
// const minusNumbers = []

// for (let i = 0; i < mixedNumbers.length; i++) {
//     if (mixedNumbers[i] >= 0) {
//         plusNumbers.push(mixedNumbers[i])
//     } else {
//             minusNumbers.push(mixedNumbers[i])
//         }
//     }
// console.log(plusNumbers)
// console.log(minusNumbers)