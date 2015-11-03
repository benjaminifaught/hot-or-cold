
$(document).ready(function(){
  var generatedNumber
  var guess 

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- New Game ---*/
    function newGame (); {
        
    }

  	

 	// Generate Random Number 
	function generateNumber() {

		var generatedNumber = Math.floor((Math.random()*100)+1);
		console.log("Generated Random Number = "+ generatedNumber);

		return generatedNumber;
	}
  console.log (generatedNumber);
});

  // guesses 
  if (guess > (generatedNumber + 30)) {
    alert('ICE COLD');
  } else if (guess < (generatedNumber + 30) && >(generatedNumber + 20)) {
    alert('COLD');
  } else if (guess < (generatedNumber + 20) && >(generatedNumber + 10)) {
    alert('WARM');
  } else if (guess < (generatedNumber + 10)) {
    alert('HOT');
  }





