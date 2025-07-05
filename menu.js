document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("hamburger");
  const navMenu = document.getElementById("menu");
  const icon = btnMenu?.querySelector("i");

  if (btnMenu && navMenu && icon) {
    btnMenu.addEventListener("click", () => {
      navMenu.classList.toggle("activo");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });

    document.querySelectorAll(".menu a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove("activo");
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
      });
    });
  }
});
