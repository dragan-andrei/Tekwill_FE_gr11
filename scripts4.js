const fruits = [];
fruits.push("apple", "banana", "orange");

console.log("Length of the fruits array:", fruits.length);
console.log("Content of the fruits array:", fruits);

const numbers1 = [1, 2, 3, 4, 5];
console.log("Original numbers array:", numbers1);
numbers1.pop();
console.log("Array after pop():", numbers1);
numbers1.shift();
console.log("Array after shift():", numbers1);

const colors = ["red", "green", "blue", "yellow"];
console.log("Index of 'green' element:", colors.indexOf("green"));
console.log("Does the array contain 'orange' element:", colors.includes("orange"));

const names = ["John", "Jane", "Mike", "Jennifer"];
names.unshift("David");
console.log("Array after unshift():", names);
console.log("Index of 'Mike' element:", names.indexOf("Mike"));

const numbers2 = [2, 4, 6, 8, 10];
console.log("Does the array contain 5:", numbers2.includes(5));
numbers2.push(12);
console.log("Array after push():", numbers2);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("All months of year: ", months);
const month2 = months.slice();
console.log("Months in alphabetical order:", month2.sort());

const filteredMonths = month2.filter(month => month.length > 3);
console.log("Months with more than 3 letters:", filteredMonths);

const slicedMonths = months.slice(6, 11);
console.log("Months from July to November:", slicedMonths);

const monthsString = months.filter(month => month.length >= 5).join("-");
console.log("String of months:", monthsString);