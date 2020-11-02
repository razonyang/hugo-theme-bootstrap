var paletteKey = "hbs-palette"
var paletteItems
function initPalette() {
  let palette = localStorage.getItem(paletteKey)
  if (!palette) {
    let paletteMeta = document.querySelector('meta[data-name="palette"]')
    if (paletteMeta) {
      palette = paletteMeta.getAttribute('content')
    }
  }
  if (palette) {
    switchPalette(palette)
  }
}

function switchPalette(palette) {
  console.debug('switch to palette: ' + palette)
  document.body.setAttribute('data-palette', palette)
  paletteItems.forEach(function(item) {
    if (item.getAttribute('data-palette') === palette) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}

document.addEventListener('DOMContentLoaded', function() {
  paletteItems = document.querySelectorAll('.palette-switcher .dropdown-item')
  
  initPalette()

  paletteItems.forEach(function(item) {
    item.addEventListener('click', function() {
      let palette = item.getAttribute('data-palette')
      localStorage.setItem(paletteKey, palette)
      switchPalette(palette)
    })
  })
})
