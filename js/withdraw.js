document.getElementById('btn-withdraw').addEventListener('click', function(){
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);


  withdrawField.value = '';

  if(isNaN(newWithdrawAmount)){
    alert('please provide a valid number');
    return;
  }

  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previouswithdrawTotalstring = withdrawTotalElement.innerText;
  const previouswithdrawTotal  = parseFloat(previouswithdrawTotalstring);

 

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalstring = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

  


  if(newWithdrawAmount > previousBalanceTotal){
    alert('Baap er bank e eto taka nai');
    return;
  }


  const currentWithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;



  

})