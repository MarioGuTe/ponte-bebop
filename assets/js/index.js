const integrantes = [
  {
    name: "BENNY GÓMEZ",
    description:
      "Benny Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error quisquam! Earum repudiandae, tempora maxime, culpa sunt repellendus",
    image: "./assets/images/benny-gomez-full.JPG",
    small_image: "./assets/images/benny-small.png",
    instagram: "https://www.instagram.com/gmbenny_/",
    mail: "mailto:mariogutierreztello@gmail.com",
    whatsapp: "https://wa.me/56945867403",
  },
  {
    name: "EMILIO HARTARD",
    description:
      "Emilio Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error quisquam! Earum repudiandae, tempora maxime, culpa sunt repellendus",
    image: "./assets/images/emilio-b-w-1.png",
    small_image: "./assets/images/emilio-small.png",
    instagram: "https://www.instagram.com/emilio.andre.1914/",
    mail: "mailto:mariogutierreztello@gmail.com",
    whatsapp: "https://wa.me/56962363174",
  },
  {
    name: "MARIO GUTIÉRREZ",
    description:
      "Mario Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error quisquam! Earum repudiandae, tempora maxime, culpa sunt repellendus",
    image: "./assets/images/mario-b-g.png",
    small_image: "./assets/images/mario-small.png",
    instagram: "https://www.instagram.com/mariogutierrezte/",
    mail: "mailto:mariogutierreztello@gmail.com",
    whatsapp: "https://wa.me/56942642310",
  },
  {
    name: "NICOLÁS PERALES",
    description:
      "Nicolás Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error quisquam! Earum repudiandae, tempora maxime, culpa sunt repellendus",
    image: "./assets/images/nico-b-n.png",
    small_image: "./assets/images/nico-b-n.png",
    instagram: "https://www.instagram.com/pera_less/",
    mail: "mailto:mariogutierreztello@gmail.com",
    whatsapp: "https://wa.me/56974303146",
  },
];

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
// Front Page
const navTitle = document.querySelector(".nav-title-container");
const topPage = document.getElementById("top-page");
const contactPage = document.getElementById("contact-page");
const contactBtn = document.querySelector(".contact-button");
const aboutBtn = document.querySelector(".about-button");
const listLinks = document.querySelectorAll("ul li");
const list = document.querySelector("ul");
const burgerMenu = document.querySelector(".burger-menu");
// Inrtegrantes Section
const integranteContainer = document.querySelectorAll(".integrante-container");
const integrantesSection = document.querySelector(".integrantes");
// Bio Section
const aboutPage = document.getElementById("about-page");
// Contact Section
const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit-btn");
// Functions
const modal = document.querySelector("#modal");

const integrantePageDirection = localStorage.getItem("integrante-key");

function toBio() {
  if (integrantePageDirection === "Bio") {
    aboutPage.scrollIntoView();
    localStorage.removeItem("integrante-key");
  }
}

toBio();

function toIntegrantes() {
  if (integrantePageDirection === "Integrantes") {
    integrantesSection.scrollIntoView();
    localStorage.removeItem("integrante-key");
  }
}

toIntegrantes();

function toContact() {
  if (integrantePageDirection === "Contacto") {
    contactPage.scrollIntoView();
    localStorage.removeItem("integrante-key");
  }
}

toContact();

document.onclick = function (e) {
  if (e.target !== list && e.target !== burgerMenu) {
    list.classList.remove("active");
    listLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      }
    });
  } else if (e.target === list) {
    list.classList.add("active");
  }
};

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

function sendEmail(e) {
  e.preventDefault();
  const contactName = document.querySelector(".contact-name");
  const contactEmail = document.querySelector(".contact-email");
  const contactMessage = document.querySelector(".contact-message");

  var params = {
    from_name: contactName.value,
    email_id: contactEmail.value,
    message: contactMessage.value,
  };
  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
  topPage.scrollIntoView({ behavior: "smooth" });
  emailjs
    .send("service_05bgfvb", "template_3wxl3dn", params)
    .then(function (res) {
      modal.showModal();
      setTimeout(() => {
        modal.close();
      }, 5000);
    });
}

// Event Listeners

navTitle.addEventListener("click", (e) => {
  e.preventDefault();
  topPage.scrollIntoView({ behavior: "smooth" });
  console.log("1");
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactPage.scrollIntoView({ behavior: "smooth" });
  console.log("2");
});

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aboutPage.scrollIntoView({ behavior: "smooth" });
  console.log("3");
});

const toIntegrantePage = () => {
  return (window.location.href = "integrante.html");
};

const toVideosPage = () => {
  return (window.location.href = "videos.html");
};

integranteContainer.forEach((container) => {
  container.addEventListener("click", () => {
    integrantes.map((member) => {
      if (container.dataset.integrante === member.name) {
        const memberName = member.name;
        const memberDescription = member.description;
        const memberImg = member.image;
        const memberImgSmall = member.small_image;
        const memberInstagram = member.instagram;
        const memberMail = member.mail;
        const memberWhatsapp = member.whatsapp;

        localStorage.setItem(
          "memberObject",
          JSON.stringify({
            object_name: memberName,
            object_description: memberDescription,
            object_img: memberImg,
            object_img_small: memberImgSmall,
            object_instagram: memberInstagram,
            object_mail: memberMail,
            object_whatsapp: memberWhatsapp,
          })
        );

        toIntegrantePage();
      }
    });
  });
});

listLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.textContent === "Integrantes") {
      integrantesSection.scrollIntoView({ behavior: "smooth" });
    } else if (link.textContent === "Bio") {
      aboutPage.scrollIntoView({ behavior: "smooth" });
    } else if (link.textContent === "Contacto") {
      contactPage.scrollIntoView({ behavior: "smooth" });
    } else if (link.textContent === "Videos") {
      toVideosPage();
    }
  });
});

form.addEventListener("submit", sendEmail);
