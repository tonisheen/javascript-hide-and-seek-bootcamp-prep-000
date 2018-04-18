function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested.target');
}

function increaseRankBy(n) {
  var lysts = document.querySelectorAll('.ranked-list');
  for (var lyst in lysts) {
    for (var li in lyst) {
      li.innerHTML = parseInt(li.innerHTML) + n;
    }
  }
}