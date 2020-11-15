import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendarAlt, faChevronCircleUp, faEnvelope, faFolder, faLanguage,
  faPalette, faSearch, faTags, faBuilding, faMapMarkerAlt,
  faBars, faRss, faLink, faSkullCrossbones, faExclamationTriangle,
  faCheckCircle, faInfoCircle, faFont,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook, faGithub, faGitlab, faInstagram, faLinkedin,
  faQuora, faStackOverflow, faTwitter, faWeibo, faZhihu,
  faTumblr,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faCalendarAlt, faChevronCircleUp, faEnvelope, faFolder, faLanguage,
  faPalette, faSearch, faTags, faBuilding, faMapMarkerAlt,
  faBars, faRss, faLink, faSkullCrossbones, faExclamationTriangle,
  faCheckCircle, faInfoCircle, faFont,
);

library.add(
  faFacebook, faGithub, faGitlab, faInstagram, faLinkedin,
  faQuora, faStackOverflow, faTwitter, faWeibo, faZhihu,
  faTumblr,
);

export function watch() {
  dom.watch();
}

export function i2svg() {
  dom.i2svg();
}
