// var users = []
// var ExpenseList = []


// function addUser() {
//     const UserNameInput = document.querySelector("#userName");
//     const userName = UserNameInput.value.trim();
//     if (userName === "") {
//         alert("Please enter a username");
//     } else if(users.includes(userName)){
//             alert(userName + " is already in the list");
//     }
//     else {
//         users.push(userName);
//         console.log(users);
//         // Clear the input field
//         UserNameInput.value = "";
//         updateExpenseTable();

//     }
    
// }

// function addExpense() {
//      const expenseName = document.getElementById('expenseName').value;
//     const amount = parseFloat(document.getElementById('amount').value);

//     if (expenseName.trim() === "" || isNaN(amount) || amount <= 0) {
//         alert('Please enter a valid expense name and amount.');
//         return;
//     }

//     ExpenseList.push(
//         {
//         name: expenseName,
//             amount: amount
//         }
//     );
//     updateExpenseTable();
//     document.getElementById('expenseName').value = '';
//     document.getElementById('amount').value = '';
// }


// function updateExpenseTable() {
//     const expenseTable = document.getElementById('expense-table');
//     const thead = expenseTable.querySelector('thead tr');
//     const tbody = expenseTable.querySelector('tbody');
//     thead.innerHTML = `<th>Expenses \\ Users</th>`;
//     tbody.innerHTML = '';

//     users.forEach(user => {
//         thead.innerHTML += `<th>${user}</th>`;
//     });
//     thead.innerHTML += '<th>Total Amount</th>';

//     ExpenseList.forEach(expense => {
//         const row = document.createElement('tr');
//         row.innerHTML = `<td>${expense.name} - ${expense.amount}rs</td>`;


//         users.forEach(user => {
//             row.innerHTML += `<td>${users[user]}</td>`;
//         });

//         row.innerHTML += `<td>${expense.amount.toFixed(2)}</td>`;
//         tbody.appendChild(row);
//     });

// }

// updateExpenseTable();

