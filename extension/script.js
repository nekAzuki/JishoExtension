
function initialize() {
  var search = document.getElementById('search')
  // this is subject to changes, since it depends on jisho.org
  const root = 'http://jisho.org/search/'
  search.onclick = function() {
    var input = document.getElementById('input').value
    if (input != "") {
      chrome.tabs.create({url: root + input})
    }
  }
}

window.onload = initialize
