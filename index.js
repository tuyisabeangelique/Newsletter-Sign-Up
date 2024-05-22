const subscribeButton = document.querySelector(".subscribe-btn");

subscribeButton.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const emailAlert = document.querySelector(".email-alert");

  let isValid = true;

  if (!isValidEmail(email)) {
    isValid = false;
    document.querySelector(".email-alert").style.display = "block";
    document.querySelector("#email").classList.add("form-error");
  } else {
    document.querySelector(".email-alert").style.display = "none";
  }

  if (isValid) {
    document.querySelector(".success-message").style.display = "flex";
    document.querySelector(".main").style.display = "none";
    document.querySelector(".success-email").innerHTML = email;
  } else {
    document.querySelector(".success-message").style.display = "none";
    document.querySelector(".main").style.display = "flex";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const dismissButton = document.querySelector(".dismiss-btn");

dismissButton.addEventListener("click", () => {
  document.querySelector(".success-message").style.display = "none";
  document.querySelector(".main").style.display = "flex";
});
