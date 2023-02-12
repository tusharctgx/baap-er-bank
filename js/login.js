document.getElementById('btn-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  

  const passField = document.getElementById('user-password');
  const pass = passField.value;
  

  if(email === 'baperpola@gmail.com' && pass === 'secret'){
    window.location.href = 'bank.html';
  }
  else{
    alert('tui bhul password disos tui chor!');
  }
})