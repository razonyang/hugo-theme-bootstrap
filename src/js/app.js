import './table'
import './scroll-top'
import 'bootstrap/dist/js/bootstrap.bundle'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faCalendarAlt, faChevronUp, faEnvelope, faFolder, faLanguage, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGitlab, faLinkedin, faStackOverflow, faTwitter, faWeibo, faZhihu } from '@fortawesome/free-brands-svg-icons'

// Add solid icons.
library.add(faArrowRight, faCalendarAlt, faChevronUp, faEnvelope, faFolder, faLanguage, faTag)

// Add brand icons.
library.add(faFacebook, faGithub, faGitlab, faLinkedin, faStackOverflow, faTwitter, faWeibo, faZhihu)

dom.watch()
