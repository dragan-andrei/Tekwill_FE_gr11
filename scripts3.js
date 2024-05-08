let number = 7;
console.log(number % 2 === 0 ? "Number is even" : "Number is odd");

let isLoggedIn = true;
console.log(isLoggedIn ? "User is authenticated" : "User is not authenticated");

let pricePerUnit = 10;
let quantity = 5;
let isAvailable = true;
let totalPrice = isAvailable ? pricePerUnit * quantity : "Product is not available";
console.log(`Total price of the product: ${totalPrice}`);

let currentYear = new Date().getFullYear();
let isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0;
console.log(isLeapYear ? `${currentYear} is a leap year` : `${currentYear} is not a leap year`);

let countryCode = "MD";
let countryName;

switch (countryCode) {
    case "MD":
        countryName = "Moldova";
        break;
    case "US":
        countryName = "United States";
        break;
    case "GB":
        countryName = "United Kingdom";
        break;
    case "FR":
        countryName = "France";
        break;
    case "JP":
        countryName = "Japan";
        break;
    default:
        countryName = "Unknown";
}

console.log(`Country code ${countryCode} corresponds to ${countryName}`);

let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`For score ${score}, grade is ${grade}`);

function TellFortune(N, Z, Y, X) {
    console.log(`You will be ${X} in ${Y}, and will get married to ${Z} with ${N} kids`);
}

TellFortune(2, "Anna", "Paris", "CEO");
TellFortune(3, "John", "New York", "Software Engineer");
TellFortune(1, "Maria", "London", "Doctor");

function CalculatedDogAge(humanYears, conversionRate = 7) {
    let dogYears = humanYears * conversionRate;
    console.log(`Your dog is ${dogYears} years old in dog years!`);
}

CalculatedDogAge(3);
CalculatedDogAge(5, 6);
CalculatedDogAge(2, 8);

let CalculationSupply = (currentAge, foodPerDay, maxAge = 100) => {
    let totalFoodNeeded = (maxAge - currentAge) * 365 * foodPerDay;
    console.log(`You will need ${totalFoodNeeded} kg of food to last until the ripe age of ${maxAge} years`);
};

CalculationSupply(30, 0.5);
CalculationSupply(25, 1.5, 90);
CalculationSupply(40, 2, 80);
