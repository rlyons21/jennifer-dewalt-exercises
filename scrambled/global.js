window.addEventListener("load", function(){
	var play_button = document.getElementById("letsPlay");
	var wordContainer = document.getElementsByClassName("word_to_guess");
	var scoreContainer = document.getElementsByClassName("score");
	var word = document.getElementsByClassName("word");
	var score = 0;
	var count = 0;
	var submit = document.getElementsByClassName("submit_btn");

	play_button.addEventListener("click", function(){
		var intro = document.getElementsByClassName("directions");
		var game = document.getElementsByClassName("game");

		intro[0].style.display = "none";
		game[0].style.display = "inline";

		getWord();

	});


	submit[0].addEventListener("click", function(form){
		form.preventDefault();
		var guess = document.getElementsByClassName("response");
		count +=1;

		checkWord(guess[0].value,word[0].innerHTML, count);
		scoreContainer[0].innerHTML = "Score: " + score;

	});


	function checkWord(guess, word,count){
		if(count%3 == 0 && guess != word){
			score -= 1;
			count = 0;
			getWord();
		}
		if(guess == word){
			score +=1;
			count = 0;
			getWord();
		} 
	}

	function getWord(){
		var get_word = new XMLHttpRequest();

		get_word.addEventListener("load", function(e){
			var words = JSON.parse(e.target.response);
			var random_num = Math.floor((Math.random()) * words.length);
			var shuffled = words[random_num].split('').sort(function(){return 0.5-Math.random()}).join('');
			
			wordContainer[0].innerHTML = shuffled;
			word[0].innerHTML = words[random_num];

		});

		get_word.open("get", "words.txt");
		get_word.send();
	}

});