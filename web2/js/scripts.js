	window.onload = function() {
		changeBG();
	}

	function changeBG() {
		var oDiv = document.getElementById('div1');
		var ah1 = document.getElementById('h1');

		var aImg = ['comp3.jpeg','comp1.jpeg','p1.jpeg','p2.jpeg','p6.jpeg','logo.jpeg','bk.jpeg','comp2.jpg'];
		var i = 0;			
		setInterval(function() {			
			if (i == aImg.length) {i=0;}
			oDiv.style.backgroundImage = 'url("'+aImg[i]+'")';
			oDiv.style.transition = '0.4s';
			ah1.style.color = 'blue';				
			i++;
		},3000);
	}
	changeBG();
	