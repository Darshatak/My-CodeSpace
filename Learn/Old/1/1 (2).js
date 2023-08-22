 // alert("Welcome to my Website") 

// confirm("Login to Website")

// console.log("Darshatak Vyas")

// document.write("Javascript") // to write something on page

// prompt("for asking something","to pre written something").
function print() {
    document.write("<h1>Hello World</h1>")
    
}



function highlight() {
    document.getElementById("header").style.fontSize="100px";
    document.getElementById("header").style.transition="2s";
    
    
}
function unhighlight() {
    document.getElementById("header").style.fontSize="18px";
    
    
}

function dob(){
    // var date =document.getElementById("dob").value;
    // document.getElementById("dob_input").innerHTML=date
    var U_day =document.getElementById("U_day").value;
    var U_month =document.getElementById("U_month").value;
    var U_year =document.getElementById("U_year").value;


    var year=date.getFullYear();

    var month= ["1","2","3","4","5","6","7","8","9","10","11","12"]
    var month_number=month[date.getMonth()];

    var day=date.getUTCDate();


    var final_day=day-U_day;
    var final_month=month_number-U_month;
    var final_year=year-U_year;
    document.getElementById("dob_input").innerHTML="day "+final_day+" Month "+final_month+" Year "+final_year;


}


var cars=["car1","car2","car3"];
var demo=cars;
document.getElementById("res").innerHTML=demo

function onpop(){
    cars.pop()
    document.getElementById("res").innerHTML=cars
}

function pushF(){
    var name = prompt("Enter the element","")
    cars.push(name);
    document.getElementById("res").innerHTML=cars;
}

function reverseF(){
    cars.reverse()
    document.getElementById("res").innerHTML=cars
}

function shiftF(){
    cars.shift()
    document.getElementById("res").innerHTML=cars
}

function sliceF(){
    var start=prompt("Enter the start index","")
    var end=prompt("Enter the end index","")
    cars.slice(start,end)
    document.getElementById("res").innerHTML=cars
}

function sortF(){
    cars.sort(-1)
    document.getElementById("res").innerHTML=cars
}


var date=new Date();
function getDate(){
    document.getElementById("date").innerHTML=date;
}

function year(){
    document.getElementById("date").innerHTML=date.getFullYear();
}
function month(){
    var month= ["January","February","March","April","May","June","July","August","September","October","November","December"]
    document.getElementById("date").innerHTML=month[date.getMonth()];
}
function time(){
    document.getElementById("date").innerHTML=date.getTime();
}
function day(){
    document.getElementById("date").innerHTML=date.getUTCDate();
}


// Variable
var Name="darsh"; //global variable
let name="Darsh"; //Used only inside the scope
const gender="Male"; //cant chnage its value
// alert(Name) 





//Document Object Matter
// var id_name= document.getElementById("articaljs").innerHTML = "<h3>Changed through js</h3>";
// var class_name= document.getElementsByClassName("main")[2].innerHTML="Javascript ";
// console.log(class_name)
// console.log(id_name)



//string concatination

var a=5;
var b=10;
var d= document.getElementsByClassName("main")[1].innerHTML;
var e=document.getElementsByClassName("main")[2].innerHTML;
// var c=a+b; // 15
var c=d+e; //darshatakvyas
var f=document.getElementsByClassName("main")[3].innerHTML="<h2>"+d+e+"</h2>";
// var c=a+d+b+e; //5darsh10vyas
// var c=a+b+d+e; // 15darshvyas
// var c=a+b+d+" "+e; // 15darshatakvyas
console.log(c);




//arthematic operators
    // + 
    // -
    // / (qoificient) 4/2=2
    // % modulus (remainder) 4/2=0
    // ++ 
    // --


//comparision operator
    // ==
    // !=
    // >
    // <
    // >=
    // <=

//logical operators
    // && logical AND
    // || logical OR


//ternary(3 oprends)
    // <condition>? <true>:<false>
    //eg: 2>1 ? "yes":"no"
    //if 2 is greater then 1 then, yes will be printed else no will be printed

//Assignment operators
    // = simple assignment
    // += add and assignment C+=A --> C=C+A
    // -= subtract and assignment
    // *= multiply and assignment
    // /= division and assignment
    // %= modulus and assignment


