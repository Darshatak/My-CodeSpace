const LftSec = document.querySelector("#LftSec");
const AccPage = document.querySelector("#account");
const ProfileP = document.querySelector("#profile");
const UserPage = document.querySelector(".profileP");
const NavProfile = document.querySelector("#NavProfile");
const dashboard = document.querySelector(".dashboard");
const dashboardSection = document.querySelector("#dashboard");
const EmployeForm = document.querySelector(".EmployeForm");

const item = document.querySelector(".item");
const hamBtn = document.querySelector("#hambutton");
const AccName = document.querySelector("#AccName");
const profileIMG = document.querySelector("#profileIMG");

const editButton = document.getElementById("editProfile");
//My Account Section
const ProfileFname = document.getElementById("ProfileFname");
const ProfileLname = document.getElementById("ProfileLname");
const ProfileEmail = document.getElementById("ProfileEmail");
const ProfileNumber = document.getElementById("ProfileNumber");
const ProfileLinkedin = document.getElementById("ProfileLinkedin");
const ProfilecCurrentSalary = document.getElementById("ProfilecCurrentSalary");
const ProfileCurrentRole = document.getElementById("ProfileCurrentRole");
const ProfileAddress = document.getElementById("ProfileAddress");


const logout= document.getElementById("logout");



var employeeCredentials = {
    FirstName:'employee',
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
UserPage.style.display = "none";

window.onload = function () {
    
//Assigning Static Details
AccName.innerText = employeeCredentials.FirstName;
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


AccPage.addEventListener("click", () => { 
    dashboard.style.display = "none";
    UserPage.style.display = "none";
    EmployeForm.style.display = "block";
})

ProfileP.addEventListener("click", () => { 
    dashboard.style.display = "none";
    UserPage.style.display = "block";
    EmployeForm.style.display = "none";
    ProfileP.classList.toggle("active")
})

NavProfile.addEventListener("click", () => { 
    dashboard.style.display = "none";
    UserPage.style.display = "block";
    EmployeForm.style.display = "none";
    ProfileP.classList.toggle("active")
})


dashboardSection.addEventListener("click", () => { 
    dashboard.style.display = "block";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    dashboard.classList.toggle("active")
    ProfileP.classList.toggle("active")
})


hamBtn.addEventListener("click", () => { 
    LftSec.classList.toggle("LftSec")
})


var employeeCredentials = {
    FirstName:'employee',
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