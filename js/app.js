
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


    function targetInt () {
      var randomNum = 0;
      randomNum = Math.floor((Math.random() * 100) + 1);
      console.log(randomNum);
      return randomNum;
    };

    targetInt();

    $('.new').click(function () {
      event.preventDefault();
      targetInt();
    });
  

// guessfeedbackloop

  function userGuess() {
    var guess = 0;
    guess = prompt("Guess the Number","Your Guess");
    console.log(guess);
    return userGuess;
  }

  userGuess();


});

 





