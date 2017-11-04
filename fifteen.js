var pixels;
var p;
var emptytop = '300px';
var emptyleft = '300px';

window.onload = function () {
    solve();
    var shuf = document.getElementById("shufflebutton");
    shuf.addEventListener("click",shuffle);
};

function solve () {
	var pieces = document.querySelectorAll("div#puzzlearea div");
	var playarea = document.querySelector("div#puzzlearea");
	playarea.setAttribute('class','puzzlearea');
	$('#puzzlearea').css({"border-color": "black", 
                          "border-width":"2px", 
                          "border-style":"solid"})
	for (var i = 0; i < pieces.length; i++) {
      pieces[i].setAttribute('class','puzzlepiece');
      if (i<=3){
         pieces[i].style.top = '0px';
    	 pixels = 100 * i;
         pieces[i].style.left = pixels + 'px';
         pieces[i].style.backgroundPosition = '-' + pixels + 'px' +' 0px';
      } 
      else if (i>3 && i<=7){
    	 pieces[i].style.top = '100px';
    	 p = i-4;
    	 pixels = 100 * p;
    	 pieces[i].style.left = pixels + 'px';
    	 pieces[i].style.backgroundPosition = '-' + pixels + 'px' +' -100px';
      }
      else if (i>7 && i<=11){
    	 pieces[i].style.top = '200px';
    	 p = i-8;
    	 pixels = 100 * p;
    	 pieces[i].style.left = pixels + 'px';
    	 pieces[i].style.backgroundPosition = '-' + pixels + 'px' +' -200px';
      }
      else if (i>11 && i<=14){
    	 pieces[i].style.top = '300px';
    	 p = i-12;
    	 pixels = 100 * p;
    	 pieces[i].style.left = pixels + 'px';
    	 pieces[i].style.backgroundPosition = '-' + pixels + 'px' +' -300px';
      }
    }
    for (var i = 0; i < pieces.length; i++) {
      pieces[i].setAttribute("id",''+i);
    }
    var pp = document.getElementsByTagName("div#puzzlearea div");
    for ( i = 0; i < pieces.length; i++) {
      pieces[i].addEventListener('click',move);
      pieces[i].addEventListener('mouseover',validmove);
    }
}

function shuffle () {
    var pp = document.querySelectorAll("div#puzzlearea div");
    for ( i = 0; i < 15; i++) {
        var r = Math.floor(Math.random() * 14 + 1);
        var currenttop = pp[r].style.top;
        var currentleft = pp[r].style.left;
        pp[r].style.top = emptytop;
        pp[r].style.left = emptyleft;
        emptytop = currenttop;
        emptyleft = currentleft;
    }
}

function move () {
    var w = event.target.id;
    var pp = document.querySelectorAll("div#puzzlearea div");
    var currenttop = event.target.style.top;
    var currentleft = event.target.style.left;
    var loes = parseInt(emptyleft) - 100;
    var roes = parseInt(emptyleft) + 100;
    var aes = parseInt(emptytop) - 100;
    var bes = parseInt(emptytop) + 100;
    if (currenttop == emptytop  && (currentleft == loes+'px' || currentleft == roes+'px')){
      $('#'+w).hide();
      $('#'+w).fadeIn(1000);
      pp[w].style.top = emptytop;
      pp[w].style.left = emptyleft;
      emptytop = currenttop;
      emptyleft = currentleft;
    }
    if (currentleft == emptyleft  && (currenttop == aes+'px' || currenttop == bes+'px')){
      $('#'+w).hide();
      $('#'+w).fadeIn(1000);
      pp[w].style.top = emptytop;
      pp[w].style.left = emptyleft;
      emptytop = currenttop;
      emptyleft = currentleft;
    }
}

function validmove () {
    var w = event.target.id;
    var pp = document.querySelectorAll("div#puzzlearea div");
    var currenttop = event.target.style.top;
    var currentleft = event.target.style.left;
    var loes = parseInt(emptyleft) - 100;
    var roes = parseInt(emptyleft) + 100;
    var aes = parseInt(emptytop) - 100;
    var bes = parseInt(emptytop) + 100;
    if (currenttop == emptytop  && (currentleft == loes+'px' || currentleft == roes+'px')){
       pp[w].setAttribute('class','puzzlepiece movablepiece');
       pp[w].addEventListener('mouseleave',leave); 
    }
    if (currentleft == emptyleft  && (currenttop == aes+'px' || currenttop == bes+'px')){
       pp[w].setAttribute('class','puzzlepiece movablepiece');
       pp[w].addEventListener('mouseleave',leave);
    }
}

function leave () {
    var w = event.target.id;
    var pp = document.querySelectorAll("div#puzzlearea div");
    pp[w].setAttribute('class','puzzlepiece');
}