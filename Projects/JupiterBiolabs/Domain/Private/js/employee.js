//Left Section
const LftSec = document.querySelector("#LftSec");
const logout = document.getElementById("logout");


//navigation
const dashboardSection = document.querySelector("#dashboard");
const ProfileP = document.querySelector("#profile");
const AttendenceNav = document.querySelector("#attendence");
const documentsNav = document.querySelector("#documentsNav");
const salaryNav = document.querySelector("#salaryNav");
const notificationsNav = document.querySelector("#notificationsNav");
const SettingNav = document.querySelector("#SettingNav");

//Top Nav Bar
const NavProfile = document.querySelector("#NavProfile");
const hamBtn = document.querySelector("#hambutton");
const AccName = document.querySelector("#AccName");
const profileIMG = document.querySelector("#profileIMG");

const searchInput = document.getElementById('searchInput');
const tabs = document.querySelectorAll('.item');



//sections in container
const dashboard = document.querySelector(".dashboard");
const EmployeForm = document.querySelector(".EmployeForm");
const SettingsSection = document.querySelector(".Settings");
const noticesMarquee = document.querySelector("#notices");
const AttendanceSec = document.querySelector("#AttendanceSec");
const DocumentsSec = document.querySelector("#DocumentsSec");


const DocumentContainer = document.querySelector(".DocumentContainer");
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
    LastName:'vyas',
    email: 'employee@employee.com',
    password: 'employee123',
    profile: 'https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png',
    Linkedin:'https://www.github.com/Darshatak',
    Current_Salary:'4.3',
    Current_Role:'Software Developer',
    Address:'922 Vikaz Extension',
    Phone_number:'1598764324',
};


var attendance = {
    "2023-09-01": "absent",
    "2023-09-02": "present",
    "2023-09-04": "present"
};


var dateinput =  document.getElementById('date').innerText =getCurrentDate();

function circleMouseFollow() { 
    window.addEventListener("mousemove", function (data) { 
        this.document.querySelector("#minicircle").style.transform = `translate(${data.clientX}px,${data.clientY}px) scale(0.9)`
        
    })
    window.addEventListener("click", function (data) { 
        this.document.querySelector("#minicircle").style.transform =`translate(${data.clientX}px,${data.clientY}px) scale(2)`
        this.document.querySelector("#minicircle").style.background = "#e40e0e"
    })
}

circleMouseFollow();

window.onload = function () {
    UpdateDoc();
    selectNav();
    //Assigning Static Details
    noticesMarquee.innerHTML = `<p id="account">Please Update Your Profile</p> <i class="fa-solid fa-eye"></i>`;
    // AccName.innerText = employeeCredentials.FirstName;
    profileIMG.innerHTML = `<img src="${employeeCredentials.profile}">`;

    ProfileFname.innerText = employeeCredentials.FirstName;
    ProfileLname.innerText = employeeCredentials.LastName;
    ProfileEmail.innerText = employeeCredentials.email;
    ProfileNumber.innerText = employeeCredentials.Phone_number;
    ProfileLinkedin.innerHTML = `<a href="${employeeCredentials.Linkedin}" id="link">${employeeCredentials.FirstName}</a>`;;
    ProfilecCurrentSalary.innerText = employeeCredentials.Current_Salary;
    ProfileCurrentRole.innerText = employeeCredentials.Current_Role;
    ProfileAddress.innerText = employeeCredentials.Address;
    makeDate();
    document.getElementById('date').innerText =getCurrentDate();
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
    localStorage.setItem("nav", "ProfileP");
    dashboard.style.display = "none";
    UserPage.style.display = "block";
    EmployeForm.style.display = "none";
    DocumentsSec.style.display = "none";
    SettingsSection.style.display = "none";
    AttendanceSec.style.display = "none";

    ProfileP.classList.add("active")

    SettingNav.classList.remove("active")
    notificationsNav.classList.remove("active")
    salaryNav.classList.remove("active")
    documentsNav.classList.remove("active")
    AttendenceNav.classList.remove("active")
    dashboardSection.classList.remove("active")
})

NavProfile.addEventListener("click", () => { 
    localStorage.setItem("nav", "ProfileP");
    dashboard.style.display = "none";
    UserPage.style.display = "block";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "none";
    AttendanceSec.style.display = "none";
    DocumentsSec.style.display = "none";

    ProfileP.classList.add("active")

    SettingNav.classList.remove("active")
    notificationsNav.classList.remove("active")
    salaryNav.classList.remove("active")
    documentsNav.classList.remove("active")
    AttendenceNav.classList.remove("active")
    dashboardSection.classList.remove("active")
})


dashboardSection.addEventListener("click", () => { 
    localStorage.setItem("nav", "dashboardSection");
    dashboard.style.display = "flex";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "none";
    AttendanceSec.style.display = "none";
    DocumentsSec.style.display = "none";

    dashboardSection.classList.add("active")

    SettingNav.classList.remove("active")
    notificationsNav.classList.remove("active")
    salaryNav.classList.remove("active")
    documentsNav.classList.remove("active")
    AttendenceNav.classList.remove("active")
    ProfileP.classList.remove("active")
    
})


