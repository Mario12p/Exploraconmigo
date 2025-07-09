document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("hamburger");
  const navMenu = document.getElementById("menu");
  const icon = btnMenu?.querySelector("i");

  if (btnMenu && navMenu && icon) {
    btnMenu.addEventListener("click", () => {
      navMenu.classList.toggle("activo");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
      document.body.classList.toggle("no-scroll"); // 👈 Esta línea bloquea el fondo al abrir menú
    });

    document.querySelectorAll(".menu a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove("activo");
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
          document.body.classList.remove("no-scroll"); // 👈 Esta línea lo restaura al cerrarse
        }
      });
    });
  }
});
