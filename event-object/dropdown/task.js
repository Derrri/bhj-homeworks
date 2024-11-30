const dropdowns = Array.from(document.querySelectorAll(".dropdown"));

dropdowns.forEach((dropdown) => {
  const valueElement = dropdown.querySelector(".dropdown__value");
  const listElement = dropdown.querySelector(".dropdown__list");

  valueElement.addEventListener("click", (e) => {
    e.preventDefault();
    listElement.classList.toggle("dropdown__list_active");
  });

  const links = Array.from(listElement.querySelectorAll(".dropdown__link"));

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      valueElement.textContent = link.textContent;
      listElement.classList.remove("dropdown__list_active");
    });
  });
});

document.addEventListener("click", (e) => {
  const target = e.target.closest(".dropdown");
  if (!target) {
    dropdowns.forEach((dropdown) => {
      const listElement = dropdown.querySelector(".dropdown__list");
      listElement.classList.remove("dropdown__list_active");
    });
  }
});




