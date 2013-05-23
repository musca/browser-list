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