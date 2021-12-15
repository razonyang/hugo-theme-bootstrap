import './scss/index.scss';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tab';
import './js/mode';
import './js/palette';
import './js/scroller';
import './js/table';
import './js/font-size';
import './js/toc';
import './js/code';
import './js/sidebar-toggler';
// import './js/popover';
import './js/form-validator';
import './js/top-app-bar';
import './js/loading-bar';

declare global {
  interface Window {
    params: any;
  }
}
