document.getElementById('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
   
    if (name === '') {
      alert('Por favor, ingrese su nombre.');
      event.preventDefault();
    }
   
    if (email === '') {
      alert('Por favor, ingrese su correo electrónico.');
      event.preventDefault();
    }
   
    if (age === '') {
      alert('Por favor, ingrese su edad.');
      event.preventDefault();
    }
   });

   //////
   document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
   
    console.log(data);
   });