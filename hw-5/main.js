//Task 1
const book1 = {
  title: 'Harry Potter - The Cursed Child',
  author: 'J. K. Rowling',
  publicationDate: '31 July 2016',
}

const book2 = {
  title: 'Nineteen Eighty-Four',
  author: 'George Orwell',
  publicationDate: '8 June 1949',
}

delete book1.publicationDate;
delete book2.author;



//Task 2
const user = {
  age: 30,
  userName: 'John',
}

console.log("userName" in user);



//Task 3
const student = {
  name: 'John',
  age: 19,
  isHappy: true,
}

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

//Task 4
const colors = {
  'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
  },
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);


//Task 5
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey: 664,
  alexandra: 199,
}

let sumSalary = 0;
let i = 1;

for (let key in salaries) {
  sumSalary = sumSalary + salaries[key];
  i++
}

const salary = sumSalary / i;

console.log(salary);


//Task 6
const userInfo = {};
const userName = prompt('Enter your name');
const userPassword = prompt('Enter your password');
userInfo.name = userName;
userInfo.password = userPassword;

result = confirm(`Your name is "${userName}" and password is "${userPassword}"`);

if (result) {
  console.log('Добро пожаловать');
}


//Advanced level
//Task1
let student1 = {
  name: 'Polina',
  age: 27,
}

let student2 = {
  name: 'Polina',
  age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2));