'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    // Get the elements
    let sendMessage = id('groupImage');

    sendMessage.addEventListener('click', function() {
      const input = document.getElementById('chat-input');
      const messageText = input.value.trim();
      sendMessageToServer(messageText);
    });
  }

  function sendMessageToServer(messageText) {
    if (messageText !== '') {
      // Display the user message
      displayMessage(messageText, 'user-message');

      // Clear the input field
      document.getElementById('chat-input').value = '';

      // Send the message to the server using the POST request
      fetch('/chat-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      })
      .then(response => response.json())
      .then(data => {
        // Display the chatbot's response
        displayMessage(data.message, 'bot-message');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }

  function displayMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = text;
    id('messages').appendChild(messageDiv);

    // Scroll to the bottom of the message area to show the newest message
    const messageArea = id('chat-box-body');
    messageArea.scrollTop = messageArea.scrollHeight;
  }

  /**
   * A function to return the element that has the ID attribute with the
   * specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }
})();