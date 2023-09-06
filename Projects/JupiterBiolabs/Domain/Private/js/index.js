const loginNavBtn = document.querySelector("#loginBtn");

const Wrapper = document.querySelector(".wrapper");
const loginForm = document.querySelector(".wrapper .form-box.login");
const eyeOpen = document.querySelector("#eye");
const GenerateOtp = document.getElementById("GenerateOtp");
const validate = document.getElementById("validate");
const OtpBox = document.getElementById("OtpBox");
const SubmitBox = document.getElementById("SubmitBox");
const GenerateBox = document.getElementById("GenerateBox");

const ForgetPassBtn = document.getElementById("ForgetPassBtn");


const ResetSignin = document.getElementById("ResetSignin");

var OtpStorarage = "";

OtpBox.style.display = "none";
SubmitBox.style.display = "none";

const employeeCredentials = [
    {
        email: 'admin@admin.com',
        password: 'admin123',
        role:1
    },
    {
        email: 'employee@employee.com',
        password: 'Employee$123',
        role: 0,
        Details: {
            FirstName:'Emily',
            LastName:'rock',
            email: 'employee@employee.com',
            password: 'employee123',
            profile: 'https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
            Linkedin:'https://www.github.com/Darshatak',
            Current_Salary:4.3,
            Current_Role:'Software Developer',
            Address:'Street: 123 Fake Street, Faketown, Fakeland, 12345, Imaginaria',
            Phone_number: '9326335961'
        },
        Attendance: {
            "2023-09-01": "absent",
            "2023-09-02": "present"
        }
    },
    {
        email: 'employee2@employee.com',
        password: 'employee123',
        role:0
    },
    {
        email: 'employee3@employee.com',
        password: 'employee123',
        role:0
    },
    {
        email: 'employee4@employee.com',
        password: 'employee123',
        role:0
    },
    {
        email: 'employee5@employee.com',
        password: 'employee123',
        role:0
    }
];


if (localStorage.getItem("loginStatus") === "true") { 
    window.location.href = 'employee.html';
}



eyeOpen.addEventListener("click", () => { 
    let passwordInput = document.getElementById('password');

    
    if (passwordInput.type === 'text') {
        eyeOpen.setAttribute('class','fa-solid fa-eye')
        passwordInput.setAttribute('type', 'password');
    } else {
        eyeOpen.setAttribute('class','fa-solid fa-eye-slash')
        passwordInput.setAttribute('type', 'text');
    }
    
})





function login(event) {
    event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
// Regular expressions for email and password validation
    var emailRegex = /^[a-zA-Z0-9]+@[A-za-z]+\.[A-Za-z]{2,}/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()]).{8,}$/;

    // Check if email and password match the regex patterns
    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
        alert("Invalid email or password format. Please check and try again.");
    } else if (email === "" || password === "") {
        alert("Email and password cannot be blank.");
    } else {
        employeeCredentials.forEach((e) => {
            if (e.role === 0) {
                localStorage.setItem("loginStatus", "true");
                localStorage.setItem("loginUser",email);
                window.location.href = 'employee.html';
            }
            if (e.role === 1) {
                if (email === e.email && password === e.password) {
                    localStorage.setItem("loginStatus", "true");
                    alert("Admin login successful");
                }
            }
        });
    }
// alert('Please Contact Admin to access this page.');
}
    



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

    employeeCredentials.forEach((e) => {
        console.log(e.email);
                if (e.role === 0) {
                    if (email === e.email) {
                        OtpStorarage = OtpGenerator();
                        console.log(OtpStorarage);
                        OtpBox.style.display = "flex";
                    } else {
                        alert('Invalid login credentials');
                    }
                }
            });


   
});


function OtpGenerator() { 
    var Otp = Math.floor((Math.random() * 900000) + 54);
    return Otp;
}