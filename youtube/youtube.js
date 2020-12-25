const title = document.querySelector(".title_text");
const button = document.querySelector("button");

button.addEventListener('click', () => {
  button.classList.toggle('clicked');
  title.classList.toggle('clamp');
});