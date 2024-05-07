const weightSarah = 65;

const weightBob = 93;

const heightSarah = 1.75;

const heightBob = 1.89;

const sarahBMI = weightSarah / (heightSarah * heightSarah);

const bobBMI = weightBob / (heightBob * heightBob);


if (sarahBMI < 18.5) {
    console.log("Sarah is underweight");
} else if (sarahBMI >= 18.5 && sarahBMI <= 25) {
    console.log("Sarah is of normal weight");
} else {
    console.log("Sarah is overweight");
}

if (bobBMI < 18.5 || bobBMI > 25) {
    console.log("Bob is underweight or overweight");
} else {
    console.log("Bob is a normal weight");
}
