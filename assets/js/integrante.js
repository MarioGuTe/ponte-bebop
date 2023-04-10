// const memberDescription = localStorage.getItem("description-key");
const memberObject = JSON.parse(localStorage.getItem("memberObject"));

// animation stopper
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Selectors
const profileName = document.querySelector(".profile-name");
const profileBody = document.querySelector(".profile-body");
const profileImg = document.querySelector(".profile-image");
const memberInstagram = document.querySelector(".member-instagram");
const memberMail = document.querySelector(".member-mail");
const memberWhatsapp = document.querySelector(".member-whatsapp");
// Nav Selectors
const listLinks = document.querySelectorAll("ul li");
const list = document.querySelector("ul");
const burgerMenu = document.querySelector(".burger-menu");

console.log(memberObject.object_instagram);

profileName.textContent = memberObject.object_name;
profileBody.textContent = memberObject.object_description;
profileImg.src = memberObject.object_img_small;
memberInstagram.href = memberObject.object_instagram;
memberMail.href = memberObject.object_mail;
memberWhatsapp.href = memberObject.object_whatsapp;

// Event Listeners
burgerMenu.addEventListener("click", () => {
  list.classList.toggle("active");

  // animation links
  listLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
      console.log(link.style.animation);
    } else {
      link.style.animation = `listLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
      console.log(link.style.animation);
    }
  });
});

document.onclick = function (e) {
  if (e.target !== list && e.target !== burgerMenu) {
    list.classList.remove("active");
    listLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
        console.log(link.style.animation);
      }
    });
  } else if (e.target === list) {
    list.classList.add("active");
  }
};
