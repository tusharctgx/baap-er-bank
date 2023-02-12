document.getElementById('btn-deposit').addEventListener('click', function(){
  const depositField = document.getElementById('deposite-field');
  const NewdepositamountString = depositField.value;
  const Newdepositamount = parseFloat(NewdepositamountString);

  const depositTotalElement = document.getElementById('deposit-total');
  const previousdepositTotalString = depositTotalElement.innerText;
  const previousdepositTotal = parseFloat(previousdepositTotalString);

   const currentDepositTotal = previousdepositTotal + Newdepositamount;
   depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalstring = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalstring);


  const currentBalanceTotal = previousBalanceTotal + Newdepositamount;
  balanceTotalElement.innerText = currentBalanceTotal;




   depositField.value = '';
})