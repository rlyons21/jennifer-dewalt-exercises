window.addEventListener("load", function(){
	var color = "white";
	var boxes = document.getElementsByClassName("row");
	var color_btn = document.getElementsByClassName("color"); 

	for(i=0; i<boxes.length; i++){
		boxes[i].addEventListener("click", function(){
			var id = this.getAttribute("id");
			var box = document.getElementById(id); 
			box.style.background = color;
		});
	}

	for(i=0; i<color_btn.length; i++){
		color_btn[i].addEventListener("click", function(){
			var id = this.getAttribute("id");
			color = id;
		});
	}

});