(() => {
  "use strict";

  const scroll = (element) => {
    const inner = element.parentElement.querySelector(".slide-inner");
    const step = inner.offsetWidth;
    if (element.classList.contains("slide-control-left")) {
      inner.scrollLeft -= step;
    } else {
      inner.scrollLeft += step;
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slide-control-left").forEach((element) => {
      element.addEventListener("click", () => {
        scroll(element);
      });
    });
    document.querySelectorAll(".slide-control-right").forEach((element) => {
      element.addEventListener("click", () => {
        scroll(element);
      });
    });
  });
})();
