import Fuse from "fuse.js"
import Mustache from "mustache"

var searchForm, searchInput, searchResults, searchResultTemplate

document.addEventListener('DOMContentLoaded', function() {
  searchForm = document.getElementById('searchForm')
  searchInput = document.getElementById('searchQuery')
  searchResults = document.getElementById('searchResults')
  searchResultTemplate = document.getElementById('searchResultTemplate').innerHTML
  initSearch()
})

function initSearch() {
  let searchParams = new URLSearchParams(window.location.search)
  let searchQuery = searchParams.get("q")

  if (searchQuery) {
    searchInput.value = searchQuery
    search(searchQuery)
  } else {
    searchInput.setAttribute('placeholder', "Please enter search keywords.")
  }
}

var contentWordCount = 120
var fuseOptions = {
  keys: [
    { name:"title", weight:0.8 },
    { name:"content", weight:0.5 },
    { name:"tags", weight:0.3 },
    { name:"categories", weight:0.3 }
  ]
}

function search(query) {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      var pages = xhr.response
      var fuse = new Fuse(pages, fuseOptions)
      var results = fuse.search(query)
      console.log({results: results})
      if(results.length > 0){
        populateResults(results)
      }else{
        searchResults.innerHTML = '<p class="text-muted">No results</p>'
      }
    }
  }
  xhr.responseType = 'json'
  xhr.open('GET', searchForm.getAttribute("data-index"), true)
  xhr.send(null)
}

function populateResults(results){
  searchResults.innerHTML = ''
  results.forEach(function(result) {
    if (result.item.content.length > contentWordCount) {
      result.item.content = result.item.content.substring(0, contentWordCount) + "..."
    }
    searchResults.insertAdjacentHTML('beforeend', Mustache.render(searchResultTemplate, result.item))
  })
}
