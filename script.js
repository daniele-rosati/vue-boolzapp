document.querySelector('.message-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const input = event.target;
        const message = input.value.trim();
        if (message) {
            addMessage(message, true);
            input.value = '';
        }
    }
});

function addMessage(content, isSent) {
    const messagesList = document.getElementById('messages');
    const message = document.createElement('li');
    message.classList.add(isSent ? 'sent-message' : 'received-message');
    message.textContent = content;
    messagesList.appendChild(message);
}

// Add some initial messages for demonstration purposes
addMessage('Hai portatato fuori il cane?', false);
addMessage('Ricordati di stendere i panni', false )
addMessage('tutto fatto', true);
