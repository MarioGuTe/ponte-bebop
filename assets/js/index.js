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
const navTitle = document.querySelector(".nav-title-container");
const topPage = document.getElementById("top-page");
const contactPage = document.getElementById("contact-page");
const contactBtn = document.querySelector(".contact-button");
const aboutPage = document.getElementById("about-page");
const aboutBtn = document.querySelector(".about-button");
const integranteContainer = document.querySelectorAll(".integrante-container");
const listLinks = document.querySelectorAll("ul li");
const integrantesSection = document.querySelector(".integrantes");

// Functions
const navSlide = () => {
  const list = document.querySelector("ul");
  const burgerMenu = document.querySelector(".burger-menu");
  const listLinks = document.querySelectorAll("ul li");

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
    // Burger animation
    burgerMenu.classList.toggle("toggle-burger");
  });
};

navSlide();

// Event Listeners

navTitle.addEventListener("click", (e) => {
  e.preventDefault();
  topPage.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactPage.scrollIntoView({ behavior: "smooth" });
});

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aboutPage.scrollIntoView({ behavior: "smooth" });
});

const toIntegrantePage = () => {
  return (window.location.href = "integrante.html");
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

        console.log(memberImg);

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

listLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (link.textContent === "Integrantes") {
      integrantesSection.scrollIntoView({ behavior: "smooth" });
    } else if (link.textContent === "Bio") {
      aboutPage.scrollIntoView({ behavior: "smooth" });
    } else if (link.textContent === "Contacto") {
      contactPage.scrollIntoView({ behavior: "smooth" });
    }
  });
});
