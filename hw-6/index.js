// #### Task 1 🖥
// Дан массив. Выведите в консоль его длину.

const colors = ['red', 'green', 'blue']
console.log(colors.length)

// #### Task 2 🖥
// Дан массив. Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat']
console.log(animals.reverse()[0])

// #### Task 3 🖥

// Дан массив. Удалите все элементы в массиве и выведите в консоль полученный результат. Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90]
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// console.log(numbers)

numbers.shift()
numbers.shift()
numbers.shift()
numbers.shift()
numbers.shift()
console.log(numbers)

// #### Task 4 🖥

// Дан массив:
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha']
students.pop()
students.push(`Borya`)
students.shift()
students.unshift(`Andrey`)
console.log(students)

// #### Task 5 🖥

// Дан массив. Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**

const cats = ['Gachito', 'Tom', 'Batman']
for (let i = 0; i < cats.length; i++) {
   console.log(cats[i])
}
for (let cat of cats) {
   console.log(cat)
}
// #### Task 6 🖥

// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа **`8`**
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const numbers2 = evenNumbers.concat(oddNumbers)
console.log(numbers2.indexOf(8))

// #### Task 7 🖥

// Дан массив. Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку. [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0]
console.log(binary.join(1))

// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**
// #### Task 1 👨‍🏫
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function checkWord(array) {
   let checkArr
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < Math.trunc(array[i].length / 2); j++) {
         if (array[i][j] === array[i][array[i].length - 1 - j]) {
            console.log(`слово ${array[i]} - это палиндром`)
         } else {
            console.log(`слово ${array[i]} не палиндром`)
            break
         }
      }
   }
}
checkWord(['polina', 'potop', 'dohod', 'hello', '12321'])

// #### Task 2 👨‍🏫
// Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
   [12, 98, 78, 65, 23],
   [54, 76, 98, 43, 65],
   [13, 324, 65, 312],
   [9092, 22, 45, 90000],
]
let avarMatrix = 0
for (let i = 0; i < matrix.length; i++) {
   for (let j = 0; j < matrix[i].length; j++) {
      avarMatrix = avarMatrix + matrix[i][j]
   }
}
let numMatrix = 0
for (let i = 0; i < matrix.length; i++) {
   numMatrix = numMatrix + matrix[i].length
}
let result = avarMatrix / numMatrix
console.log(result)

// #### Task 3 👨‍🏫

// Дан массив. Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. 
// Оба массива затем выведите в консоль.

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

// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел.
//Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив.
// В конце вывести оба массива в консоль.

const a = Math.round(Math.random() * 100)
const b = Math.round(Math.random() * 100)
const c = Math.round(Math.random() * 100)
const d = Math.round(Math.random() * 100)
const f = Math.round(Math.random() * 100)
const mRandom = [a, b, c, d, f]
console.log(mRandom)
let newMRandom = []
for (let i = 0; i < mRandom.length; i++) {
   newMRandom.push(mRandom[i] ** 3)
}
console.log(newMRandom)
