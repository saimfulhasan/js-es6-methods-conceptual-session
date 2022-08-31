const number = [2, 4, 1, 9, 3, 5, 26, 7];
const number2 = [32, 45, 67];

const newArrr = [999, ...number, ...number2, 888]
// console.log(newArrr);

// console.log(Math.min(3, 2, 4, 2))
// console.log(Math.min(...number))


// // Destructuring assignment
// const [a, b, ...rest] = number;
// console.log(a, b, rest)
// console.log(rest)

// Coping an array using For-of Loop
const x = [1, 2, 3];
const y = [];
for (const item of x) {
    y.push(item)
}
x.push(88)
x.push(80)
console.log(x, y)


const a = [1, 2, 3];
// const b = a; /* এখানে b এর মান হবে [1, 2, 3, 88, 80] */
const b = [...a]; /* এখানে b এর মান হবে [1, 2, 3,] */
a.push(88)
a.push(80)
console.log(b)
