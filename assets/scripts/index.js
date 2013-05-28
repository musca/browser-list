window.onload = function(){

  browsers = []
  
  ul = document.getElementById("browsers");
  
  var items = ul.getElementsByTagName("li");

  for (var i = 0; i < items.length; ++i) {
    browsers[i] = items[i].innerHTML
  }
  
  ul.innerHTML = '';

  // Taken from http://coffeescriptcookbook.com
  var shuffle = function(a) {
    var i, j, _i, _ref, _ref1;

    for (i = _i = _ref = a.length - 1; _ref <= 1 ? _i <= 1 : _i >= 1; i = _ref <= 1 ? ++_i : --_i) {
      j = Math.floor(Math.random() * (i + 1));
      _ref1 = [a[j], a[i]], a[i] = _ref1[0], a[j] = _ref1[1];
    }
    return a;
  };

  shuffle(browsers);

  for (var i = 0; i < browsers.length; i++) {
  	
    var li = document.createElement('li');

    ul.appendChild(li);

    li.innerHTML = (browsers[i]);

  }

  ul.setAttribute('class', '');

};
