// const memberDescription = localStorage.getItem("description-key");
const memberObject = JSON.parse(localStorage.getItem("memberObject"));

const profileName = document.querySelector(".profile-name");
const profileBody = document.querySelector(".profile-body");

profileName.textContent = memberObject.object_name;
profileBody.textContent = memberObject.object_description;
