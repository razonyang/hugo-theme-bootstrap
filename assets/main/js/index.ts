import 'bootstrap/dist/js/bootstrap.bundle';

import ActionsPanel from 'js/actions-panel';
import App from 'js/app';
import Code from 'js/code';
import Docs from 'js/docs';
import FontSizeSelector from 'js/font-size-selector';
import FormValidator from 'js/form-validator';
import LoadingBar from 'js/loading-bar';
import Scroller from 'js/scroller';
import SidebarToggle from 'js/sidebar-toggle';
import TableWrapper from 'js/table-wrapper';
import TOC from 'js/toc';
import components from './components';

const app = new App();
app.attach(
  new ActionsPanel(),
  new Scroller(),
  new LoadingBar(),
  new SidebarToggle(document.querySelector('#sidebarToggler')),
  new FontSizeSelector(),
  new Code(),
  new TableWrapper(document.querySelectorAll('table')),
  new Docs(),
  new FormValidator(),
  new TOC('#post-toc-container', '#TableOfContents'),
  ...components
);
app.run();

import './custom';

