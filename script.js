
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menuBtn");

  // Mobile navigation
  if (menuButton && sidebar) {
    menuButton.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Dashboard page navigation
  document.querySelectorAll("[data-page]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const pageName = item.dataset.page;
      const targetPage = document.getElementById("page-" + pageName);

      if (!targetPage) return;

      document.querySelectorAll(".page").forEach((page) => {
        page.classList.remove("active");
      });

      targetPage.classList.add("active");

      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle(
          "active",
          link.dataset.page === pageName
        );
      });

      if (sidebar) sidebar.classList.remove("open");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      history.replaceState(null, "", "#" + pageName);
    });
  });

  // Close mobile menu when tapping outside it
  document.addEventListener("click", (event) => {
    if (
      sidebar &&
      menuButton &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      sidebar.classList.remove("open");
    }
  });

  // Open page from URL hash
  const requestedPage = window.location.hash.replace("#", "");
  const requestedElement = document.getElementById(
    "page-" + requestedPage
  );

  if (requestedElement) {
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active");
    });

    requestedElement.classList.add("active");

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle(
        "active",
        link.dataset.page === requestedPage
      );
    });
  }
});
