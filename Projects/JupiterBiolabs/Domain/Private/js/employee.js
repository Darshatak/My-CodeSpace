//Left Section
const LftSec = document.querySelector("#LftSec");
const logout = document.getElementById("logout");

//navigation
const ProfileP = document.querySelector("#profile");
const dashboardSection = document.querySelector("#dashboard");
const SettingNav = document.querySelector("#SettingNav");

//Top Nav Bar
const NavProfile = document.querySelector("#NavProfile");
const hamBtn = document.querySelector("#hambutton");
const AccName = document.querySelector("#AccName");
const profileIMG = document.querySelector("#profileIMG");


//sections in container
const dashboard = document.querySelector(".dashboard");
const EmployeForm = document.querySelector(".EmployeForm");
const SettingsSection = document.querySelector(".Settings");
const noticesMarquee = document.querySelector("#notices");


const RequestWrapper = document.querySelector("#RequestWrapper");
const closeWrapper = document.querySelector(".close");
const RequestBtn = document.querySelector("#RequestBtn");
const Subject = document.querySelector("#subject");
const Issue = document.querySelector("#issue");
const SubmitBtn = document.querySelector("#RequestSubmitBtn");

const UserPage = document.querySelector(".profileP");
    const ProfileFname = document.getElementById("ProfileFname");
    const ProfileLname = document.getElementById("ProfileLname");
    const ProfileEmail = document.getElementById("ProfileEmail");
    const ProfileNumber = document.getElementById("ProfileNumber");
    const ProfileLinkedin = document.getElementById("ProfileLinkedin");
    const ProfilecCurrentSalary = document.getElementById("ProfilecCurrentSalary");
    const ProfileCurrentRole = document.getElementById("ProfileCurrentRole");
    const ProfileAddress = document.getElementById("ProfileAddress");
    const AccPage = document.querySelector("#account");
    const editButton = document.getElementById("editProfile");


const item = document.querySelector(".item");

var employeeCredentials = {
    FirstName:'Darshatak',
    LastName:'1',
    email: 'employee@employee.com',
    password: 'employee123',
    profile: 'https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png',
    Linkedin:'https://www.github.com/Darshatak',
    Current_Salary:'4.3',
    Current_Role:'Software Developer',
    Address:'922 Vikaz Extension',
    Phone_number:'1598764324',
};


window.onload = function () {
    UserPage.style.display = "none";
    //Assigning Static Details
    noticesMarquee.innerHTML = `Notice: <a id="account">Please Update Your Profile</a>`;
    // AccName.innerText = employeeCredentials.FirstName;
    profileIMG.innerHTML = `<img src="${employeeCredentials.profile}">`;

    ProfileFname.innerText = employeeCredentials.FirstName;
    ProfileLname.innerText = employeeCredentials.LastName;
    ProfileEmail.innerText = employeeCredentials.email;
    ProfileNumber.innerText = employeeCredentials.Phone_number;
    ProfileLinkedin.innerHTML = `<a href="${employeeCredentials.Linkedin}">${employeeCredentials.FirstName}</a>`;;
    ProfilecCurrentSalary.innerText = employeeCredentials.Current_Salary;
    ProfileCurrentRole.innerText = employeeCredentials.Current_Role;
    ProfileAddress.innerText = employeeCredentials.Address;
};


RequestBtn.addEventListener("click", () => { 
    RequestWrapper.style.display = "block";
})


closeWrapper.addEventListener("click", () => { 
    RequestWrapper.style.display = "none";
    Subject.value = "";
    Issue.value = "";
})

SubmitBtn.addEventListener("click", () => { 
    console.log(`The Subject is:- ${Subject.value} and issue are: - ${Issue.value}`);
    RequestWrapper.style.display = "none";
    
})



noticesMarquee.addEventListener("click", () => { 
    dashboard.style.display = "none";
    UserPage.style.display = "none";
    EmployeForm.style.display = "block";
    noticesMarquee.style.display = "none";
})

