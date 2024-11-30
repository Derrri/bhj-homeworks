const tabContainers = document.querySelectorAll(".tabs");

tabContainers.forEach((container) => {
  const links = Array.from(container.querySelectorAll(".tab"));
  const tabs = Array.from(container.querySelectorAll(".tab__content"));

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => item.classList.remove("tab_active"));
      link.classList.add("tab_active");

      const index = links.indexOf(link);

      tabs.forEach((tab, tabIndex) => {
        tab.classList.toggle("tab__content_active", tabIndex === index);
      });
    });
  });
});