var array1 = ["darsh", "vyas", "darshatak", "jatin", "jain", "jotin"]

console.log(array1)
//* ⁡⁢⁢⁢[ 'darsh', 'vyas', 'darshatak', 'jatin', 'jain', 'jotin' ]⁡⁡

console.log(array1.length)
//* ⁡⁢⁢⁢𝟲⁡

console.log(array1[array1.length-1])
//* jotin

//! Returns the first (least) index of an element within the array equal
//! to an element, or -1 if none is found. Tt search the element from the
//! 0th index number
console.log(array1.indexOf("vyas"))
//* 1

console.log(array1);
//* 1

//!Print all indexes
for (items in array1){ 
    console.log(items);
}
//* 0
//* 1
//* 2
//* 3
//* 4
//* 5

//!Print all names
for (items in array1){ 
    console.log(array1[items]);
}

//* darsh
//* vyas
//* darshatak
//* jatin
//* jain
//* jotin

for (items of array1){ 
    console.log(items);
}

//* darsh
//* vyas
//* darshatak
//* jatin
//* jain
//* jotin



for (items in array1){ 
    console.log(items);
}
//* 0
//* 1
//* 2
//* 3
//* 4
//* 5

array1.forEach((element,index,array) => {
    console.log(`Elements are ${element} and index is ${index} from array ${array}`)
});
//* Elements are darsh and index is 0 from array darsh,vyas,darshatak,jatin,jain,jotin
//* Elements are vyas and index is 1 from array darsh,vyas,darshatak,jatin,jain,jotin
//* Elements are darshatak and index is 2 from array darsh,vyas,darshatak,jatin,jain,jotin
//* Elements are jatin and index is 3 from array darsh,vyas,darshatak,jatin,jain,jotin
//* Elements are jain and index is 4 from array darsh,vyas,darshatak,jatin,jain,jotin
//* Elements are jotin and index is 5 from array darsh,vyas,darshatak,jatin,jain,jotin


//!Check wheater the string is present or not and return value in boolean form
array1.forEach(element => {
    console.log(element == "vyas")
});

//* false
//* false
//* false
//* false
//* false
//* false


//! printed 3rd character of all strings
array1.forEach(element => {
    console.log(element[2])
});

//* r
//* a
//* r
//* t
//* i
//* t


var array2 = ["darsh", "vyas", "darshatak", "jatin", "jain", "jotin","vyas"]

//!search to forward or first index -->
console.log(array2.indexOf("vyas", 1)); //* 1 means found
console.log(array2.indexOf("vyas", 3)); //* 6 means found on 6th index



//! see from last index to backward  <--
console.log(array2.lastIndexOf("vyas")); //* 6 means found on 6th index
console.log(array2.lastIndexOf("jatin",1)); //* -1
console.log(array2.lastIndexOf("darsh",3)); //* 0 means found on 0th index
console.log(array2.lastIndexOf("darshatak",6)); //* 0 means found on 0th index


//!See ehether the value is included or not. and return true or false
console.log(array2.includes("vyas"));




//! FInd will return only 1 element that satisfies
//! if somthing is not found in findindex then it will return -1 and in find() it will return undefined
const prices = [200, 300, 350, 400, 500, 450, 600, 900, 50];

//&price > 400
const findElem = prices.find((currentVal) => { 
    return currentVal > 400; 
})

console.log(findElem); //*500
console.log(prices.find((currentVal) => currentVal > 400 )); //*500
console.log(prices.findIndex((currentVal) => currentVal > 400)); //* 4th index i.e 500



//! filter()
//! Returns a new array containing all elements of the calling
//! array for which the provided filtering function returns true.


const newPriceTag = prices.filter((element, index) => { 
    return element < 400 ;
})

console.log(newPriceTag); //* [ 200, 300, 350, 50 ]

const newPriceTag1 = prices.filter((element, index) => { 
    return element > 1400 ;
})

console.log(newPriceTag1); //* [ ]




//!will sort the array
console.log(array2.sort());  //*[ 'darsh', 'darshatak', 'jain', 'jatin', 'jotin', 'vyas', 'vyas' ]
console.log(prices.sort());  //*[ 200, 300, 350, 400, 450,  50, 500, 600, 900 ]

//! However,if numbers are sorted as strings,
//! "25" bigger than "100", because "2" is bigger than "1".

//! Because of this, the sort() method will produce an incorrect
//! result when sorting numbers.



//! Crud Operation in Arrays
//! push(),unshift() are same to add items in array
//! pop(), shift()  are same to remove items in array
let arr = ['a', 'b'];
console.log(arr) //* [a,b]

//! push will add value in end and returns the length of array also
//! you can also add multiple data
arr.push("c") 
console.log(arr) //* [a,b,c]
console.log(arr.push("d") ) //* 4
console.log(arr) //* [a,b,c,d]

//! unshift() will add data in start unlike push() and this also returns length

arr.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

//! pop will remove value in end and returns the removed element of array
//! you can also remove multiple data
arr.pop() 
console.log(arr) //* [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,a,b,c]
console.log(arr.pop() ) //* c
console.log(arr) //* [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,a,b]


//! shift() will remove data in start unlike pop()

arr.shift();
console.log(arr) //*  [2, 3, 4, 5, 6, 7, 8, 9, 0,a,b]



//! splice(index,deleteIndex,ValueToAdd) will do all methods like add, remove

const months = ["jan", "march", "april", "june", "july"]

const newMonth = months.splice(months.length, 0, "Dec")
console.log(months) //* [ 'jan', 'march', 'april', 'june', 'july', 'Dec' ]

console.log(newMonth) //* undefined

const newMonth1 = months.splice(5, 0, "Dec")
console.log(months) //* [ 'jan', 'march', 'april', 'june', 'july', 'Dec', 'Dec' ]

const newMonth2 = months.splice(5, 5, "Dec")
console.log(months) //* [ 'jan', 'march', 'april', 'june', 'july', 'Dec' ]



//! small program to find an specefic element in array and update.

let indexOfMonth = months.indexOf("june");

if (indexOfMonth != -1) {
    const updateMonth = months.splice(indexOfMonth, 1, "June")
    console.log(months);
    console.log(updateMonth);
} else {
    console.log("No such data is found")
}

//! small program to find an specefic element in array and remove.
let indexOfMonth1 = months.indexOf("july");
if (indexOfMonth1 != -1) {
    const updateMonth = months.splice(indexOfMonth1, 1)
    console.log(months);
    console.log(updateMonth);
} else {
    console.log("No such data is found")
}

//! small program to find an specefic element in array and remove everything after that.
let indexOfMonth2 = months.indexOf("march");
if (indexOfMonth2 != -1) {
    const updateMonth = months.splice(indexOfMonth2, Infinity)
    console.log(months);
    console.log(updateMonth);
} else {
    console.log("No such data is found")
}


//! this map() will return the changed values in new array rather then chaning value in original array. 
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr1.map((ele) => {
    return ele * ele;
}));
//* [ 1,  4,  9, 16, 25, 36, 49, 64, 81 ]

console.log(arr1.map((ele,index) => {
    return ele > 4;
}));
//* [false, false, false,false, true,  true,true,  true,  true]


console.log(arr1.map((ele,index) => {
    return ele * ele;
}).filter((ele) => {
    return ele > 10;
}));
//* [ 16, 25, 36, 49, 64, 81 ]



//! Reduce Method
//! Flatten an array means to convert the 3d array into a single dimentional array
//! The reduce() method executes reducer function (that you provide)
//! on each element of the resulting in single value.

//! The reducer function takes four arguments
//! Accumulator
//! Current Value
//! Current Index
//! Source Array