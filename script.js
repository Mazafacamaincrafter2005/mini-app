document.getElementById('sendMessage').addEventListener('click', () => {
    const botToken = 'YOUR_BOT_TOKEN';
    const chatId = 'YOUR_CHAT_ID';
    const message = 'Hello from Mini App!';

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
});