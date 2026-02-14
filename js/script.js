// ===== Theme Toggle =====
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(mode) {
  if (mode === "light") {
    body.classList.add("light");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.remove("light");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = body.classList.contains("light") ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});

// ===== Greeting Message =====
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) greeting.textContent = "Good morning 👋";
else if (hour < 18) greeting.textContent = "Good afternoon 👋";
else greeting.textContent = "Good evening 👋";

// ===== Footer Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile Menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ===== Contact Form Interaction =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formStatus.textContent = "✅ Message sent successfully! (Demo only)";
  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 3500);
});
