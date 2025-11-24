function toggleTheme() {
  const e = document.documentElement,
    t = document.getElementById("theme-icon"),
    a = e.getAttribute("data-theme");
  try {
    a === "light" ? (e.removeAttribute("data-theme"), localStorage.setItem("theme", "dark"), t.textContent = "☀️") : (e.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"), t.textContent = "🌙")
  } catch (e) {
    console.warn("Theme toggle failed:", e)
  }
}

function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active")
}
document.addEventListener("click", e => {
  const t = document.getElementById("nav-menu");
  t.classList.contains("active") && !e.target.closest(".menu-toggle") && !e.target.closest(".nav-menu") && t.classList.remove("active")
});
(() => {
  try {
    const e = localStorage.getItem("theme");
    e === "light" ? (document.documentElement.setAttribute("data-theme", "light"), document.getElementById("theme-icon").textContent = "🌙") : (document.documentElement.removeAttribute("data-theme"), document.getElementById("theme-icon").textContent = "☀️")
  } catch (e) {
    console.warn("Could not load theme:", e)
  }
})();
