
function expense() {
    //getting value from food input field
    const food = document.getElementById('food').value;
    const food_cost = parseInt(food);
    //getting value from rent input field
    const rent = document.getElementById('rent').value;
    const rent_cost = parseInt(rent);
    //getting value from clothes input field
    const clothes = document.getElementById('clothes').value;
    const clothes_cost = parseInt(clothes);
    return (food_cost + rent_cost + clothes_cost);
}


function balance() {
    // accessing Income input field
    const income = document.getElementById('income').value;
    const income_value = parseInt(income);
    // getting value from expenses
    const expenses = parseInt(expense());
    //setting value at expenses field
    document.getElementById('total-expenses').innerText = expenses;
    const amount = income_value - expenses;
    return amount;
}

//added event listener at balance button ara
document.getElementById('calculate').addEventListener('click', function () {
    //setting value at balance field
    document.getElementById('balance').innerText = balance();
})

//added event listener at save area
document.getElementById('save-button').addEventListener('click', function () {
    //getting value from save input field
    const save_input = document.getElementById('save-input').value;
    const save_input_value = parseInt(save_input);
    //income amount 
    const income = document.getElementById('income').value;
    const income_value = parseInt(income);
    //current balance
    const currentBalance = balance();
    //Calculate saving amount
    const saving_amount = (income_value / 100) * save_input_value;
    document.getElementById('saving-amount').innerText = saving_amount;
    //remaining balance 
    document.getElementById('remaining-balance').innerText = currentBalance - saving_amount;
})