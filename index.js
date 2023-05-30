const checkbox = document.getElementById('toggleCheckbox');
const body = document.body;

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    body.style.backgroundColor = '';
  } else {
    body.style.backgroundColor = 'yellow';
  }
});