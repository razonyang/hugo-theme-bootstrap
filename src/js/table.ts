class TableWrapper {
  constructor(public elements?: NodeListOf<HTMLElement>) {
  }

  run() {
    if (this.elements.length === 0) {
      return;
    }

    this.elements.forEach((table) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-responsive';
      wrapper.appendChild(table.cloneNode(true));
      table.parentNode.replaceChild(wrapper, table);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  (new TableWrapper(document.querySelectorAll('table'))).run();
});
