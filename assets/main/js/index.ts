import "bootstrap/dist/js/bootstrap.bundle";

import ActionsPanel from "js/actions-panel";
import App from "js/app";
import Code from "js/code";
import Docs from "js/docs";
import FontSizeSelector from "js/font-size-selector";
import FormValidator from "js/form-validator";
import IFrame from "js/iframe";
import LoadingBar from "js/loading-bar";
import Scroller from "js/scroller";
import SidebarToggle from "js/sidebar-toggle";
import TableWrapper from "js/table-wrapper";
import TOC from "js/toc";
import components from "./components";
import "js/slide";
import "js/search";

new ActionsPanel().run();
new Scroller().run();
new LoadingBar().run();
new SidebarToggle(document.querySelector("#sidebarToggler")).run();
new FontSizeSelector().run();
new Code().run();
new TableWrapper(document.querySelectorAll("table")).run();
new Docs().run();
new FormValidator().run();
new TOC("#post-toc-container", ".sidebar #TableOfContents").run();
new IFrame().run();

const app = new App();
app.attach(...components);
app.run();

import "./custom";
