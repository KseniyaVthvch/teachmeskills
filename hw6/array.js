//  Task 1 🖥

// Дан массив. Выведите в консоль его длину.

const colors = ['red', 'green', 'blue']

console.log(colors.length);

//  Task 2 🖥

// Дан массив. Выведите в консоль его последний элемент вне зависимости от его длинны.

   const animals = ['monkey', 'dog', 'cat']

   console.log(animals[animals.length - 1]);

// Task 3 🖥

// Дан массив. Удалите все элементы в массиве и выведите в консоль полученный результат. Реализуйте решение двумя способами.

   const numbers = [5, 43, 63, 23, 90]
   let numbers2 = [5, 43, 63, 23, 90]
   
   //1

   numbers.splice(0, numbers.length)
   console.log(numbers);

   //! 2



//  Task 4 🖥

// Дан массив.
// Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// Полученный результат не забудьте вывести в консоль.

   const students = ['Polina', 'Dasha', 'Masha']

   //1
   students.pop()
   students.push('Borya')
   students.shift()
   students.unshift('Andrey')

   console.log(students);

   //2
   const students2 = ['Polina', 'Dasha', 'Masha']
   students2.splice(students2.length - 1, 1, 'Borya')
   students2.splice(0, 1, 'Andrey')

   console.log(students2);

// Task 5 🖥

// Дан массив. Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

    const cats = ['Gachito', 'Tom', 'Batman']

    //1
    for (let i = 0; i < cats.length; i++) {
      console.log(cats[i]);
    }

    //2
    for (let arr of cats) {
      console.log(arr);
    }


//  Task 6 🖥
//  Соедините два массива чисел в один.
//  В полученном массиве попробуйте найти индекс числа **`8`**

    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]

    const allNum = evenNumbers.concat(oddNumbers)
    const res = allNum.indexOf(8)
    console.log(res);

// Task 7 🖥

// Дан массив. + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

//  [0, 0, 0, 0] -> '0101010'

  const binary = [0, 0, 0, 0]

  console.log(binary.join(1));

//  ADVANCED level

// Для решения задач используйте циклы **`for`** или **`for of`**

// Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function isPalindrom(word) {
   if (word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) {
      return `${word} is palindrom`
   } else {
     return `${word} isn't palindrom`;
   }
}

console.log(isPalindrom("как"));
console.log(isPalindrom("Потоп"));
console.log(isPalindrom("Привет"));

// Task 2 👨‍🏫
// Выведите в консоль среднее значение чисел в многомерном массиве.

    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]


    function getAverage(arr) {
      let res = 0;
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
         count += arr[i].length
         for (let j = 0; j < arr[i].length; j++) {
            res += arr[i][j]
         }
      }
      return res/count
   }
   console.log(getAverage(matrix))

//Task 3 👨‍🏫

// Дан массив. Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
   const posNum = []
   const negNum = []

   for (let i = 0; i < mixedNumbers.length; i++) {
      if (mixedNumbers[i] >= 0) {
      posNum.push(mixedNumbers[i])
      } else {
      negNum.push(mixedNumbers[i]);
      }
   }

   console.log(posNum);
   console.log(negNum);

//!  Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

