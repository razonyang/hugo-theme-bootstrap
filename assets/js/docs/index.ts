import Component from "js/component";
import Catalog from "./catalog";

class Docs implements Component {
  run() {
    new Catalog().run();
  }
}

export default Docs;
