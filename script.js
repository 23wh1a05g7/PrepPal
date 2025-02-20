// Smooth scroll for buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Hide chatbot hint when chatbot is clicked
document.addEventListener("click", function (event) {
    const chatbotIcon = document.querySelector('[data-id="4824496137"]'); // Chatbot iframe/button
    const chatbotHint = document.getElementById("chatbot-hint");

    if (chatbotIcon && chatbotIcon.contains(event.target)) {
        chatbotHint.style.display = "none"; // Hide hint
    }
});
