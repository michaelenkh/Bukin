const nameInput = document.getElementById('name'),
      emailInput = document.getElementById('email'),
      numberInput = document.getElementById('number'),
      dateInput = document.getElementById('datepicker'),
      timeInput = document.getElementById('timepicker'),
      button = document.getElementById('button'),
      response = document.querySelector('.response');
      // textInput = document.getElementById('msg'),
      

button.addEventListener('click', send, false);
const socket = io();
// socket.on('smsStatus', function(data){
//   response.innerHTML = '<h5>Text message sent to ' + data.number + '</h5>';
// })

function send() {
  // console.log('send');
  const name = nameInput.value;
  const email = emailInput.value;
  const number = numberInput.value.replace(/\D/g, '');
  const date = dateInput.value.replace(/\D/g, '');
  const time = timeInput.value;
  const text = "Hey " + nameInput.value + ", your Bükin has been made on " + dateInput.value + " at " + timeInput.value + ". Your confirmation sent to your email address: " + emailInput.value;
 
  console.log(name);
  console.log(email)
  console.log(number);
  console.log(text);
  console.log(date);
  console.log(time);

  fetch('/', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({name: name, email: email, number: number, text: text, date: date, time: time})
  })
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err);
  });
}


  var input = $('.datepicker').pickadate({
    format: "dddd, mmm dd, yyyy",
    formatSubmit: "mm/dd/yyyy"
 
  });
  var picker = input.pickadate('picker');
  
  picker.on('open', function() {
    console.log('Opened.. and here I am!');
  })
  $('button').on('click', function(event) {
    event.stopPropagation();
    picker.open();
  });
      // Escape any “rule” characters with an exclamation mark (!).
  

  $('.timepicker').pickatime({
    twelvehour: false,
    donetext: 'Done',
    beforeShow: function() {
      activeElement = $(document.activeElement)
      activeForm = activeElement.closest('form')[0]

      // Remove existing validation errors
      activeForm.ClientSideValidations.removeError(activeElement)

      // Prevent a validation error occurring when element un-focusses
      activeElement.disableClientSideValidations();
    },
    afterDone: function() {
      activeElement = $(document.activeElement)
      $(activeElement).enableClientSideValidations();
    }
  });

