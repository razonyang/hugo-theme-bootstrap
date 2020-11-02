
var prefersColorSchemeKey = 'hbs-prefers-color-scheme'
var colorSchemeSwitcher, colorSchemeSwitcherLabel;
document.addEventListener('DOMContentLoaded', function() {
  colorSchemeSwitcher = document.getElementById('colorSchemeSwitcher')
  colorSchemeSwitcherLabel = document.getElementById('colorSchemeSwitcherLable')
  colorSchemeSwitcher.addEventListener('change', function() {
    let scheme = this.checked ? 'dark' : 'light'
    localStorage.setItem(prefersColorSchemeKey, scheme)
    toggleColorScheme(scheme)
  })

  initColorScheme()

  window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e) {
    toggleColorScheme(e.matches ? 'dark' : 'light')
  });
})

function initColorScheme() {
  // load scheme from localStorage.
  let scheme = localStorage.getItem(prefersColorSchemeKey)
  if (!scheme) {
    console.log(window.matchMedia('(prefers-color-scheme: dark)').media)
    // load scheme from query media
    if (window.getComputedStyle(document.body).getPropertyValue('--prefers-color-scheme').toString().trim() === 'dark') {
      scheme = 'dark'
    }
  }
  if (scheme) {
    toggleColorScheme(scheme)
  }
}

function toggleColorScheme(scheme) {
  let icon = 'moon'
  let checked = false
  if (scheme === 'dark') {
    colorSchemeSwitcher.checked
    icon = 'sun'
    checked = true
  }
  colorSchemeSwitcher.checked = checked
  colorSchemeSwitcherLabel.innerHTML = '<i class="fas fa-fw fa-'+ icon +'"></i>'
  document.body.setAttribute('data-prefers-color-scheme', scheme)
}
