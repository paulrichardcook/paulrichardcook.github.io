(() => {
  const placeholder = document.getElementById("site-header");
  if (!placeholder) return;

  const headerUrl = new URL("../header.html", document.currentScript.src);

  fetch(headerUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`Unable to load ${headerUrl}`);
      return response.text();
    })
    .then((header) => {
      placeholder.outerHTML = header;

      const siteHeader = document.querySelector(".site-header-nav");
      const menuToggle = document.querySelector(".menu-toggle");
      const navMenu = document.querySelector(".nav-menu");

      if (siteHeader && menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
          const isOpen = siteHeader.classList.toggle("nav-open");
          menuToggle.setAttribute("aria-expanded", String(isOpen));
          navMenu.classList.toggle("open", isOpen);
        });
      }
    })
    .catch((error) => {
      console.error("Unable to load the shared Aviala header.", error);
    });
})();
