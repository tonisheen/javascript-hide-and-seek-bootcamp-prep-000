function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lysts = document.querySelectorAll('.ranked-list li');
  for (var li in lysts) {
    li.innerHTML = n.toString();
  }
}

function deepestChild() {
  let grand_node = document.querySelector('div#grand-node');
  let current = grand-node, next = 1;
  
  while (next) {
    next = current.querySelector('*');
    current = next.querySelector('*');
  }
  
  return current;
}