// author NekA
// 8/3/2017

function initialize() {
  var search = document.getElementById('search')
  var clear = document.getElementById('clear')
  // this is subject to changes, since it depends on jisho.org
  const root = 'http://jisho.org/search/'

  search.onclick = function() {
    var input = document.getElementById('input').value
    if (input != "") {
      chrome.tabs.create({url: root + input})
    }
  }

  clear.onclick = function() {
    document.getElementById('input').value = ""
  }

  var body = document.body

  body.onclick = function() {
    alert(window.getSelection())
  }
}

window.onload = initialize
