window.addEventListener("load", function(){
	var buttons = [document.getElementsByClassName("btn_0"),document.getElementsByClassName("btn_1"),document.getElementsByClassName("btn_2")];

	for(i=0; i < buttons.length; i++){
		buttons[i][0].addEventListener("click", function(){
			var button = [document.getElementsByClassName("btn_0"),document.getElementsByClassName("btn_1"),document.getElementsByClassName("btn_2")];
			var rand_button = Math.floor(Math.random()* button.length);
			var margins = ["300px 20px 20px 260px", "145px 70px 90px 30px", "200px 25px,400px, 300px", "180px 39px 200px 19px", "389px 90px 300px 400px", "28px 30px 40px 455px"];
			var rand_margin = Math.floor(Math.random()* margins.length);

			for(c=0; c<button.length; c++){
				button[c][0].style.display = "none";
			}
			

			button[rand_button][0].style.display = "flex";
			button[rand_button][0].style.margin = margins[rand_margin];
			
		});
	}
});