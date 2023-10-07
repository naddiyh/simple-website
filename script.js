const menu = document.getElementById("menu");
const navBar = document.getElementById("nav-ul");
const closee = document.getElementById("close");

menu.addEventListener("click", () => {
  navBar.classList.toggle("show");
});

closee.addEventListener("click", () => {
  navBar.classList.remove("show");
});

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");

const readMore = document.getElementById("readmore");
const about = document.getElementById("about");

readMore.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

//Function Checking Form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkingForm();
});

function checkingForm() {
  //Checking username
  if (username.value === "") {
    showError(username, "Please input your name");
  } else {
    showSuccess(username);
  }

  //Checking Email
  if (email.value === "") {
    showError(email, "Please input your email");
  } else if (!isEmail(email.value)) {
    showError(email, "Please check your e-mail address is correct");
  } else {
    showSuccess(email);
  }

  //Checking Textarea
  if (textarea.value === "") {
    showError(textarea, "Please input a message");
  } else {
    showSuccess(textarea);
  }

  if (username.value && isEmail(email.value) && textarea.value) {
    username.value = "";
    email.value = "";
    textarea.value = "";
  }
}

function showError(input, message) {
  const subform = input.parentElement;
  subform.className = "subForm error";
  const small = subform.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const subform = input.parentElement;
  subform.className = "subForm success";
}

function isEmail(email) {
  const valid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return valid.test(email);
}

//Navigation Scrolling
const home = document.getElementById("home");
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const homeHeight = home.clientHeight;
  if (scrollPosition > homeHeight) {
    navbar.classList.add("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
});
