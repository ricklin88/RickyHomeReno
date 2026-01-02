function loadPartial(id, file, callback) {
  const target = document.getElementById(id);
  if (!target) return;

  fetch(file)
    .then(res => res.text())
    .then(data => {
      target.innerHTML = data;
      if (typeof callback === "function") callback();
    });
}

/* HEADER */
loadPartial("site-header", "partials/header.html", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

/* FADE-IN OBSERVER */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* FOOTER */
loadPartial("site-footer", "partials/footer.html", () => {
  const footer = document.getElementById("site-footer");
  if (footer) observer.observe(footer);
});