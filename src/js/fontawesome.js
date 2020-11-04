import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faCalendarAlt, faChevronCircleUp, faEnvelope, faFolder, faLanguage, faMoon, faPalette, faSearch, faSun, faTag,
  faBuilding, faMapMarkerAlt, faBars,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook, faGithub, faGitlab, faInstagram, faLinkedin, faQuora, faStackOverflow, faTwitter, faWeibo, faZhihu,
  faTumblr,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faCalendarAlt, faChevronCircleUp, faEnvelope, faFolder, faLanguage, faMoon, faPalette, faSearch, faSun, faTag,
  faBuilding, faMapMarkerAlt, faBars,
)
library.add(
  faFacebook, faGithub, faGitlab, faInstagram, faLinkedin, faQuora, faStackOverflow, faTwitter, faWeibo, faZhihu,
  faTumblr,
)

document.addEventListener('DOMContentLoaded', function() {
  dom.watch()
})
