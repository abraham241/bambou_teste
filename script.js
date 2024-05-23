// script.js

function showAssistanceOptions() {
    document.getElementById('main-options').classList.add('hidden');
    document.getElementById('assistance-options').classList.remove('hidden');
}

function showMainOptions() {
    document.getElementById('main-options').classList.remove('hidden');
    document.getElementById('assistance-options').classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('#assistance-options button:not(:last-child)');
    const inputField = document.querySelector('input[type="text"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Vous avez choisi: ${button.textContent}`);
        });
    });

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Vous avez dit: ${inputField.value}`);
            inputField.value = '';
        }
    });
});
