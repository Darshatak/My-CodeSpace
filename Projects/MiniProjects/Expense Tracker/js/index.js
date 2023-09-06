var users = []
var ExpenseList = []


function addUser() {
    const UserNameInput = document.querySelector("#userName");
    const userName = UserNameInput.value.trim();
    if (userName === "") {
        alert("Please enter a username");
    } else if(users.includes(userName)){
            alert(userName + " is already in the list");
    }
    else {
        users.push(userName);
        // console.log(users);
        
        UserNameInput.value = "";
        updateExpenseTable();

    }
    
}

function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!users.length == 0) {
        if (expenseName.trim() === "" || isNaN(amount) || amount <= 0) {
            alert('Please enter a valid expense name and amount.');
            return;
        }

        ExpenseList.push(
            {
                name: expenseName,
                amount: amount
            }
        );

        updateExpenseTable();
        document.getElementById('expenseName').value = '';
        document.getElementById('amount').value = '';
    } else { 
        alert(" Please Add users");
    }

    
}


function updateExpenseTable() {
    const expenseTable = document.getElementById('expense-table');
            const thead = expenseTable.querySelector('thead tr');
            const tbody = expenseTable.querySelector('tbody');
            let count = 0;
            thead.innerHTML = `<th>Expenses \\ Users</th>`;
            tbody.innerHTML = '';

            users.forEach(user => {
                thead.innerHTML += `<th>${user}</th>`;
            });
    
            thead.innerHTML += '<th>Total Amount</th>';

            ExpenseList.forEach(expense => {
                const row = document.createElement('tr');
                let totalAmountPerUser = expense.amount / users.length;

                row.innerHTML = `<td>${expense.name} rs</td>`;

                users.forEach(user => {
                    row.innerHTML += `<td>${totalAmountPerUser.toFixed(2)}</td>`;
                    count++;
                });

                row.innerHTML += `<td>${expense.amount.toFixed(2)}</td>`;
                tbody.appendChild(row);
            });

            
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', distributeAmount);
            });
}
        
function distributeAmount() { 
    let selectedUsers = [];
            
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
                checkboxes.forEach(checkbox => {
                    selectedUsers.push(checkbox.getAttribute('id'));
                    ExpenseList.forEach(expense => { 
                        let totalAmountPerUser = expense.amount / selectedUsers.length;
                        console.log(totalAmountPerUser);
                    })
                        });

}


updateExpenseTable();

