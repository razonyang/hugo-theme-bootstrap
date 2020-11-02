// Wraps table.
function wrapTable(table) {
  var wrapper = document.createElement('div')
  wrapper.className = 'table-responsive'
  wrapper.appendChild(table.cloneNode(true))
  return wrapper
}

document.addEventListener('DOMContentLoaded', function() {
  let tables = document.body.querySelectorAll('table')
  if (tables) {
    tables.forEach(function(table) {
      table.parentNode.replaceChild(wrapTable(table), table)
    })
  }
})
