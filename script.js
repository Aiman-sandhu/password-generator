const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementsList = document.querySelectorAll(".requirement-list li");

const requirements = [
  { regex: /.{8,}/, index: 0 },         // at least 8 characters
  { regex: /[0-9]/, index: 1 },         // at least 1 number
  { regex: /[a-z]/, index: 2 },         // at least 1 lowercase letter
  { regex: /[^A-Za-z0-9]/, index: 3 },  // at least 1 special character
  { regex: /[A-Z]/, index: 4 },         // at least 1 uppercase letter
];

// Live validation
passwordInput.addEventListener("keyup", (e) => {
  requirements.forEach((item) => {
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementsList[item.index];

    if (isValid) {
      requirementItem.firstElementChild.className = "fa-solid fa-check";
      requirementItem.classList.add("valid");
    } else {
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
      requirementItem.classList.remove("valid");
    }
  });
});

// Eye toggle
eyeIcon.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  eyeIcon.className = isPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
});
