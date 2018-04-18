function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lysts = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < lysts.length; i++) {
    lysts[i].innerHTML = parseInt(lysts[i].innerHTML) + n;
  }
}

function deepestChild() {
  let current = document.querySelector('div#grand-node'), next = null;
  
  while (true) {
    next = current.querySelector(':first-child');
    if (next === null) {
      return current;
    }
    current = next;
  }
}