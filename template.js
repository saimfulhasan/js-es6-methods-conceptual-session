const Name = 'mehedy';
const age = 43;
const job = 'bekar';

// amar naam mehedy. amar boyos 43. ami bekar.

// 1 line in old style
const sentence1 = "amar naam" + Name + "amar boyos" + age + "ami" + job;
// Multilines in old style
const sentence2 = "amar naam" + " " + Name + "\namar boyos" + " " + age + "\nami " + job;

// 1 line using template literals
const sentence3 = `Amar Name ${Name}. Amar boyos ${age} . Ami ${job}`

// Multilines using template literals
const sentence = `
Amar Name ${Name}.
Amar boyos ${age} .
Ami ${job}`
console.log(sentence)