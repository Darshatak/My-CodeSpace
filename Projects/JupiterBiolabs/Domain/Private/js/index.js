const loginNavBtn = document.querySelector("#loginBtn");

const Wrapper = document.querySelector(".wrapper");
const loginForm = document.querySelector(".wrapper .form-box.login");
const eyeOpen = document.querySelector("#eye");


var adminCredentials = {
    email: 'admin@admin.com',
    password: 'admin123'
};

var employeeCredentials = {
    email: 'employee@employee.com',
    password: 'employee123'
};


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
        if (email === adminCredentials.email && password === adminCredentials.password) {
            alert('Admin login successful');
        } else if (email === employeeCredentials.email && password === employeeCredentials.password) {
            window.location.href = 'employee.html';
        } else {
            alert('Invalid login credentials');
        }
}
    

