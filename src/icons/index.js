import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import {
  faAdjust, faArrowsAltV, faArrowLeft, faBars, faBuilding, faCheckCircle, faChevronCircleDown,
  faChevronCircleUp, faChevronLeft, faChevronRight, faChevronUp, faCode, faCoffee, faComments,
  faColumns, faCopy, faCopyright, faEdit, faEllipsisV, faEnvelope, faExclamationTriangle,
  faExpandAlt, faEyeDropper, faFont, faFileAlt, faFileArchive, faFolder, faHome, faInfoCircle,
  faLanguage, faLink, faList, faListAlt, faMapMarkerAlt, faPalette, faQuestion, faQuestionCircle,
  faRedoAlt, faRss, faSearch, faShareAlt, faSkullCrossbones, faSpinner, faTags, faThumbtack,
  faTimes, faTv, faUndo, faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAlipay, faBitbucket, faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc,
  faCreativeCommonsNd, faCreativeCommonsSa, faDiscord, faDiscourse, faDocker, faFacebookF,
  faFacebookSquare, faGithub, faGitlab, faInstagram, faKaggle, faLastfm, faLinkedinIn,
  faMediumM, faPaypal, faPatreon, faPinterest, faQq, faQuora, faReddit, faStackOverflow,
  faTelegramPlane, faTiktok, faTumblr, faTwitter, faYoutube, faWeibo, faWeixin, faZhihu,
} from '@fortawesome/free-brands-svg-icons';
import { faLiberapay, faBilibili, faOffline } from './icons';

config.searchPseudoElements = true;

library.add(
  // Solid Icons
  faAdjust, faArrowsAltV, faArrowLeft, faBars, faBuilding, faCheckCircle, faChevronCircleDown,
  faChevronCircleUp, faChevronLeft, faChevronRight, faChevronUp, faCode, faCoffee, faComments,
  faColumns, faCopy, faCopyright, faEdit, faEllipsisV, faEnvelope, faExclamationTriangle,
  faExpandAlt, faEyeDropper, faFont, faFileAlt, faFileArchive, faFolder, faHome, faInfoCircle,
  faLanguage, faLink, faList, faListAlt, faMapMarkerAlt, faPalette, faQuestion, faQuestionCircle,
  faRedoAlt, faRss, faSearch, faShareAlt, faSkullCrossbones, faSpinner, faTags, faThumbtack,
  faTimes, faTv, faUndo, faUser,

  // Regular Icons
  faStar,

  // Brands
  faAlipay, faBitbucket, faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc,
  faCreativeCommonsNd, faCreativeCommonsSa, faDiscord, faDiscourse, faDocker, faFacebookF,
  faFacebookSquare, faGithub, faGitlab, faInstagram, faKaggle, faLastfm, faLinkedinIn,
  faMediumM, faPaypal, faPatreon, faPinterest, faQq, faQuora, faReddit, faStackOverflow,
  faTelegramPlane, faTiktok, faTumblr, faTwitter, faYoutube, faWeibo, faWeixin, faZhihu,

  // Custom Icons
  faBilibili, faLiberapay, faOffline,
);

dom.watch();
