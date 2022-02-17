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
    // error message for negative expense value
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
    // error alert for negative income value 
   if(income<0){
     alert("you cannot earn negative! enter a positive value!")


   }
   else{
    if(remainingBalance>0){
      document.getElementById('balance-calculate').innerText=remainingBalance;
      document.getElementById('expense-greater-error').style.display='none';
      }
      else if (remainingBalance<0){
        {
          document.getElementById('expense-greater-error').style.display='block';
       
        }
      }
   }

})
// event listener for save button 
document.getElementById('calculate-save-button').addEventListener('click',function(){
  // get the saving amount of income 
  const income=getInput('total-income');
  const saving=getInput('save-percentage');
  const expensed= expenseCalculate();
  const remainingBalance= income-expensed;
  const savingAmount= (income*saving)/100;
  if(saving>0){
    document.getElementById('percentage-alert').style.display='none';
    if(savingAmount<remainingBalance){
      // assign the saving amount in allocated field
      document.getElementById("saving-amount-calculate").innerText=savingAmount;
      
      // calculate the balance after saving and assign it in allocated field 
      
      const lastRemainingBalance =  remainingBalance-savingAmount;
      document.getElementById('remaining-amount-calculate').innerText=lastRemainingBalance;
      document.getElementById('saving-alert').style.display='none';
    }
    // push error message for saving amount more than balance 
    else{
      document.getElementById('saving-alert').style.display='block';
    
    }
  }
  else{
    document.getElementById('percentage-alert').style.display='block';
  }
 

})
