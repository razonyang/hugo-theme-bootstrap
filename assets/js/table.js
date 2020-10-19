document.addEventListener('DOMContentLoaded', function() {
  let tables = document.getElementsByTagName('table')
  let className = 'table table-bordered table-striped'
  for (let i=0; i < tables.length; i++) {
    tables[i].setAttribute('class', className)
  }
})
