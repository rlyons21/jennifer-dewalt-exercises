window.addEventListener("load", function(){

	var button = document.getElementsByClassName("fixButton");

	button[0].addEventListener("click",function(){
		var before_text = document.getElementsByClassName("beforeFix");
		var after_text = document.getElementsByClassName("afterFix");
		var progress = document.getElementsByClassName("progressBackground");
		var progress_bar = document.getElementsByClassName("progressBar");
		var w = 1;


		progress_bar[0].style.width = "1%";
		before_text[0].style.display = "none";
		after_text[0].style.display = "none";
		progress[0].style.display = "flex";

		var id = setInterval(function(){
			if(w >= 100) {
				clearInterval(id);
				progress[0].style.display= "none";
				after_text[0].style.display = "inline";
			} else {
				w ++;
				progress_bar[0].style.width = w+"%";
			}
		},50);


	});
});