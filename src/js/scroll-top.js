function scroll2Top() {
  window.scrollTo({ 
    top: 0, 
    left: 0,
    behavior: "smooth" 
  })
}

document.addEventListener('DOMContentLoaded', function() {
  let btnScrollTop = document.getElementById('scrollTop')
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnScrollTop.style.display = "block";
    } else {
      btnScrollTop.style.display = "none";
    }
  };
  
  btnScrollTop.onclick = function () {
    scroll2Top()
  }
})