SettingNav.addEventListener("click", () => { 
    localStorage.setItem("nav", "SettingNav");
    dashboard.style.display = "none";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "block";
    AttendanceSec.style.display = "none";
    DocumentsSec.style.display = "none";

    SettingNav.classList.add("active")
    
    notificationsNav.classList.remove("active")
    salaryNav.classList.remove("active")
    documentsNav.classList.remove("active")
    AttendenceNav.classList.remove("active")
    ProfileP.classList.remove("active")
    dashboardSection.classList.remove("active")
})

AttendenceNav.addEventListener("click", () => { 
    localStorage.setItem("nav", "AttendenceNav");
    dashboard.style.display = "none";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "none";
    AttendanceSec.style.display = "block";
    DocumentsSec.style.display = "none";

    AttendenceNav.classList.add("active")

    SettingNav.classList.remove("active")
    notificationsNav.classList.remove("active")
    salaryNav.classList.remove("active")
    documentsNav.classList.remove("active")
    ProfileP.classList.remove("active")
    dashboardSection.classList.remove("active")
})

documentsNav.addEventListener("click", () => {
    localStorage.setItem("nav", "documentsNav");
    dashboard.style.display = "none";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "none";
    AttendanceSec.style.display = "none";
    DocumentsSec.style.display = "block";

    documentsNav.classList.add("active")

    SettingNav.classList.remove("active")
    notificationsNav.classList.remove("active")
    salaryNav.classList.remove("active")
    AttendenceNav.classList.remove("active")
    ProfileP.classList.remove("active")
    dashboardSection.classList.remove("active")
})

salaryNav.addEventListener("click", () => { 
    localStorage.setItem("nav", "salaryNav");
    dashboard.style.display = "none";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "none";
    AttendanceSec.style.display = "none";
    DocumentsSec.style.display = "none";

    salaryNav.classList.add("active")

    SettingNav.classList.remove("active")
    notificationsNav.classList.remove("active")
    documentsNav.classList.remove("active")
    AttendenceNav.classList.remove("active")
    ProfileP.classList.remove("active")
    dashboardSection.classList.remove("active")
})

notificationsNav.addEventListener("click", () => { 
    localStorage.setItem("nav", "notificationsNav");
    dashboard.style.display = "none";
    UserPage.style.display = "none";
    EmployeForm.style.display = "none";
    SettingsSection.style.display = "none";
    AttendanceSec.style.display = "none";
    DocumentsSec.style.display = "none";


    notificationsNav.classList.add("active")

    SettingNav.classList.remove("active")
    salaryNav.classList.remove("active")
    documentsNav.classList.remove("active")
    AttendenceNav.classList.remove("active")
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


document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("theme");
    const notificationsCheckbox = document.getElementById("notifications");
    const languageSelect = document.getElementById("language");
    const saveButton = document.getElementById("save-settings");
    const body = document.body;
    const fontSizeSelect = document.getElementById("font-size");


    themeSelect.value = localStorage.getItem("theme") || "light";
    notificationsCheckbox.checked = JSON.parse(localStorage.getItem("notifications")) || false;
    languageSelect.value = localStorage.getItem("language") || "english";
    fontSizeSelect.value = localStorage.getItem("Font-size") || "medium";


    applyTheme(themeSelect.value);


    saveButton.addEventListener("click", function () {

        localStorage.setItem("theme", themeSelect.value);
        localStorage.setItem("notifications", notificationsCheckbox.checked);
        localStorage.setItem("language", languageSelect.value);
        localStorage.setItem("Font-size", fontSizeSelect.value);
        window.location.reload();
    });


    function applyTheme(selectedTheme) {
        if (selectedTheme === "dark") {
            $(document).ready(function () {
                $("*").css("color", "white");
                $("body").css("background-color", "#0B0C10");
                $(".topNav").css({
                    "background-color": "#2C3231",
                    "border-bottom": "1px solid #ccc"
                });
                $(".leftSection").css({
                    "background-color": "#202123"
                });
                $(".active").css({
                    "background-color": "rgba(20, 20, 20, 0.5)",
                    "border-right": "1px solid #ccc"
                });
                    $(".rightSection").css("background-color", "#202024");
                    $(".section1").css("background-color", "#333");
                    $(".profileP").css("background-color", "#333");
                    $(".EmployeForm").css("background-color", "#333");
                    $(".profile-info").css("background-color", "#333");
                    $(".profile-info").css("color", "#333");
                    $("#link").css("color", "#0056b3");
                    $(".CSetting").css("background-color", "#333");
                    $(".CSetting select").css("color", "#1F2833");
                    $(".CSetting select option").css("color", "#333");
                    $(".issue-box h3").css("color", "black");
                    $("input,textarea").css("color", "black");
                    $(".close i").css("color", "black");

                });
            
        } else {
            body.style.backgroundColor = "#f4f4f4";
        }
    }

});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingTabs = [];

    tabs.forEach(tab => {
        const tabText = tab.querySelector('p').textContent.toLowerCase();
        if (tabText.includes(searchTerm)) {
            matchingTabs.push(tab);
            tab.style.display = 'flex';
        } else {
            tab.style.display = 'none';
        }
    });

    if (matchingTabs.length === 1) {
        matchingTabs[0].click();
    }
});


