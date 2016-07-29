window.addEventListener("load", function(){
	var play_button = document.getElementById("letsPlay");
	var wordContainer = document.getElementsByClassName("word_to_guess");
	var scoreContainer = document.getElementsByClassName("score");
	var word = document.getElementsByClassName("word");
	var score = 0;
	var count = 0;
	var submit = document.getElementsByClassName("submit_btn");
	var info = document.getElementsByClassName("gameInfo");

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
		if(count==1){
			info[0].innerHTML = "Incorrect! 2 chances left";
		}
		if(count == 2){
			info[0].innerHTML = "Incorrect! 1 chances left";
		}
		

		var check = checkWord(guess[0].value,word[0].innerHTML, count);
		
		if(check=="wrong-new" || check == "right"){
			count = 0;
			getWord();
			guess[0].value = "";
			info[0].innerHTML = "Here is your next word";
		}

		scoreContainer[0].innerHTML = "Score: " + score;

	});


	function checkWord(guess, word,count){
		if(count%3 == 0 && guess != word){
			score -= 1;
			return "wrong-new";
		}
		if(guess == word){
			score +=1;
			return "right";
		}else{
			return "wrong";
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