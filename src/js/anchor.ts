class AnchorLink {
  constructor(public elements: NodeListOf<HTMLElement>) {
  }

  run() {
    if (this.elements.length === 0) {
      return;
    }

    this.elements.forEach((element) => {
      element.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((anchor) => {
        const id = anchor.getAttribute('id');
        if (!id) {
          return;
        }
        const a = document.createElement('a');
        a.setAttribute('href', `#${id}`);
        a.setAttribute('class', 'anchor');
        a.innerHTML = '<i class="fas fa-link"></i>';
        anchor.appendChild(a);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  (new AnchorLink(document.body.querySelectorAll('.post-content'))).run();
});
