let char = document.getElementById('character');
let block = document.getElementById('block');
let start = document.getElementById('start');
let points = document.getElementById('score');

function jump() {
	char.classList.add("animate");
	if (char.classList != "animate") {
		
		setTimeout(
			
		function() {
			char.classList.remove("animate");
		}, 500);
	}
	
}

var checkDead = setInterval(() => {

	var chartop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));

	var blockleft = parseInt(window.getComputedStyle(block). getPropertyValue("left"));
	
	if (blockleft<40 && blockleft>5 && chartop>=170) {
		block.style.animation = "none";
	//	block.style.display = "none";
		points.innerHTML = "You Loose";
		points.style.background = "red";
		char.style.backgroundColor = "red";
	}

}, 1000);


start.addEventListener('click', () => {
	window.location.reload();
})