
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

browsers.sort(function() {return 0.5 - Math.random()});

window.onload = function(){

  var ul = document.createElement('ul');

  ul.setAttribute('id', 'browsers');

  document.body.appendChild(ul);
	
  for (var i = 0; i < browsers.length; i++) {
  	
    var li = document.createElement('li');

    ul.appendChild(li);

    var a = (
      '  <a href="'+browsers[i].url+'">' +
      '    <img src="assets/images/'+browsers[i].imgSrc+'" alt="'+browsers[i].name+' logo" />' +
      '    <p>'+browsers[i].name+'</p>' +
      '    <p class="notes">'+((browsers[i].note) ? browsers[i].note : '&nbsp;' )+'</p>' +
      '  </a>' 
    );

    li.innerHTML += a;

  };

 };