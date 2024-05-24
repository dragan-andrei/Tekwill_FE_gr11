const fruits = ["apple", "banana", "orange"];
console.log("1. Fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("\n2. Sum of numbers:", sum);

const names = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"];
const nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("\n3. Lengths of names:", nameLengths);

const companyDepartments = {
    "HR": ["Alice", "Bob", "Charlie"],
    "Marketing": ["David", "Emily"],
    "Finance": ["Frank", "Grace", "Hannah"],
    "IT": ["Ian", "Julia", "Kevin", "Linda"]
};

console.log("\n4a. Names of all employees:");
let allEmployees = [];
const departmentNames = Object.keys(companyDepartments);
for (let i = 0; i < departmentNames.length; i++) {
    const department = departmentNames[i];
    const employees = companyDepartments[department];
    for (let j = 0; j < employees.length; j++) {
        console.log(department + ": " + employees[j]);
        allEmployees.push(employees[j]);
    }
}

const veryAllEmployees = allEmployees.sort().slice();
console.log("\n4b. Sorted names of all employees:", veryAllEmployees);

function countProperties(obj) {
    const props = Object.keys(obj);
    return props.length;
}

const person = { name: "John",
    surname: "Doe",
    age: 30,
    profession: "developer"
    };

console.log("\n5. Number of properties in 'person':", countProperties(person));

function generateArray(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(i);
    }
    return result;
}

const n = 5;
console.log("\n6. Array of numbers from 0 to", n, ":", generateArray(n));

function findMax(numbers) {
    let theBiggestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > theBiggestNumber) {
            theBiggestNumber = numbers[i];
        }
    }
    return theBiggestNumber;
}

const numbersArray = [5, 8, 2, 10, 3];
console.log("\n7. The biggest number in", numbersArray, ":", findMax(numbersArray));

function calculateAverage(scores) {
    let total = 0;
    let count = 0;
    const subjects = Object.keys(scores);
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        total += scores[subject];
        count++;
    }
    return total / count;
}

const studentScores = { math: 8, literature: 7, history: 9 };
console.log("\n8. Average score:", calculateAverage(studentScores));

function Dog(name, age, color, numberOfPuppies) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.puppies = [];

    for (let i = 1; i <= numberOfPuppies; i++) {
        this.puppies.push("Puppy_" + i);
    }
}

const pesPatron = new Dog("Pes Patron", 5, "brown", 5);
console.log("\nDog with puppies:", pesPatron);

