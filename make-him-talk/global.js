window.addEventListener("load", function(){
	var button = document.getElementById("sendButton");

	button.addEventListener("click", function(){
		var user_input = document.getElementById("user_input");
		var bubble = document.getElementById("he-says");

		bubble.innerHTML = (user_input.value);
	});


});