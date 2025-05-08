// Zorg dat deze file staat in: /js/script.js
document.getElementById('klik-mij').addEventListener('click', function() {
  const output = document.getElementById('js-output');
  output.textContent = 'JavaScript werkt 🎉';
});
