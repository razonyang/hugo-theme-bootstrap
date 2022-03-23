import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/offcanvas';
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/tab';
import 'bootstrap/js/src/carousel';

import App from 'js/app';
import Collapse from 'js/collapse/collapse';
import TopAppBar from 'js/top-app-bar';
import ModeToggle from 'js/mode';
import PaletteSelector from 'js/palettes';
import LoadingBar from 'js/loading-bar';
import Scroller from 'js/scroller';
import SidebarToggle from 'js/sidebar-toggle';
import FontSizeSelector from 'js/font-size-selector';
import Code from 'js/code';
import TableWrapper from 'js/table-wrapper';
import TOC from 'js/toc';
import Docs from 'js/docs';
import FormValidator from 'js/form-validator';
import components from './components';

const app = new App();
app.attach(
    new Collapse(),
    new TopAppBar(),
    new ModeToggle(document.querySelector('#modeSwitcher')),
    new PaletteSelector(),
    new Scroller(),
    new LoadingBar(),
    new SidebarToggle(document.querySelector('#sidebarToggler')),
    new FontSizeSelector(document.getElementById('fontSize') as HTMLInputElement),
    new Code(),
    new TableWrapper(document.querySelectorAll('table')),
    new TOC(document.querySelector('#offcanvasTOC')),
    new Docs(),
    new FormValidator(),
    ...components
);
app.run();

import './custom';
