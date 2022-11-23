//Task 1
//Выведи все элементы массива в консоль с помощью метода forEach
//Реализуйте решение двумя способами, используя function declaration & arrow function

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
console.log(fibonacci);

fibonacci.forEach((item) => {
  console.log(item)
})
//second solution
function getArrayItem(item) {
  console.log(item);
}
fibonacci.forEach(getArrayItem);



//Task 2
//Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:
//['member 1: Darya', 'member 2: Masha', ...etc]
//Реализуйте решение двумя способами, используя function declaration & arrow function.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const newUsers = users.map(function (user, i) {
  return `member ${i + 1}: ${user}`
})
console.log(newUsers);
//second solution
const getUserInfo = users.map((user, i) => {
  return `member ${i + 1}: ${user}`
})
console.log(getUserInfo);

// const newUsers = [];
// for (let i = 0; i < users.length; i++) {
//   newUsers.push(`member ${i + 1} ${users[i]}`);
// }
// console.log(newUsers);



//Task 3
// С помощью метода ** `filter` ** создайте новый массив в котором не будет отрицательных чисел.
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// Реализуйте решение двумя способами, используя`function declaration` & `arrow function`.
const numbers = [7, -4, 32, -90, 54, 32, -21];
function positiveNumber(numbers) {
  if (numbers >= 0) {
    return true;
  }
  return false;
}
console.log(numbers.filter(positiveNumber));
//second solution
const PositiveNumbers = numbers.filter((numbers) => {
  if (numbers >= 0) {
    return true;
  }
  return false;
})
console.log(PositiveNumbers);



//Task 4
// Используя метод ** `reduce` ** получите сумму всех чисел массива.
//    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
//   > Реализуйте решение двумя способами, используя`function declaration` & `arrow function`.

const fibonaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const fibSum = fibonaci.reduce(function (currentSum, currentNumber) {
  return currentSum + currentNumber
}, 0)
//second solution
const fibonacciSec = fibonaci.reduce((currentSum, currentNumber) => {
  return currentSum + currentNumber
}, 0)
console.log(fibonacciSec);



//Task 5
// Используя метод ** `find` ** найдите в массиве первое четное число.
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
//   > Реализуйте решение двумя способами, используя`function declaration` & `arrow function`.
const numbersSec = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const isNumber = numbersSec.find(function (number) {
  return number % 2 === 0;
})
//second solution
const isNumberSec = numbersSec.find((number) => {
  return number % 2 === 0;
})
console.log(isNumberSec)