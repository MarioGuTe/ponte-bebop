// Selectors

const contactPage = document.getElementById("contact-page");
const contactBtn = document.querySelector(".contact-button");

// Event Listeners
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactPage.scrollIntoView();
});
