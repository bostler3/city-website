import data from '../data/data.mjs';

const mainnav = document.querySelector('#sub-nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const selectElement = document.querySelector('#questions');

data.forEach(entry => {
    const optionElement = document.createElement('option');
    optionElement.value = entry.id;
    optionElement.textContent = entry.question;
    selectElement.appendChild(optionElement);
});

const askButton = document.querySelector('#ask-button');
const chatWindow = document.querySelector('#chat-window');

// Handle the Ask button click event
askButton.addEventListener('click', () => {
    const selectedQuestionID = Number(selectElement.value);
    if (!selectedQuestionID) return;
    const entry = data.find(item => item.id === selectedQuestionID);
    addMessage("user", entry.question);
    addMessage("bot", entry.response);

    chatWindow.scrollTop = chatWindow.scrollHeight;
});

function addMessage(sender, message) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('message-wrapper', sender);
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    
    wrapper.appendChild(messageElement);
    chatWindow.appendChild(wrapper);
}