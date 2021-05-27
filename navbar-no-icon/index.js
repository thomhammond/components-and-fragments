function toggleMenuItems(event) {
  const navItems = document.querySelectorAll(".nav-items");
  navItems.forEach((navItem) => {
    navItem.classList.toggle("show");
  });
}

document.querySelector(".menu-btn").addEventListener("click", function () {
  toggleMenuItems();
  this.classList.toggle("change");
});
