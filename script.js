const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Perform form validation
  if (!emailInput.value || !passwordInput.value) {
    alert('Please fill in all fields');
    return;
  }

  // Send form data to server
  const formData = new FormData(form);
  fetch('/login', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle server response
  })
  .catch(error => {
    console.error('There was an error:', error);
  });
});
