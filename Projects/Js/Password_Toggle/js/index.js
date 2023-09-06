const pwd = document.getElementById("pwd");


function togglePass() { 
    if (pwd.type === "password") {
        pwd.type = "text"; // Change the input type to "text" to show the password
    } else {
        pwd.type = "password"; // Change it back to "password" to hide the password
    }
}