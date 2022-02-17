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
    if(foodExpense<0 || rentExpense<0 || clothExpense<0){
      document.getElementById('expense-error').style.display='block';
     
    }
     
    else{
      document.getElementById('expense-error').style.display='none';
      return totalExpense;
    
    }
}


// event listener for calculate button 
document.getElementById('calculate-button').addEventListener('click',function(){
   
    // Assign expense total in the allocated field 
    const expensed = expenseCalculate();
    
    document.getElementById('total-expense-calculate').innerText=expensed;
    // get the income value and assign the remaining balance in the allocated field 
    const income=getInput('total-income');
    const remainingBalance= parseFloat(income)-expensed;
    if(remainingBalance>0){
    document.getElementById('balance-calculate').innerText=remainingBalance;
    document.getElementById('expense-greater-error').style.display='none';
    }
    else if (remainingBalance<0){
      {
        document.getElementById('expense-greater-error').style.display='block';
      }
    }

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
