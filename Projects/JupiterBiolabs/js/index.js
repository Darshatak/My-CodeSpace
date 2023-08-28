const Wrapper = document.querySelector(".wrapper");
const loginBtn = document.querySelector("#loginBtn");
const loginForm = document.querySelector(".form-box");
const RegisterBtn = document.querySelector("#RegisterBtn");

const Heading = document.querySelector("#heading");
const Cpass = document.querySelector("#Cpass");
const Name = document.querySelector("#name");
const RBtn = document.querySelector("#RBtn");

loginBtn.addEventListener("click", () => {
    Wrapper.classList.toggle("hidden");
    
});

RegisterBtn.addEventListener("click", () => { 
    Wrapper.classList.toggle('register');
    Heading.innerHTML = "Register";
    Cpass.style = "height:0px;border-bottom:none;";
    Name.style = "height:0px;border-bottom:none;";
    RBtn.innerHTML = "Register Now";
    
})