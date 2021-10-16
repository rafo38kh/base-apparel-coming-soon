const form = document.querySelector(".js-form");
const emailInput = document.querySelector(".js-input");
const errorText = document.querySelector(".js__error-text");
const errorIcon = document.querySelector(".js__error-icon");

console.log(errorIcon);

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
