/**
 * This function collects the number entered in the DOM input
 * @param {event} e
 */
function handlegenerateMail(e) {
  e.preventDefault();
  emailCard.classList.add("d-none");
  loadingAlert.classList.remove("d-none");
  const emailNumber = numberInput.value;
  generateMail(emailNumber);
}

/**
 * This function generate a number of email
 * @param {number} isEMailNumber email number inserted in the DOM
 */
function generateMail(isEMailNumber) {
  const receivedEmails = [];

  for (let i = 0; i < isEMailNumber; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((res) => {
        const randomEmail = res.data.response;
        receivedEmails.push(randomEmail);

        console.log(randomEmail);
        console.log(
          `ricevute ${receivedEmails.length}/${isEMailNumber} emails`,
        );
        if (receivedEmails.length >= isEMailNumber) {
          console.log("tutte le email ricevute");

          let emailHTML = ``;
          for (const email of receivedEmails) {
            emailHTML += `
            <li class="text-center list-group-item email-item">
              <a href="mailto:${email}">${email}</a>
            </li>
            `;
          }
          emailList.innerHTML = emailHTML;
          loadingAlert.classList.add("d-none");
          emailCard.classList.remove("d-none");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        emailCard.classList.add("d-none");
        errorAlert.classList.remove("d-none");
        errorText.innerText = errorMessage;
      });
  }
}
