let x = "5" + 2 + 3;
console.log(x)

let x1 = "5" + 2;
console.log(x1)

let x2 = "5" + "2" + 3;
console.log(x2)

let x3 = 5 + 2 + "3";
console.log(x3)

let x4 = {
    name: 'John',
    age: 20
};


console.log(x4);


((name)=>console.log("My name is " + name))("Darsh");


var prices = [50, 30, 20, 10, 40];

prices.sort(function(a, b) {
    return a - b;
});

console.log(prices);