// Attendance Panel

function makeDate() { 
    var clutter = "";

    for (var i = 1; i <= 31; i++) {
        var date = "2023-09-" + (i < 10 ? "0" : "") + i;
        var status = attendance[date] || "";
        if (status == "") {
            clutter += `<div class="pBtmitem notMarked" id="${date}">${i}</div>`;
        } else if(status == "absent") { 
            clutter += `<div class="pBtmitem absent" id="${date}">${i}</div>`;
        }else { 
            clutter += `<div class="pBtmitem present" id="${date}">${i}</div>`;
        }
        
    }



    document.getElementById("pBtm").innerHTML = clutter;
}


function getCurrentDate() { 
var currentDate = new Date();
var currentYear = currentDate.getFullYear(); // Get the current year (e.g., 2023)
var currentMonth = currentDate.getMonth() + 1; // Get the current month (January is 0, so add 1)
    var currentDay = currentDate.getDate();
    
    if (currentDay < 10) { 
        currentDay= "0"+(currentDay);
    }
    if (currentMonth < 10) { 
        currentMonth= "0"+(currentMonth);
    }
    
    return `${currentYear}-${currentMonth}-${currentDay}`;

}


function markAttendance() {
    var date = dateinput;

    if (attendance[date]) {
                alert("Attendance is marked")
                document.getElementById('AttendaceMarker').innerText = "Yes"
                return;
            } else {
                document.getElementById('AttendaceMarker').innerText = "Yes"
                attendance[date] = "Present";
                makeDate();
                    
            }
        }



function selectNav() { 
    var tab = localStorage.getItem("nav");
    if (tab == "dashboardSection") {
        dashboardSection.click();
    }
    else if (tab == "ProfileP") { 
        ProfileP.click();
    }
    else if (tab == "AttendenceNav") { 
        AttendenceNav.click();
    }
    else if (tab == "documentsNav") { 
        documentsNav.click();
    }
    else if (tab == "salaryNav") { 
        salaryNav.click();
    }
    else if (tab == "notificationsNav") { 
        notificationsNav.click();
    }
    else if (tab == "SettingNav") { 
        SettingNav.click();
    }
}

var Documents = {
    1: {
        name: "AadharCard",
        link: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
        date: "02/09/2023"
    },
    2: {
        name: "Pancard",
        link: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        date: "02/09/2023"
    },
    3: {
        name: "Pancard",
        link: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
        date: "02/09/2023"
    }
}

function AddDoc() {

    const documentUrl = "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png";

    var newName = prompt("Enter the name of the new document:");
    var newLink = prompt("Enter the link for the new document:");
    var newDate = getCurrentDate();

    var newDocument = {
    name: newName,
    link: newLink,
    date: newDate
    };
    if (newName == null && newLink == null) {
        console.log("failed to add files")
    } else { 

        var nextKey = Object.keys(Documents).length + 1;
        Documents[nextKey] = newDocument;

        console.log(Documents);

        var clutter = "";
        for (var key in Documents) {
            console.log(Documents[key]);
                clutter += `<div class="DocItem">
                                <p>${key}</p>
                                <p>${Documents[key].name}</p>
                                <p>${Documents[key].date}</p>
                                <p><button  onclick="ViewDoc(${key})"><i class="fa-solid fa-eye"></i></button>
                                    <button  onclick="DeleteDoc(${key})"><i class="fa-solid fa-trash"></i></button>
                                </p>
                            </div>`;
        }
        document.getElementById('DocumentContainer').innerHTML = clutter;
    }
    
}



function UpdateDoc() {

    var clutter = "";
    for (var key in Documents) {
        console.log(Documents[key]);
            clutter += `<div class="DocItem">
                            <p>${key}</p>
                            <p>${Documents[key].name}</p>
                            <p>${Documents[key].date}</p>
                            <p><button  onclick="ViewDoc(${key})"><i class="fa-solid fa-eye"></i></button>
                                <button  onclick="DeleteDoc(${key})"><i class="fa-solid fa-trash"></i></button>
                            </p>
                        </div>`;
    }
    document.getElementById('DocumentContainer').innerHTML = clutter;
}




function ViewDoc(key) { 
    var numberOfDocuments = Object.keys(Documents).length;
    for (var i = 1; i <= numberOfDocuments; i++) { 
        if (`${i}` == `${key}`) {
            window.location = Documents[key].link;
        }
    }
}

function DeleteDoc(key) { 
    if (Documents.hasOwnProperty(key)) {
        delete Documents[key];
        console.log(`Document with key ${key} has been deleted.`);
        UpdateDoc();
    } else {
        console.log(`Document with key ${key} does not exist.`);
    }
}

