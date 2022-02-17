// function to get all the inputs 
function getInput(x){
  const input =  document.getElementById(x);
  const inputValue=input.value;
  // input.value='';
  return inputValue;
  
}
function expenseCalculate(){
   
    // get all the expenses and get the total 
    const foodExpense= getInput('food-cost');
    const rentExpense=getInput('rent-cost');
    const clothExpense=getInput('cloth-cost');
    const totalExpense=parseFloat(foodExpense) + parseFloat(rentExpense) +parseFloat(clothExpense);
    return totalExpense;
}


// event listener for calculate button 
document.getElementById('calculate-button').addEventListener('click',function(){
   
    // Assign expense total in the allocated field 
    const expensed = expenseCalculate();
    
    document.getElementById('total-expense-calculate').innerText=expensed;
    // get the income value and assign the remaining balance in the allocated field 
    const income=getInput('total-income');
    const remainingBalance= parseFloat(income)-expensed;
    document.getElementById('balance-calculate').innerText=remainingBalance;
    

})
// event listener for save button 
document.getElementById('calculate-save-button').addEventListener('click',function(){
  // get the saving amount of income 
  const income=getInput('total-income');
  const saving=getInput('save-percentage');
  const savingAmount= (income*saving)/100;
  // assign the saving amount in allocated field
  document.getElementById("saving-amount-calculate").innerText=savingAmount;
  const expensed= expenseCalculate();
  // calculate the balance after saving and assign it in allocated field 
  const remainingBalance= income-expensed;
  const lastBalance =  remainingBalance-savingAmount;
  document.getElementById('remaining-amount-calculate').innerText=lastBalance;
  

})
