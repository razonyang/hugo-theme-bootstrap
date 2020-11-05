function initAnchorIcon() {
  let anchors = document.body.querySelectorAll('.post-content h1, h2, h3, h4, h5, h6')
  anchors.forEach(function(anchor) {
    let id = anchor.getAttribute('id')
    if (!id) {
      return
    }
    let a = document.createElement('a')
    a.setAttribute('href', '#' + id)
    a.setAttribute('class', 'anchor')
    a.innerHTML = '<i class="fas fa-fw fa-link"></i>'
    anchor.appendChild(a)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  initAnchorIcon()
})
