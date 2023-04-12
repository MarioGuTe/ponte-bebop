// animation stopper
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Nav Selectors
const listLinks = document.querySelectorAll("ul li");
const list = document.querySelector("ul");
const burgerMenu = document.querySelector(".burger-menu");

// Event Listeners
burgerMenu.addEventListener("click", () => {
  list.classList.toggle("active");

  // animation links
  listLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `listLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});

document.onclick = function (e) {
  e.stopPropagation();
  if (e.target !== listLinks && e.target !== burgerMenu) {
    list.classList.remove("active");
    listLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      }
    });
  } else if (e.target === listLinks) {
    list.classList.add("active");
  }
};

const toMainPage = () => {
  return (window.location.href = "index.html");
};

listLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const linkDirection = link.textContent;

    localStorage.setItem("integrante-key", linkDirection);

    toMainPage();
  });
});
