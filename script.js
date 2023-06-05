function PressContact() {
  // Configurați setările EmailJS Lite
  emailjs.init('FuP70h_HxXxPpazed');

  // Obțineți valorile din formular
  var form = document.querySelector('form');
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('second_name').value;
  var email = document.getElementById('email').value;
  var message = document.querySelector('textarea').value;

  // Verificați dacă câmpurile sunt completate și au cel puțin 3 caractere
  if (firstName.length < 3) {
      alert('Please enter a valid first name (minimum 3 characters).');
      return;
  }
  if (lastName.length < 3) {
      alert('Please enter a valid last name (minimum 3 characters).');
      return;
  }
  if (email.length < 3) {
      alert('Please enter a valid email address (minimum 3 characters).');
      return;
  }
  if (message.length < 3) {
      alert('Please enter a valid message (minimum 3 characters).');
      return;
  }

  // Verificați dacă adresa de e-mail este validă
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Combinați numele și prenumele cu un spațiu între ele
  var fullName = firstName + ' ' + lastName;

  // Trimitere email folosind EmailJS Lite
  // emailjs.send('service_6a9bpgi', 'template_v22sqvz', {
  //     from_name: fullName,
  //     user_email: email,
  //     user_autoreply_message: 'Thank you for your message! We will get back to you soon.',
  //     user_message: message
  //     }).then(function (response) {
  //         console.log('Email sent!', response);
  //         form.reset();
  //     }, function (error) {
  //         console.error('Eroare la trimiterea emailului:', error);
  //     });
}
  