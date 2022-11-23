//Task 1 🖥
const colors = ['red', 'green', 'blue'];
console.log(colors.length);


//Task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);


//Task 3
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);
console.log(numbers);

//second solution
numbers.length = 0;
console.log(numbers);


//Task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(students.length - 1, 1, "Borya");
students.splice(0, 1, "Andrey");
console.log(students);


//Task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

for (let key in cats) {
  console.log(cats[key]);
}


//Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
evenNumbers.push(...oddNumbers);
console.log(evenNumbers.indexOf(8));


//Task 7
const binary = [0, 0, 0, 0];
const newBinary = binary.join("1");
console.log(newBinary);
