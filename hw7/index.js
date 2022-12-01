// Task 1 🖥

// Выведи все элементы массива в консоль с помощью метода **`forEach`**

   const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

fibonacci.forEach((items, index, array) => console.log(items));

//  Task 2 🖥

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

//  ['member 1: Darya', 'member 2: Masha', ... etc]

   const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

   const newArray = users.map((item, index, array) =>(`member ${index + 1}: ${item}`))

   console.log(newArray)

//  Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

   const numbers1 = [7, -4, 32, -90, 54, 32, -21]

   const newfilter = numbers1.filter(items => items > 0)

   console.log(newfilter);

//  Task 4 🖥

// Используя метод **`reduce`** получите сумму всех чисел массива.

   const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

   const getSum = fibonacci1.reduce((acc, item, index, array) => acc + item, 0)

   console.log(getSum);

//  Task 5 🖥

// Используя метод **`find`** найдите в массиве первое четное число.

   const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

   const getEvenNum = numbers.find(item => item%2 === 0)

   console.log(getEvenNum);

//  ADVANCED level

//  Task 1 👨‍🏫

// Написать функцию конструктор **Student**
// В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.

// rate имеет 4 категории A B C D
// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит

function Student(salary, rate, name) {
   this.salary = salary,
   this.rate = rate,
   this.name = name,

   this.getCredit = function() {
      let credit = 0
      switch(rate) {
         case 'A':
            console.log(`Kредит ${name}: ${credit = salary * 12}`);
            break;
         case 'B':
            console.log(`Kредит ${name}: ${credit = salary * 9}`);
            break;
         case 'C':
            console.log(`Kредит ${name}: ${credit = salary * 6}`);
            break;
         case 'D':
            console.log(`Мы не можем дать кредит ${name}`);
      }
      return credit
   }
}

// На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.

const stud1 = new Student(5000, 'A', 'Даниил');
const stud2 = new Student(4000, 'B', 'Павел');
const stud3 = new Student(3000, 'C', 'Александра');
const stud4 = new Student(2000, 'D', 'Полина');
const stud5 = new Student(4500, 'A', 'Вероника');

// Создать массив **students** и поместить в него студентов.

const students = [stud1, stud2, stud3, stud4, stud5]

// Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

const getCreditStud = array => {
   const newArray = array.map(item => item.getCredit())
   const result = newArray.reduce((acc, item) => acc + item, 0)

   return `Общая сумма кредитов, которую можно выдать группе: ${result}`
}

console.log(getCreditStud(students));

//!  Task 2 

// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// Примечание: для этой задачи **`y`** не считается гласной.


//!  Task 3 👨‍🏫 Нет истории, нет теории

// В приведенных ниже примерах показано, как написать функцию:

   //  accum("abcd") -> "A-Bb-Ccc-Dddd"
   //  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
   //  accum("cwAt") -> "C-Ww-Aaa-Tttt"

// Параметр - это строка, которая включает только буквы от a..z и A..Z.



//  Task 4 👨‍🏫 Самый высокий и самый низкий

// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

// Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.

const highAndLow = str => {
   const newArr = str.split(" ")
   const max = Math.max.apply(null, newArr)
   const min = Math.min.apply(null, newArr)
   const result = `${max} ${min}`
   return result
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"