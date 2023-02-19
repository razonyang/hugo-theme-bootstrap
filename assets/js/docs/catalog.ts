class Catalog {
  run() {
    const active = document.querySelector(
      ".docs-catalog li.active"
    ) as HTMLElement;
    if (active) {
      active.focus();
    }
  }
}

export default Catalog;
