
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  // new game & generate random number
  var randomNum = 0;
  function targetInt () {
      randomNum = Math.floor((Math.random() * 100) + 1);
    };
  console.log(randomNum);

  var newGame 


});

 





