// global scope
// local scope
// block scope

// let x = 5;
// Block Scope
{
    var x = 10;
    console.log('inside block: ', x);
}
console.log('outside block: ', x);
/* Note: Block scope এ var দিয়ে কোনো variable declare করলে সেটিকে block scope এর বাইরেও
access করা যাবে। let বা const দিয়ে তা সম্ভব নয়। তবে...তবে Functional scope বা local scope এ 
var দিয়ে কোনো variable declare করলেও তা Functional scope বা local scope এর বাইরে access
করা যাবে না। আর যেখানে var কে-ই access করা যাবে না সেখানে let এবং const কে access করতে চাওয়া
বিলাসিতা। এটাই block scope এবং local scope এর মধ্যে difference. */


// Block Scope
let x = 5;
{
    x = 10; /* এখানে ১৪ নাম্বার লাইনের x এর মান 5 এর যায়গায় 10 হয়ে যাবে। কারন এখানে x এর মান
    re declare না করে re assign করা হয়েছে। তাই block scope এর x global scope এর x এর মান
    re assign করে পরিবর্তন করে ফেলবে। তাই inside block এবং outside block দু-যায়গাতেই x এর 
    মান 10 হয়ে যাবে */
    console.log('inside block: ', x);
}
console.log('outside block: ', x);


// Functional scope / local scope
function add() {
    var total = 3 + 5;
    console.log('inside function: ', total)
}
add();
console.log(total); /* 12 নাম্বার লাইনের Note */