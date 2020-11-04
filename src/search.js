import Fuse from "fuse.js"
import Mustache from "mustache"

var searchResults, searchResultTemplate

document.addEventListener('DOMContentLoaded', function() {
  searchResults = document.getElementById('searchResults')
  searchResultTemplate = document.getElementById('searchResultTemplate').innerHTML
  initSearch()
})

function initSearch() {
  let searchParams = new URLSearchParams(window.location.search)
  let searchQuery = searchParams.get("q")

  if (searchQuery) {
    document.body.querySelectorAll('.search-form input').forEach(function (input) {
      input.value = searchQuery
    })
    search(searchQuery)
  } else {
    searchResults.innerHTML = '<p class="text-muted">Please enter search keywords.</p>'
  }
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
  xhr.open('GET', document.head.querySelector('meta[data-name="search-index"]').getAttribute('content'), true)
  xhr.send(null)
}

function populateResults(results){
  searchResults.innerHTML = ''
  results.forEach(function(result) {
    if (result.item.content.length > searchResultContentWordCount) {
      result.item.content = result.item.content.substring(0, searchResultContentWordCount) + "..."
    }
    searchResults.insertAdjacentHTML('beforeend', Mustache.render(searchResultTemplate, result.item))
  })
}
