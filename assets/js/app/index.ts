import Component from "js/component";

class App {
  components: Component[] = [];

  attach(...components: Component[]) {
    this.components.push(...components);
  }

  run() {
    this.components.forEach(function (component) {
      try {
        component.run();
      } catch (err) {
        console.error(typeof component, err);
      }
    });
  }
}

export default App;
