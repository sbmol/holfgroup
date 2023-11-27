document.getElementById('pickup-location').addEventListener('keyup', function() {
  document.getElementById('dropoff-location').value = this.value;
});

document.getElementById('pickup-date').addEventListener('change', function() {
  document.getElementById('dropoff-date').value = this.value;
});

document.getElementById('pickup-time').addEventListener('change', function() {
  document.getElementById('dropoff-time').value = this.value;
});