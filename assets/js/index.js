const integrantes = [
  {
    name: "BENNY GÓMEZ",
    description:
      "Benny Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error quisquam! Earum repudiandae, tempora maxime, culpa sunt repellendus",
    image: "./assets/images/benny-gomez-full.JPG",
  },
  {
    name: "EMILIO HARTARD",
    description:
      "Emilio Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error quisquam! Earum repudiandae, tempora maxime, culpa sunt repellendus",
    image: "./assets/images/emilio-b-w.png",
  },
  {
    name: "MARIO GUTIÉRREZ",
    description:
      "Mario Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error quisquam! Earum repudiandae, tempora maxime, culpa sunt repellendus",
    image: "./assets/images/mario-b-g.png",
  },
  {
    name: "NICOLÁS PERALES",
    description:
      "Nicolás Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, error quisquam! Earum repudiandae, tempora maxime, culpa sunt repellendus",
    image: "./assets/images/nico-b-n.png",
  },
];

// Selectors
const navTitle = document.querySelector(".nav-title-container");
const topPage = document.getElementById("top-page");
const contactPage = document.getElementById("contact-page");
const contactBtn = document.querySelector(".contact-button");
const aboutPage = document.getElementById("about-page");
const aboutBtn = document.querySelector(".about-button");
const integranteContainer = document.querySelectorAll(".integrante-container");
// Integrante Page Selectors

// const dataIntegrante = document.querySelectorAll("[data-integrante]");

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
  container.addEventListener("click", (e) => {
    integrantes.map((member) => {
      if (container.dataset.integrante === member.name) {
        const memberName = member.name;
        const memberDescription = member.description;
        const memberImg = member.image;
        console.log(memberImg);

        localStorage.setItem(
          "memberObject",
          JSON.stringify({
            object_name: memberName,
            object_description: memberDescription,
            object_img: memberImg,
          })
        );
        // localStorage.setItem("name-key", memberName);
        // localStorage.setItem("description-key", memberDescription);
        toIntegrantePage();
      }
    });
  });
});
