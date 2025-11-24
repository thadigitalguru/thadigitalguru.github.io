function toggleTheme() {
  const e = document.documentElement,
    t = document.getElementById("theme-icon"),
    a = e.getAttribute("data-theme");
  try {
    a === "light" ? (e.removeAttribute("data-theme"), localStorage.setItem("theme", "dark"), t && (t.textContent = "☀️")) : (e.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"), t && (t.textContent = "🌙"))
  } catch (e) {
    console.warn("Theme toggle failed:", e)
  }
}

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

document.addEventListener("click", e => {
  const t = document.getElementById("nav-menu");
  if (t) {
    t.classList.contains("active") && !e.target.closest(".menu-toggle") && !e.target.closest(".nav-menu") && t.classList.remove("active")
  }
});

(() => {
  try {
    const e = localStorage.getItem("theme");
    const t = document.getElementById("theme-icon");
    if (e === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (t) t.textContent = "🌙";
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (t) t.textContent = "☀️";
    }
  } catch (e) {
    console.warn("Could not load theme:", e)
  }
})();
