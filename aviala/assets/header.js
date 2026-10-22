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
    })
    .catch((error) => {
      console.error("Unable to load the shared Aviala header.", error);
    });
})();
