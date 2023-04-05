// const memberDescription = localStorage.getItem("description-key");
const memberObject = JSON.parse(localStorage.getItem("memberObject"));

// Selectors
const profileName = document.querySelector(".profile-name");
const profileBody = document.querySelector(".profile-body");
const profileImg = document.querySelector(".profile-image");
const memberInstagram = document.querySelector(".member-instagram");
const memberMail = document.querySelector(".member-mail");
const memberWhatsapp = document.querySelector(".member-whatsapp");

console.log(memberObject.object_instagram);

profileName.textContent = memberObject.object_name;
profileBody.textContent = memberObject.object_description;
profileImg.src = memberObject.object_img;
memberInstagram.href = memberObject.object_instagram;
memberMail.href = memberObject.object_mail;
memberWhatsapp.href = memberObject.object_whatsapp;
