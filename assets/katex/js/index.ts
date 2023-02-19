import renderMathInElement from "katex/dist/contrib/auto-render.js";
import options from "./options";

document.addEventListener("DOMContentLoaded", () => {
  renderMathInElement(document.body, options);
});
