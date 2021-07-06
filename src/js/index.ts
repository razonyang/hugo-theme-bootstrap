import Scroller from './scroller';
import TableWrapper from './table';
import AnchorLink from './anchor';
import PaletteSwitcher from './palette';
import LanguageSwitcher from './language';
import ModeSwitcher from './mode';
import FontSizeSwitcher from './font-size';
import TOC from './toc';
import Code from './code';
import SidebarToggler from './sidebar-toggler';

document.addEventListener('DOMContentLoaded', () => {
  const modeSwitcherEle: HTMLInputElement = document.querySelector('#modeSwitcher');
  if (modeSwitcherEle) {
    (new ModeSwitcher(modeSwitcherEle)).init();
  }

  const paletteSwitcher = new PaletteSwitcher(document.querySelector('#paletteSwitcher'));
  paletteSwitcher.init();

  const scroller = new Scroller(document.getElementById('btnScrollToTop'));
  scroller.init();

  const tableWrapper = new TableWrapper(document.querySelectorAll('table'));
  tableWrapper.init();

  const anchorLink = new AnchorLink(document.body.querySelectorAll('.post-content h1, h2, h3, h4, h5, h6'));
  anchorLink.init();

  const languageSwitcher = new LanguageSwitcher(document.querySelector('#languageSwitcher'));
  languageSwitcher.init();

  const fontSizeSwitcherEle: HTMLElement = document.querySelector('#fontSizeSwitcher');
  if (fontSizeSwitcherEle) {
    (new FontSizeSwitcher(fontSizeSwitcherEle)).init();
  }

  const tocEle: HTMLElement = document.querySelector('#offcanvasTOC');
  if (tocEle) {
    (new TOC(tocEle)).init();
  }

  const sidebarToggler: HTMLElement = document.querySelector('#sidebarToggler');
  if (sidebarToggler) {
    (new SidebarToggler(sidebarToggler)).init();
  }

  (new Code()).init();
});
