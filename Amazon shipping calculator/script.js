let calculate_btn_1 = document.querySelector(".calculate-btn");
calculate_btn_1.addEventListener('click', displayResult);

function displayResult() {
    let shipping = 0;
    let total_cost = 0;
    let cost_ipt = document.querySelector('#cost_inpt');
    cost_ipt = Number(cost_ipt.value);

    if(cost_ipt > 40) {
        total_cost = cost_ipt + shipping;
    }
    else {
        shipping = 10;
        total_cost = cost_ipt + shipping;
    }
    let displayResult = document.querySelector('.display-result-1');
    displayResult.innerHTML = `Total cost is: $${total_cost}`;
}

