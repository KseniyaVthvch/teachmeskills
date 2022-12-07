//Task 1
const colors = ['red', 'green', 'blue']
console.log(colors.length)

//Task 2
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length-1])

//Task 3 получилось только одним
const numbers = [5, 43, 63, 23, 90]
numbers.splice(0,5)
console.log(numbers)

//Task 4
const students = ['Polina', 'Dasha', 'Masha']
students.splice(2,1,`Borya`)
console.log(students)
students.splice(0,1,`Andrey`)
console.log(students)

//Task 5
const cats = ['Gachito', 'Tom', 'Batman']
for (let i = 0; i <= cats.length - 1; i++) {
	console.log(cats[i]);
}
for (const name of cats) {
    console.log(name);
  }

//Task 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const evenNumbersAndOddNumbers = evenNumbers.concat(oddNumbers);
console.log(evenNumbersAndOddNumbers)
const resultIndex=evenNumbersAndOddNumbers.indexOf(8,0);
console.log(resultIndex)

//Task 7
const binary = [0, 0, 0, 0]
const binary2 = [1, 1, 1, 1]

function merge(binary, binary2) {
    for (let i = 0; binary.length;)
    binary2.splice(i++ * 2, 0, binary.shift());
    return binary2;
  }
  console.log(merge(binary, binary2));

  //ADVANCED level
  //Task 1
  //? не понятно с чего нужно начать

   //Task 2 (попыталась,но выходит Nan)
   const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
] 
function getAverage (numbers) {
    let sum = 0; 
    for (let i = 0; i < matrix.length; i += 1) { 
      sum =sum+ matrix[i];  
    }
    for (let j=0; j<matrix.length;j++){
        sum =sum+ matrix[j]; 
    }
    return sum / matrix.length;
  };
  
  console.log(getAverage(matrix))

  //Task 3
  const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
let result = mixedNumbers.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result)
let result2 = mixedNumbers.filter(function(elem) {
	if (elem < 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result2)

//Task 4 ???