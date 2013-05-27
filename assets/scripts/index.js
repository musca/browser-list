
var browsers = [

  {
    name: "internet explorer",
    url: "http://windows.microsoft.com/en-us/internet-explorer/download-ie",
    imgSrc: "ie-128.png",
    note: "Only for windows."
  },

  {
    name: "chrome",
    url: "http://www.google.com/chrome/",
    imgSrc: "chrome-128.png"
  },

  {
    name: "firefox",
    url: "http://www.mozilla.org/firefox/",
    imgSrc: "firefox-128.png"
  },

  {
    name: "safari",
    url: "http://support.apple.com/kb/DL1531",
    imgSrc: "safari-128.png",
    note: "for windows"
  },

  {
    name: "opera",
    url: "http://www.opera.com/download/",
    imgSrc: "opera-128.png"
  }
  
];


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

window.onload = function(){

  var ul = document.createElement('ul');

  ul.id = 'browsers';

  document.body.appendChild(ul);
	
  for (var i = 0; i < browsers.length; i++) {
  	
    var li = document.createElement('li');

    ul.appendChild(li);

    li.innerHTML = (
      '  <a href="'+browsers[i].url+'">' +
      '    <img src="assets/images/'+browsers[i].imgSrc+'" alt="'+browsers[i].name+' logo" />' +
      '    <p>'+browsers[i].name+'</p>' +
      '    <p class="notes">'+((browsers[i].note) ? browsers[i].note : '&nbsp;' )+'</p>' +
      '  </a>' 
    );

  }

};