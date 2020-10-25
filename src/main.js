// Bootstrap
import 'bootstrap'

// Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faCalendarAlt, faChevronCircleUp, faEnvelope, faFolder, faLanguage, faSearch, faTag
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook, faGithub, faGitlab, faLinkedin, faStackOverflow, faTwitter, faWeibo, faZhihu
} from '@fortawesome/free-brands-svg-icons'

library.add(faCalendarAlt, faChevronCircleUp, faEnvelope, faFolder, faLanguage, faSearch, faTag)
library.add(faFacebook, faGithub, faGitlab, faLinkedin, faStackOverflow, faTwitter, faWeibo, faZhihu)

document.addEventListener('DOMContentLoaded', function() {
  dom.i2svg()
  scrollTop()
})

function scrollTop() {
  let scrollTop = document.getElementById('scrollTop')
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTop.style.display = "block";
    } else {
      scrollTop.style.display = "none";
    }
  };

  scrollTop.onclick = function () {    
    document.documentElement.scrollTop = 0;
  }
}
