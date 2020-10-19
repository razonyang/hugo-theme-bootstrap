document.addEventListener('DOMContentLoaded', function() {
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
})
