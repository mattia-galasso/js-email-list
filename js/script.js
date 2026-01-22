//? DOM ELEMENTS
const emailList = document.getElementById("email-list");
const newGenButton = document.getElementById("new-gen-button");

//? GENERAL VARIABLES
const emailNumber = 10;

newGenButton.addEventListener("click", generateMail);

function generateMail(whoManyEmail) {
  emailList.innerHTML = "";

  for (let i = 0; i < emailNumber; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((res) => {
        const randomEmail = res.data.response;
        emailList.innerHTML += `
            <li class="email-item">
              <a href="mailto:${randomEmail}">${randomEmail}</a>
            </li>
          `;
      });
  }
}
