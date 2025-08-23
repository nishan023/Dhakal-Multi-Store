document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
  });

  // Add padding to body to account for fixed navbar
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    document.body.style.paddingTop = navbar.offsetHeight + "px";
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Floating social media button
  const toggleButton = document.getElementById("toggle-button");
  const socialMenu = document.getElementById("social-menu");

  if (toggleButton && socialMenu) {
    toggleButton.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleButton.classList.toggle("open");
      socialMenu.classList.toggle("visible");
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      toggleButton &&
      toggleButton.classList.contains("open") &&
      !socialMenu.contains(e.target)
    ) {
      toggleButton.classList.remove("open");
      socialMenu.classList.remove("visible");
    }
  });
}); 