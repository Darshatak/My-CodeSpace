const GenerateOtp = document.getElementById("GenerateOtp");
const validate = document.getElementById("validate");
const OtpBox = document.getElementById("OtpBox");
const SubmitBox = document.getElementById("SubmitBox");
const GenerateBox = document.getElementById("GenerateBox");

const ForgetPassBtn = document.getElementById("ForgetPassBtn");


const ResetSignin = document.getElementById("ResetSignin");

let OtpStorarage = OtpGenerator();

OtpBox.style.display = "none";
SubmitBox.style.display = "none";

var adminCredentials = {
    email: 'admin@admin.com',
    password: 'admin123'
};

var employeeCredentials = {
    email: 'employee@employee.com',
    password: 'employee123'
};


ForgetPassBtn.addEventListener("click", () => { 
    let loginPage = document.getElementById("LoginForm")
    loginPage.classList.toggle("login")
})

ResetSignin.addEventListener("click", () => { 
    
    let OtpInputPass = document.getElementById("OtpInputPass").value;
    let OtpInputConfirmPass = document.getElementById("OtpInputConfirmPass").value;

     if (OtpInputPass === OtpInputConfirmPass) {
        alert('Successfully Resetted Password');
    } else {
        alert('Password Does not Match');
    }
})


validate.addEventListener("click", (otp) => {
    otp.preventDefault();

    let OtpInput = document.getElementById("OtpInput");
    
    if (parseInt(OtpInput.value) === OtpStorarage) {
        OtpBox.style.display = "none";
        SubmitBox.style.display = "block";
        GenerateBox.style.display = "none";
    } else {
        alert("Invalid OTP");
    }
})

GenerateOtp.addEventListener("click", (e) => {
    e.preventDefault(); 

    var email = document.getElementById('Remail').value;
    console.log(OtpStorarage);
    

    if (email === employeeCredentials.email) {
        OtpBox.style.display = "flex";
    } else {
        alert('Invalid login credentials');
    }
});


function OtpGenerator() { 
    var Otp = Math.floor((Math.random() * 900000) + 54);
    return Otp;
}