import Fuse from "fuse.js"
import Mustache from "mustache"
import Mark from "mark.js"

var searchResults, searchResultTemplate, searchStat

document.addEventListener('DOMContentLoaded', function() {
  searchStat = document.getElementById('searchStat')
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
    searchStat.innerHTML = document.getElementById('missingSearchKeywordsTemplate').innerHTML
  }
}

function search(query) {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      var pages = xhr.response
      var fuse = new Fuse(pages, fuseOptions)
      var results = fuse.search(query)
      console.log(results)
      if(results.length > 0){
        populateResults(results)
      }else{
        searchStat.innerHTML = document.getElementById('noSearchResultsTemplate').innerHTML
      }
    }
  }
  xhr.responseType = 'json'
  xhr.open('GET', document.head.querySelector('meta[data-name="search-index"]').getAttribute('content'), true)
  xhr.send(null)
}

var highlightOptions = {
  element: 'span',
  className: 'search-keyword'
}

function populateResults(results){
  searchResults.innerHTML = ''
  var titleKeywords = new Array()
  var contentKeywords = new Array()
  searchStat.innerHTML = Mustache.render(document.getElementById('searchStatTemplate').innerHTML, { total: results.length })
  results.forEach(function(result) {
    if (result.item.content.length > searchResultContentWordCount) {
      result.item.content = result.item.content.substring(0, searchResultContentWordCount) + "..."
    }
    result.matches.forEach(function(match) {
      match.indices.forEach(function(index) {
        let keyword = match.value.substring(index[0], index[1] + 1)
        switch (match.key) {
          case 'title':
            titleKeywords.push(keyword)
            break;
          case 'content':
            contentKeywords.push(keyword)
            break;
        }
      })
    })
    searchResults.insertAdjacentHTML('beforeend', Mustache.render(searchResultTemplate, result.item))
  })
  let titleHighlighter = new Mark(document.querySelectorAll('.search-result-title'));
  titleHighlighter.mark(titleKeywords, highlightOptions);
  let contentHighlighter = new Mark(document.querySelectorAll('.search-result-content'));
  contentHighlighter.mark(contentKeywords, highlightOptions);
}
