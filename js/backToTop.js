document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.querySelector("#toTopButton");

  window.addEventListener("scroll", function () {
    if (window.innerWidth > 900) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
