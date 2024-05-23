// script.js

function showAssistanceOptions() {
    document.getElementById('main-options').classList.add('hidden');
    document.getElementById('assistance-options').classList.remove('hidden');
}

function showAccountOptions() {
    document.getElementById('assistance-options').classList.add('hidden');
    document.getElementById('account-options').classList.remove('hidden');
}

function showMainOptions() {
    document.getElementById('main-options').classList.remove('hidden');
    document.getElementById('assistance-options').classList.add('hidden');
    document.getElementById('account-options').classList.add('hidden');
}

function sendMessage() {
    const inputField = document.querySelector('input[type="text"]');
    // alert(`Vous avez dit: ${inputField.value}`);
    inputField.value = '';
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('#assistance-options button:not(:last-child)');
    const sendButton = document.querySelector('.flex button.bg-blue-500');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // alert(`Vous avez choisi: ${button.textContent}`);
        });
    });

    sendButton.addEventListener('click', sendMessage);

    const inputField = document.querySelector('input[type="text"]');
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Rediriger vers la page d'accueil lorsque le bouton de fermeture est cliqué
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
        window.location.href = 'https://www.votrepageaccueil.com'; // Remplacez par l'URL de votre page d'accueil
    });
});
