import Component from "js/component";

class TableWrapper implements Component {
  constructor(public elements?: NodeListOf<HTMLElement>) {}

  run() {
    if (this.elements.length === 0) {
      return;
    }

    this.elements.forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-responsive";
      wrapper.appendChild(table.cloneNode(true));
      table.parentNode.replaceChild(wrapper, table);
    });
  }
}

export default TableWrapper;
