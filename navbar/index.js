function toggleShow() {
  const navItems = document.querySelectorAll(".nav-items");
  navItems.forEach((navItem) => {
    navItem.classList.toggle("show");
  });
  const navToggle = document.querySelectorAll(".nav-toggle");
  navToggle.forEach((icon) => {
    icon.classList.toggle("hide-toggle");
  });
}

function toggleActive(event) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((navLink) => {
    if (navLink === event.target) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

document.querySelectorAll(".nav-toggle").forEach((icon) => {
  icon.addEventListener("click", toggleShow);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", toggleActive);
});
