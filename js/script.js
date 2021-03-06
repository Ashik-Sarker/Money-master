
function expense() {
    //getting value from food input field
    const food = document.getElementById('food').value;
    const food_cost = parseFloat(food);
    //getting value from rent input field
    const rent = document.getElementById('rent').value;
    const rent_cost = parseFloat(rent);
    //getting value from clothes input field
    const clothes = document.getElementById('clothes').value;
    const clothes_cost = parseFloat(clothes);

    if (food_cost >= 0 && rent_cost >= 0 && clothes_cost >= 0) {
        return (food_cost + rent_cost + clothes_cost);
    }
    else {
        alert('please input positive value');
        return 0;
    } 
}


function balance() {
    // accessing Income input field
    const income = document.getElementById('income').value;
    const income_value = parseFloat(income);

    if (income_value >= 0) {
        // getting value from expenses
        const expenses = parseFloat(expense());
        console.log(expenses);
        //setting value at expenses field
        if (expenses > income_value) {
            alert('Your expenses is higher than Income');
            return 0;
        }
        else if (expenses != 0) {
            document.getElementById('total-expenses').innerText = expenses;
            const amount = income_value - expenses;
            return amount;
        }
    }  
}

//added event listener at balance button ara
document.getElementById('calculate').addEventListener('click', function () {
    //setting value at balance field
    const balance_value = balance();

    if (!isNaN(balance_value)) {
        document.getElementById('balance').innerText = balance_value;
    }
    else {
        alert('Please fill the input fields with positive Numbers of amount');
    }
});

//added event listener at save area
document.getElementById('save-button').addEventListener('click', function () {
    
    //getting value from save input field
    const save_input = document.getElementById('save-input').value;
    var save_input_value = parseFloat(save_input);
    
    if (!isNaN(save_input_value) && save_input_value >= 0) {

        //income amount 
        const income = document.getElementById('income').value;
        let income_value = parseFloat(income);

        let expense_value = expense();
        //current balance
        let currentBalance = balance();
        if (isNaN(income_value) || expense_value == 0) {
            income_value = 0;
            currentBalance = 0;
        }
        
        //Calculate saving amount
        const saving_amount = (income_value / 100) * save_input_value;
        
        if (saving_amount > currentBalance) {
            alert('Not sufficient balance for saving')
        }
        else {
            document.getElementById('saving-amount').innerText = saving_amount;
            //remaining balance 
            document.getElementById('remaining-balance').innerText = currentBalance - saving_amount;
        }

    }
    else {
        alert('Please Input positive number value how many amount you want to save');
    }
})