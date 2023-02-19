import { Search } from "./search";

document.addEventListener("DOMContentLoaded", () => {
  new Search(document.querySelector("#searchForm")).run();
});