//function 
    // function Darsh(){
    //     //body
    // }

    // function Darsh1(a,b){
    //     //body
    // }

    function calculate(){
        var input1 =document.getElementById("1var").value;
        var input2 =document.getElementById("2var").value;
        var option =document.getElementById("ops").value;


        if (option == "+"){
            var result = parseInt(input1) + parseInt(input2);
            document.getElementById("result").innerHTML = result;
        }
        if (option == "-"){
            var result = parseInt(input1) - parseInt(input2);
            document.getElementById("result").innerHTML = result;
        }
        if (option == "/"){
            var result = parseInt(input1) / parseInt(input2);
            document.getElementById("result").innerHTML = result;
        }
        if (option == "%"){
            var result = parseInt(input1) % parseInt(input2);
            document.getElementById("result").innerHTML = result;
        }
    
    }



 function promptdata(){
    var name = prompt("Enter Your Name!","")
    document.getElementById("prompt").innerHTML=name;
 }



 //conditional statement
 function percentage_grade(){
    var per = prompt("Enter Your Percentage!","")

    if(per<35){
        document.getElementById("per").innerHTML="Fail";
    }
    else if(per>=35 && per<=50){
        document.getElementById("per").innerHTML="C Grade";
    }
    else if(per>=51 && per<=80){
        document.getElementById("per").innerHTML="B Grade";
    }
    else if(per>=81 && per<=100){
        document.getElementById("per").innerHTML="A Grade";
    }
    else{
        document.getElementById("per").innerHTML="Input is Incorrect";
    }
 }



 //array (key-value pair)
        var house=[];
            house[0]="1bhk";
            house[1]="2bhk";
            house[2]="3bhk";
        
        var house1= new Array("1bhh","rk","hall");

//for loops
for(var i=0;i<house.length;i++){
    document.getElementById("forl").innerHTML=house[i];
}

//while loops
// var i=0;
// while(i<10){
//     //document.getElementById("prompt").innerHTML="Input is Incorrect";
//     i++;
// }


//for each loop

// var cars=["car1","car2","car3"];
// alert(Array.isArray(cars))

// cars.forEach(myfunction);

// function myfunction(item,index){
//     //body of te function
//     document.write(item+" => "+index);
// }




// List of methods
// valueOf() - to print the data of array
// isArray() - check if the variable is array or not
// concat() - join several array into one
// indexOf() - return the primitive value of the specified object(if found positive number will return else -1)
// join() - combine element of an array into a single string and return the string
// pop() - remove the last element of an array and return the removed element
// push() - add an element to the end of an array and return the new length of the array
// reverse() - reverse the order of the elements of an array
// shift() - remove the first element of an array and return the removed element
// slice() - extract a section of an array and return the new array(give n-1)
// sort() - sort the elements of an array



// splice() - remove or replace elements in an array
// unshift() - add one or more elements to the beginning of an array and return the new length of the array
// toString() - convert an array into a string


//example

// var cars=["car1","car2","car3"];
// var vegitable=["corriander","carrot","cabbage"];
// document.write(cars.valueOf())//return all value of array
// document.write(Array.isArray(cars))//return true or false
// document.write(cars.concat(vegitable).join("  "))
// document.write(cars.indexOf("car3"))
// document.write(cars.join(" "))



// List of date and time methods
// Date() : To get the current date and time details according to the brower.
// getFullYear():Get the year as a four digit number (yyyy).
// getMonth():Get the month as a number (0-11).
// getDate():Get the day as a number (1-31)
// getHours():Get the hour (0-23).
// getMinutes():Get the minute (0-59).
// getSeconds():Get the second (0-59).
// getMilliseconds():Get the millisecond (0-999).
// getTime():Get the time (milliseconds since January 1, 1970).
// getDay():Get the weekday as a number (0-6).










//list of mouse and keyboard events

// Mouse Event

// onclick
// oncontextmenu
// ondblclick
// onmousedown
// onmouse enter
// onmousekeave
// onmousemove
// onmouseover
// onmouseout
// onmouseup


// Keyboard Event

// onkeydown
// onkeypress
// onkeyup


// Form Event
// onblur — When an element loses focus
// onfocus — An element gets focus

// onchange — The content of a form element changes
// onsearch — The user writes something in a search field
// onselect — The user selects some text (for <input> and <textarea>)
// onsubmit — A form is submitted
// oninput — User input on an element
// oninvalid — An element is invalid
// onreset — A form is reset
// onload - When document is fully loded 

//setInterval()
// -repeat a given function at every given time-interval
//syntex = window.setInterval(function,milliseconds)

// eg:
// setInterval(function () {
//     alert("HI")
// },3000)


//setTimeout()
// -execute a function after waiting a specified number of milliseconds
//syntex = window.setInterval(function,milliseconds)

// eg:
// setTimeout(function () {
//     alert("HI")
// },3000)


//clearTimeout()
// need an variable for clear
//syntex = window.clearTimeout(function,milliseconds)

// eg:
// clearTimeout(function () {
//     alert("HI")
// },3000)


//clearInterval()
// need an variable for clear
//syntex = window.clearInterval(function,milliseconds)

// eg:
// clearInterval(function () {
//     alert("HI")
// },3000)



































