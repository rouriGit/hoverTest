const button = document.getElementById('hoverButton');
const hoverText = document.getElementById('hoverText');

button.addEventListener('mouseover', () => {
    hoverText.textContent = 'true';
});

button.addEventListener('mouseout', () => {
    hoverText.textContent = '';
});
