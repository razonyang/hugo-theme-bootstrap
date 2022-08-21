import 'bootstrap/dist/js/bootstrap.bundle';

import App from 'js/app';
import ActionsPanel from 'js/actions-panel';
import LoadingBar from 'js/loading-bar';
import Scroller from 'js/scroller';
import SidebarToggle from 'js/sidebar-toggle';
import FontSizeSelector from 'js/font-size-selector';
import Code from 'js/code';
import TableWrapper from 'js/table-wrapper';
import Docs from 'js/docs';
import FormValidator from 'js/form-validator';
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
  ...components
);
app.run();

import './custom';
