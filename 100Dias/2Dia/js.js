let icon = document.querySelector(".plates");
icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  icon.classList.remove("no-animation");
});
