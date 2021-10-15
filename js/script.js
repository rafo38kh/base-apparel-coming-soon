const form = document.querySelector(".content__email-box");
const emailInput = document.querySelector(".content__email");
const errorText = document.querySelector(".content__error-text");
const errorIcon = document.querySelector(".content__error");

const valiedateEmail = function (input) {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;

  return reg.test(input);
};

form.addEventListener("submit", (e) => {
  if (
    emailInput.value == null ||
    !valiedateEmail(emailInput.value) ||
    emailInput.value === ""
  ) {
    e.preventDefault();
    errorText.innerHTML = "Please provide a valid email";
    errorIcon.style.display = "inline-block";
  }
});
