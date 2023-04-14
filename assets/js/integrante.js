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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Selectors
const profileName = document.querySelector(".profile-name");
const profileBody = document.querySelector(".profile-body");
const profileImg = document.querySelector(".profile-image");
const memberInstagram = document.querySelector(".member-instagram");
const memberMail = document.querySelector(".member-mail");
const memberWhatsapp = document.querySelector(".member-whatsapp");
const sourceSetImage = document.querySelector(".source-img");
console.log(sourceSetImage);
// Nav Selectors
const listLinks = document.querySelectorAll("ul li");
const list = document.querySelector("ul");
const burgerMenu = document.querySelector(".burger-menu");

profileName.textContent = memberObject.object_name;
profileBody.textContent = memberObject.object_description;
profileImg.src = memberObject.object_img_small;
memberInstagram.href = memberObject.object_instagram;
memberMail.href = memberObject.object_mail;
memberWhatsapp.href = memberObject.object_whatsapp;
sourceSetImage.srcset = memberObject.object_img;

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

const toVideosPage = () => {
  return (window.location.href = "videos.html");
};

listLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const linkDirection = link.textContent;

    if (linkDirection === "Videos") {
      toVideosPage();
    } else {
      localStorage.setItem("integrante-key", linkDirection);
      toMainPage();
    }
  });
});

// let windowWidth = window.innerWidth;
// if (windowWidth >= 600) {
//   profileImg.src = "./assets/images/benny-gomez-full.JPG";
// }
