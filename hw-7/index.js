// NORMAL level
// Task 1 🖥
// Выведи все элементы массива в консоль с помощью метода forEach
// Реализуйте решение двумя способами, используя function declaration & arrow function

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// первый способ

fibonacci.forEach(item => console.log(item))

// второй способ

function showItem(item) {
   console.log(item)
}
fibonacci.forEach(showItem)

// Task 2 🖥
// Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ... etc]
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// первый способ

const newArray = users.map((item, index) => `member ${index + 1}: ${item}`)
console.log(newArray)

// второй способ

function newArray3(item, index) {
   return `member ${index + 1}: ${item}`
}
console.log(users.map(newArray3))

// Task 3 🖥
// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

const numbers = [7, -4, 32, -90, 54, 32, -21]

// первый способ
const res = numbers.filter(item => item > 0)
console.log(res)

// второй способ

function showRes(item) {
   return item > 0
}
console.log(numbers.filter(showRes))

// Task 4 🖥
// Используя метод reduce получите сумму всех чисел массива.
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// первый способ

const result = fibonacci2.reduce((acc, item) => {
   return acc + item
}, 0)
console.log(result)

// второй способ

function getSum(acc, item) {
   return acc + item
}
console.log(fibonacci2.reduce(getSum))

// Task 5 🖥
// Используя метод find найдите в массиве первое четное число.
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// первый способ

const result2 = numbers2.find(item => item % 2 === 0)
console.log(result2)

// второй способ

function showNumber(item) {
   return item % 2 === 0
}
console.log(numbers2.find(showNumber))

// ADVANCED level
// Task 1 👨‍🏫
// Написать функцию конструктор Student. В каждом объекте студента должны быть поля salary , rate , name
// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.
// На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.
// Создать массив students и поместить в него студентов.
// Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.
// rate имеет 4 категории A B C D
// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит

function Student(salary, rate, name) {
   this.salary = salary,
      this.rate = rate,
      this.name = name,
      this.getCredit = function () {
         if (rate === 'A') {
            return credit = 12 * salary
            //    return `отличный рейтинг и мы можем дать ${name} кредит ${credit} USD`;
         } else if (rate === 'B') {
            return credit = 9 * salary
            //    return `хороший рейтинг и мы можем дать ${name} кредит ${credit} USD`;
         } else if (rate === 'C') {
            return credit = 6 * salary
            //    return `неплохой рейтинг и мы можем дать ${name} кредит ${credit} USD`;
         } else if (rate === 'D') {
            return credit = 0
            // return `плохой рейтинг и мы не можем дать ${name} кредит`
         }
      }
}

const student1 = new Student(2000, 'A', 'Dasha')
const student2 = new Student(1800, 'B', 'Dima')
const student3 = new Student(1500, 'C', 'Alexandra')
const student4 = new Student(2000, 'A', 'Olga')
const student5 = new Student(1300, 'D', 'Ivan')
const students = [student1, student2, student3, student4, student5]
console.log(students)
console.log(student1.getCredit())
console.log(student2.getCredit())
console.log(student3.getCredit())
console.log(student4.getCredit())
console.log(student5.getCredit())

const studentsArr = arr => {
   const res = arr.map(item => item.getCredit()).reduce((sum, current) => sum + current);
   return `Общая сумма кредитов, которую можно выдать группе составляет: ${res} USD`;
}
console.log(studentsArr(students));

// общую сумму не получилось посчитать. не понимаю, почему

// Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
// Примечание: для этой задачи y не считается гласной.

const getStr = str => {
   const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
   console.log(vowels[0] + 'a')
   let newStr = ''
   for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i]) === false) {
         newStr += str[i]
      }
   }
   return newStr
}

console.log(getStr('This website is for losers LOL!'))

let vowels2 = (str) => str.replace(/[aeiouy]/gi, '')
console.log(vowels2('This website is for losers LOL!'));

// Task 3 👨‍🏫 Нет истории, нет теории
// В приведенных ниже примерах показано, как написать функцию:
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр - это строка, которая включает только буквы от a..z и A..Z.

const accum = str => {
   let res = []
   for (let i = 0; i < str.length; i++) {
      let current = []
      for (let j = 0; j < i; j++) {
         current.push(str[i].toLowerCase())
      }
      res.push(str[i].toUpperCase() + current.join(''))
   }
   return res.join('-')
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))

// Task 4 👨‍🏫 Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
//     highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"
//     highAndLow("1 9 3 4 -5"); // return "9 -5"
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.
// 1 способ
const highAndLow1 = str => {
   return `${Math.max.apply(null, str.split(' '))} ${Math.min.apply(null, str.split(' '))}`
}

console.log(highAndLow1("1 2 3 4 5"))
console.log(highAndLow1("1 2 -3 4 5"))
console.log(highAndLow1("1 9 3 4 -5"))

// 2 способ
const highAndLow2 = str => {
   const res = str.split(' ').sort((a, b) => b - a)
   return `${res[0]} ${res[res.length - 1]}`
}

console.log(highAndLow2("1 2 3 4 5"))
console.log(highAndLow2("1 2 -3 4 5"))
console.log(highAndLow2("1 9 3 4 -5"))

