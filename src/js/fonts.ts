import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import {
  faAdjust, faArrowsAltV, faBars, faBuilding, faCalendarAlt, faCheckCircle, faChevronCircleDown, faChevronCircleUp, faChevronLeft, faChevronRight,
  faCode, faCoffee, faColumns, faCopy, faCopyright, faEdit, faEnvelope, faExclamationTriangle, faExpandAlt, faEyeDropper, faFont, faFileAlt, 
  faFileArchive, faFolder, faInfoCircle, faLanguage, faLink, faList, faListAlt, faMapMarkerAlt, faPalette, faRss, faSearch, faShare, faSkullCrossbones,
  faShareAlt, faSlidersH, faSpinner, faSyncAlt, faTags, faTimes, faTv, faUndo, faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAlipay, faBitbucket, faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsNd, faCreativeCommonsSa,
  faDiscord, faDiscourse, faDocker, faFacebookF, faFacebookSquare, faGithub, faGitlab, faInstagram, faKaggle, faLastfm,
  faLinkedinIn, faMediumM, faQq, faQuora, faReddit, faStackOverflow, faTelegramPlane, faTiktok, faTumblr, faTwitter, faYoutube,
  faWeibo, faWeixin, faZhihu,
} from '@fortawesome/free-brands-svg-icons';

config.searchPseudoElements = true;

library.add(
  // Solid Icons
  faAdjust, faArrowsAltV, faBars, faBuilding, faCalendarAlt, faCheckCircle, faChevronCircleDown, faChevronCircleUp, faChevronLeft, faChevronRight,
  faCode, faCoffee, faColumns, faCopy, faCopyright, faEdit, faEnvelope, faExclamationTriangle, faExpandAlt, faEyeDropper, faFont, faFileAlt, 
  faFileArchive, faFolder, faInfoCircle, faLanguage, faLink, faList, faListAlt, faMapMarkerAlt, faPalette, faRss, faSearch, faShare, faSkullCrossbones,
  faShareAlt, faSlidersH, faSpinner, faSyncAlt, faTags, faTimes, faTv, faUndo, faUser,

  // Regular Icons
  faStar,

  // Brands
  faAlipay, faBitbucket, faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsNd, faCreativeCommonsSa,
  faDiscord, faDiscourse, faDocker, faFacebookF, faFacebookSquare, faGithub, faGitlab, faInstagram, faKaggle, faLastfm,
  faLinkedinIn, faMediumM, faQq, faQuora, faReddit, faStackOverflow, faTelegramPlane, faTiktok, faTumblr, faTwitter, faYoutube,
  faWeibo, faWeixin, faZhihu,
);

document.addEventListener('DOMContentLoaded', () => {
  dom.watch();
});
