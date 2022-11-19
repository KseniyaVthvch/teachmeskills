// Task 1

const obj = {
   name: "Dmitry",
   age: 17,
}

console.log(obj);

delete obj.name
delete obj.age

console.log(obj);

// Task 2

const secObj = {
   name2 : "Georg",
   age2 : 20,
}

if ("name2" in secObj) {
   console.log(true);
} else {
   console.log("try again");
}

// Task 3 

 const student = {
   name: 'John',
   age: 19,
   isHappy: true,
}

for (const key in student) {
   console.log(key);
}

for (const key in student) {
   console.log(student[key]);
}

// Task 4 

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};


console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// Task 5 

let salaries = {
   andrey: 500, 
   sveta: 413,
   anton: 987,
   andrey: 664,
   alexandra: 199
}

let sum = 0
for (let k in salaries) {
   sum = sum + salaries[k]
}

const res = sum/5

console.log(res);

//! Task 6 

// либо не понял задания, либо не знаю как сделать

// ADVANCED level

// Task 1 

let student1 = {
   name: 'Polina',
   age: 27,
}

let student2 = {
   name: 'Polina',
   age: 27,
}

console.log(student1 === student2);

// Task 2 

const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}


function funAnimals(a) {
   if(a === undefined){
      console.log(`ОШИБКА!`)
   } else {
      animals.bird.name
   }
}

funAnimals(animals.bird?.name)