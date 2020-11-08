class AnchorLink {
  constructor(public elements: NodeListOf<HTMLElement>) {
  }

  init() {
    if (this.elements.length === 0) {
      return;
    }

    this.elements.forEach((anchor) => {
      const id = anchor.getAttribute('id');
      if (!id) {
        return;
      }
      const a = document.createElement('a');
      a.setAttribute('href', `#${id}`);
      a.setAttribute('class', 'anchor');
      a.innerHTML = '<i class="fas fa-fw fa-link"></i>';
      anchor.appendChild(a);
    });
  }
}

export default AnchorLink;
