window.addEventListener("load", function(){
	
		var button = document.getElementById("clickMe");

		button.addEventListener("click", function(){
		var colors = ["yellow", "#9F9FEE", "#62E361", "#E361DA", "#C5162E", "#09FDDE", "#F7601D", "#417C7E", "#417E59", "#B89F40"];
		var rand = Math.floor(Math.random() * (9 - 0)) + 0;
		var bg = document.getElementById("b");

		bg.style.background = colors[rand];	
		});
	});
