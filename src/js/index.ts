import Scroller from './scroller';
import TableWrapper from './table';
import AnchorLink from './anchor';
import PaletteSwitcher from './palette';
import ModeSwitcher from './mode';
import FontSizeSwitcher from './font-size';
import TOC from './toc';
import Code from './code';
import SidebarToggler from './sidebar-toggler';
import PopOver from './popover';

declare global {
  interface Window {
    params: any;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  (new ModeSwitcher(document.querySelector('#modeSwitcher'))).run();

  (new PaletteSwitcher()).run();

  (new Scroller(document.getElementById('btnScrollToTop'))).run();

  (new TableWrapper(document.querySelectorAll('table'))).run();

  (new AnchorLink(document.body.querySelectorAll('.post-content'))).run();

  (new FontSizeSwitcher(document.getElementById('fontSize') as HTMLInputElement)).run();

  (new TOC(document.querySelector('#offcanvasTOC'))).run();

  (new SidebarToggler(document.querySelector('#sidebarToggler'))).run();

  Code.run();

  PopOver.run();
});
