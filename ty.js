const restemail = document.getElementById('restemail');
const restpass = document.getElementById('restotp');

const newpass = document.getElementById('newpass');
const conpass = document.getElementById('conpass');

const otpsection = document.getElementById('otpsec');

const otpbtn = document.getElementById('OTPbtn');
const savebtn = document.getElementById('savebtn');
const resetcontainer = document.querySelector('#resetpass');

// let otp = parseInt(document.getElementById('loginotp').value);
var num = "";
function checkotp(){
    const otp = parseInt(document.getElementById('loginotp').value);
    console.log(otp); 
        if(otp == num){
            alert("aap ek crore jeet gye hai");
            resetcontainer.style.display= "block";
        }else{
            alert("Wrong");
        }
    return otp;
}



function genOTP() {
    if(restemail.value === ""){
        document.getElementById('err1').innerText = "Enter Email first";
    }
    else{
        document.getElementById('err1').innerText = "";
            const num = Math.round(100000*Math.random());
            console.log(num);
            // resetlogin();
            // let otp = parseInt(prompt("Enter Your OTP:"));
            otpsection.style.display= "block";
            // if(checkotp()){

            //     if(otp === num){
            //         alert("aap ek crore jeet gye hai");
            //         resetcontainer.style.display= "block";
            //     }else{
            //         alert("Wrong");
            //     }
            // }
            // else{
            //     // alert("Invalid");
            // }
            
    }
}

function resetlogin() {
    if(newpass === ""){
        document.getElementById('err4').innerText = "Enter a new Password first";
    }
    else{
        document.getElementById('err4').innerText = "";
        if(conpass === ""){
            document.getElementById('err5').innerText = "Please enter confirm pass"
        }
        else{
            document.getElementById('err5').innerText = "";
            if(newpass.value.length && conpass.value.length < 4){
                alert("enter password greater than 4");
            }else{
                if(newpass.value === conpass.value){
                    alert("Password is changed !");
                    window.location.href='Employee.html';
                }
                else{
                    alert("error");
                }
            }
        }
    }
}




// otpbtn.addEventListener('click', ()=>{
//     resetcontainer.style.display= "block";
// });
// savebtn.addEventListener('click', () =>{
//     resetcontainer.style.display = "none";
// })