var attendance = {
    "2023-09-01": "absent",
    "2023-09-02": "present",
    "2023-09-03": "present",
    "2023-09-04": "present",
    "2023-09-20": "present",
    "2023-09-15": "present",
    "2023-09-29": "present"
};

function makeDate() { 
    var clutter = "";

    for (var i = 1; i <= 31; i++) {
        var date = "2023-09-" + (i < 10 ? "0" : "") + i;
        var status = attendance[date] || "";
        if (status == "") {
            clutter += `<div class="item notMarked" id="${date}" onclick="markAttendanceForDate('${date}')">${i}: ${status}</div>`;
        } else if(status == "absent") { 
            clutter += `<div class="item absent" id="${date}" onclick="markAttendanceForDate('${date}')">${i}: ${status}</div>`;
        }else { 
            clutter += `<div class="item present" id="${date}" onclick="markAttendanceForDate('${date}')">${i}: ${status}</div>`;
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
        var dateInput = document.getElementById('date');
        var date = dateInput.value;

            if (!date) {
                alert("Please select a date.");
                return;
            }

            if (attendance[date]) {
                alert("Attendance for this date has already been marked.");
                return;
            } else { 
                attendance[date] = "Present";
                makeDate();
                    
            }
        }


    function markAttendanceForDate(date) {
        if (attendance[date]) {
            var status = prompt("Mark attendance for " + date + " (absent/present):");
            if (status === "absent" || status === "present") {
                attendance[date] = status;
                makeDate();
                console.log(attendance);
            } else {
                alert("Invalid attendance status. Please enter 'absent' or 'present'.");
            }
        } else { 
            var status = prompt("Mark attendance for " + date + " (absent/present):");
            if (status === "absent" || status === "present") {
                attendance[date] = status;
                makeDate();
                console.log(attendance);
            } else {
                alert("Invalid attendance status. Please enter 'absent' or 'present'.");
            }
        }

}
    


        window.onload = function () {
            makeDate();
        };