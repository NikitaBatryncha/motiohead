document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#container");
  const lastWrapper = document.querySelector("#lastWrapper");

  function moveContainer() {
    if (window.innerWidth >= 900) {
      if (!lastWrapper.contains(container)) {
        lastWrapper.insertBefore(container, lastWrapper.firstChild);
      }
    } else {
      if (lastWrapper.contains(container)) {
        document.querySelector(".footer__linksContainer").insertBefore(container, lastWrapper);
      }
    }
  }

  window.addEventListener("resize", moveContainer);
  moveContainer(); 
});
