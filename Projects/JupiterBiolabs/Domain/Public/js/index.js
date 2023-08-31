const loginNavBtn = document.querySelector("#loginBtn");

const Wrapper = document.querySelector(".wrapper");
const closeButtons = document.querySelectorAll(".close");
const loginForm = document.querySelector(".wrapper .form-box.login");
const LoginBtn = document.querySelector("#LoginBtn");
const eyeOpen = document.querySelectorAll("#eye");


const RegisterForm = document.getElementsByClassName("register");
const RegisterBtn = document.querySelector("#RegisterBtn");


loginNavBtn.addEventListener("click", () => {
    Wrapper.classList.toggle("hidden");
});

closeButtons.forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        Wrapper.classList.toggle("hidden");
    });
});

eyeOpen.forEach(eyeOpen => {
    eyeOpen.addEventListener("click", () => {
    let passwordInput = document.getElementById('password');
    if (passwordInput.type === 'text') {
        eyeOpen.setAttribute('class','fa-solid fa-eye')
        passwordInput.setAttribute('type', 'password');
    } else {
        eyeOpen.setAttribute('class','fa-solid fa-eye-slash')
        passwordInput.setAttribute('type', 'text');
    }
    
    });
});

RegisterBtn.addEventListener("click", () => { 
    loginForm.style.display = "none";
});

LoginBtn.addEventListener("click", () => { 
    loginForm.style.display = "flex";
});

