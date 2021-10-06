const billAmountEl = document.getElementById('bill-amount')
const tipPercentageEl = document.getElementById('tip-percentage')
const calculateBtnEl = document.getElementById('calculate')
const tipAmountEl = document.getElementById('tip-amount')
const  totalAmountEl = document.getElementById('total-amount')
const resetBtnEl = document.getElementById('reset')

const calculateAmount = ()=>{
    let amount = billAmountEl.value
    let percentage = tipPercentageEl.value;
   let tip= amount * (percentage/100);
   let total= tip+ Number(amount )
   tipAmountEl.value=tip;
   totalAmountEl.value=total;
    
}

const clearItems=()=>{
    billAmountEl.value="";
    tipPercentageEl.value="";
    tipAmountEl.value="";
    totalAmountEl.value="";

}

calculateBtnEl.addEventListener('click',calculateAmount)
resetBtnEl.addEventListener('click', clearItems)