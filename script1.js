const scriptURL = 'https://script.google.com/macros/s/AKfycbz3QOkSlZGiHmjfZlUpI8o76_yy2Iyr0w97YcjQaRHPdDLaKXb-VzBnhM-M_5ygzUz1/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML = "Message sent successfully :)"
     setTimeout(function(){
      msg.innerHTML = "" ;
     }, 4000)
     form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
