document.addEventListener('DOMContentLoaded', function() {
    var lastVisit = localStorage.getItem('lastVisit');
  
    if (!lastVisit) {
      showWelcomeMessage();
    } else {
      var daysSinceLastVisit = Math.floor((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));
  
      if (daysSinceLastVisit === 0) {
          showMessage("Back so soon! Awesome!");
      } else if (daysSinceLastVisit === 1) {
          showMessage("You last visited 1 day ago");
      } else {
          showMessage("You last visited " + daysSinceLastVisit + " days ago");
        }
    }
  
    localStorage.setItem('lastVisit', Date.now());
  });
  
  function showWelcomeMessage() {
    showMessage("Welcome! Let us know if you have any questions."); 
  }
  
  function showMessage(message) {
    var messageDiv = document.getElementById('last-visit-message');
    messageDiv.textContent = message;
  }