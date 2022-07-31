const highlight = document.querySelector(".galary-highlight");
const previews = document.querySelectorAll(".tech__preview img");

previews.forEach((preview) => {
  preview.addEventListener("click", function () {
    const smallSrc = this.src;
    const bigSrc = smallSrc.replace("small", "big");
    previews.forEach((preview) => preview.classList.remove("tech__active"));
    highlight.src = bigSrc;
    preview.classList.add("tech__active");
  });
});
