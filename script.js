document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for the site's navigation links.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Small interaction for the main call-to-action button.
  const button = document.querySelector(".hero .btn");
  if (button) {
    button.addEventListener("mouseenter", () => button.classList.add("button-hover"));
    button.addEventListener("mouseleave", () => button.classList.remove("button-hover"));
  }
});
