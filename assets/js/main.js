document.addEventListener('DOMContentLoaded', function() {
  scrollTop()
  initTableClass()
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

function initTableClass() {
  let tables = document.getElementsByTagName('table')
  let className = 'table table-bordered table-striped'
  for (let i=0; i < tables.length; i++) {
    tables[i].setAttribute('class', className)
  }
}