ProfileP.addEventListener("click", () => { 
    dashboard.style.display = "none";
    UserPage.style.display = "block";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "none";

    ProfileP.classList.add("active")
    dashboardSection.classList.remove("active")
    SettingNav.classList.remove("active")
})

NavProfile.addEventListener("click", () => { 
    dashboard.style.display = "none";
    UserPage.style.display = "block";
    EmployeForm.style.display = "none";

    ProfileP.classList.add("active")
    dashboardSection.classList.remove("active")
})


dashboardSection.addEventListener("click", () => { 
    dashboard.style.display = "block";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "none";

    dashboardSection.classList.add("active")
    ProfileP.classList.remove("active")
    SettingNav.classList.remove("active")
})


SettingNav.addEventListener("click", () => { 
    dashboard.style.display = "none";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "block";

    SettingNav.classList.add("active")
    ProfileP.classList.remove("active")
    dashboardSection.classList.remove("active")
})


hamBtn.addEventListener("click", () => { 
    LftSec.classList.toggle("LftSec")
})



editButton.addEventListener("click", function () {
    // Use prompt to get user input for each field.
    var editedFirstName = prompt("Enter your First Name:", employeeCredentials.FirstName);
    var editedLastName = prompt("Enter your Last Name:", employeeCredentials.LastName);
    var editedEmail = prompt("Enter your Email:", employeeCredentials.email);
    var editedNumber = prompt("Enter your Number:", employeeCredentials.Phone_number);
    var editedLinkedin = prompt("Enter your LinkedIn Profile:", employeeCredentials.Linkedin);
    var editedCurrentSalary = prompt("Enter your Current Salary:", employeeCredentials.Current_Salary);
    var editedCurrentRole = prompt("Enter your Current Role:", employeeCredentials.Current_Role);
    var editedAddress = prompt("Enter your Address:", employeeCredentials.Address);

    // Update the displayed data in the form.
    document.getElementById("ProfileFname").innerText = editedFirstName;
    document.getElementById("ProfileLname").innerText = editedLastName;
    document.getElementById("ProfileEmail").innerText = editedEmail;
    document.getElementById("ProfileNumber").innerText = editedNumber;
    document.getElementById("ProfileLinkedin").innerText = editedLinkedin;
    document.getElementById("ProfilecCurrentSalary").innerText = editedCurrentSalary;
    document.getElementById("ProfileCurrentRole").innerText = editedCurrentRole;
    document.getElementById("ProfileAddress").innerText = editedAddress;
});


logout.addEventListener("click", () => {
    window.location.href = 'index.html';

});


// script.js

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("theme");
    const notificationsCheckbox = document.getElementById("notifications");
    const languageSelect = document.getElementById("language");
    const saveButton = document.getElementById("save-settings");
    const body = document.body;

    // Load saved settings from local storage (if available)
    themeSelect.value = localStorage.getItem("theme") || "light";
    notificationsCheckbox.checked = JSON.parse(localStorage.getItem("notifications")) || false;
    languageSelect.value = localStorage.getItem("language") || "english";

    // Apply the theme on page load
    applyTheme(themeSelect.value);

    // Event listener for the "Save Settings" button
    saveButton.addEventListener("click", function () {
        // Save settings to local storage
        localStorage.setItem("theme", themeSelect.value);
        localStorage.setItem("notifications", notificationsCheckbox.checked);
        localStorage.setItem("language", languageSelect.value);

        alert("Settings saved successfully!");
    });

    // Function to apply the selected theme
    function applyTheme(selectedTheme) {
        if (selectedTheme === "dark") {
                $(document).ready(function () {
                    $("*").css("color", "white");
                    $("body").css("background-color", "#333");
                    $(".topNav").css("background-color", "#3353");
                    $(".profileP").css("background-color", "#3353");
                    $(".profile-info").css("background-color", "#3353");
                    $(".profile-info").css("color", "white");
                    $(".CSetting").css("background-color", "#333");
                    $(".CSetting select").css("color", "#333");
                    $(".CSetting select option").css("color", "#333");
                });
            
        } else {
            body.style.backgroundColor = "#f4f4f4";
        }
    }

  
});

