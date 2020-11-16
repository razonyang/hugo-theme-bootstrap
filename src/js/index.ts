import Scroller from './scroller';
import TableWrapper from './table';
import AnchorLink from './anchor';
import PaletteSwitcher from './palette';
import LanguageSwitcher from './language';
import ModeSwitcher from './mode';
import FontSizeSwitcher from './font-size';

document.addEventListener('DOMContentLoaded', () => {
  const modeSwitcher = new ModeSwitcher(document.querySelector('#modeSwitcher'));
  modeSwitcher.init();

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

  const fontSizeSwitcher = new FontSizeSwitcher(document.querySelector('#fontSizeSwitcher'));
  fontSizeSwitcher.init();
});
