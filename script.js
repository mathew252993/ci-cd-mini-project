const button = document.getElementById('magic-button');
const text = document.getElementById('dynamic-text');

button.addEventListener('click', () => {
  text.innerText = "✨ You clicked the magic button! ✨";
});
