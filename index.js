const checkbox = document.getElementById('toggleCheckbox');
const body = document.body;

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    body.style.backgroundColor = 'white';
    body.style.color = "#0a192f";
  }  else {
    body.style.backgroundColor = '';
  }
});