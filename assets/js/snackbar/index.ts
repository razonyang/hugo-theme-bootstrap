class Snackbar {
  container: HTMLElement;

  constructor() {
    const container = document.createElement("div");
    container.className =
      "snackbar-container position-fixed d-flex justify-content-center align-items-center top-50 start-50 flex-column";
    document.body.appendChild(container);
    this.container = container;
  }

  show(body: string, duration = 2000) {
    const ele = document.createElement("div");
    ele.className = "snackbar text-bg-secondary rounded px-3 py-2 my-1";
    ele.innerText = body;
    this.container.appendChild(ele);
    setTimeout(() => {
      ele.remove();
    }, duration);
  }
}

const snackbar = new Snackbar();
export default snackbar;
