var paletteKey = "hbs-palette"

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

export function switchPalette(palette) {
  console.debug('switch to palette: ' + palette)
  localStorage.setItem(paletteKey, palette)
  document.body.setAttribute('data-palette', palette)
}

document.addEventListener('DOMContentLoaded', function() {
  initPalette()
})
