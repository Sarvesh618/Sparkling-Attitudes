function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

    addUserMessage(userInput);
    document.getElementById('user-input').value = "";

    const botResponse = getBotResponse(userInput);
    setTimeout(() => {
        addBotMessage(botResponse);
    }, 500); // Simulate delay
}

function addUserMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message user-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    const lowercaseInput = userInput.toLowerCase();

    if (lowercaseInput.includes("sad") || lowercaseInput.includes("down") || lowercaseInput.includes("depressed")) {
        return "I'm sorry to hear that you're feeling sad. Remember, it's okay to feel sad sometimes, but it's important to take care of yourself and find ways to feel better. Here are some suggestions for managing your emotions:\n\n" +
               "1. Talk to someone you trust about how you're feeling. Sharing your emotions with others can help you feel better.\n" +
               "2. Engage in activities that bring you joy and relaxation, such as reading a book, listening to music, or going for a walk.\n" +
               "3. Practice self-care by getting enough rest, eating well, and exercising regularly.\n" +
               "4. Consider seeking professional help if you're struggling to cope with your emotions. A therapist or counselor can provide additional support and guidance.\n" +
               "Remember, it's important to prioritize your mental health and well-being. You are not alone, and there are resources available to help you feel better.";
    } else if (lowercaseInput.includes("angry") || lowercaseInput.includes("frustrated") || lowercaseInput.includes("mad")) {
        return "Hello there! It sounds like you're feeling angry. Here are some ways to help manage your anger:\n\n" +
               "1. Take deep breaths and count to 10 before responding to the situation that made you angry.\n" +
               "2. Take a break and remove yourself from the situation if possible.\n" +
               "3. Practice mindfulness or meditation to help calm your mind and body.\n" +
               "4. Talk to someone you trust about how you're feeling.\n" +
               "5. Engage in physical activity or exercise to release pent-up emotions.\n" +
               "Remember, it's important to find healthy ways to manage your anger and not let it control you. We're here to support you through this.";
    } else if (lowercaseInput.includes("happy") || lowercaseInput.includes("joyful") || lowercaseInput.includes("excited")) {
        return "That's great to hear. Enjoy every moment in your life. Let us know if there's anything specific you'd like assistance with regarding to emotions.";
    } else if (lowercaseInput.includes("anxious") || lowercaseInput.includes("nervous") || lowercaseInput.includes("worried")) {
        return "I'm sorry to hear that you're feeling anxious. Here are some ideas to help manage anxiety:\n\n" +
               "1. Practice deep breathing exercises to help calm your mind and body.\n" +
               "2. Try engaging in physical activity or exercise to release pent-up energy and tension.\n" +
               "3. Journaling can be a helpful way to express and process your thoughts and emotions.\n" +
               "4. Reach out to a trusted friend, family member, or therapist for support and guidance.\n" +
               "5. Mindfulness techniques, such as meditation or yoga, can help bring a sense of calm and focus.\n" +
               "Remember that it's okay to ask for help and seek professional support if needed.\n" +
               "It's important to prioritize self-care and take steps to manage your mental health. You're not alone in this, and there are resources and strategies available to help you navigate through difficult emotions.";
    } else {
        return "I'm here to help. Can you tell me more about how you're feeling?";
    }
}
