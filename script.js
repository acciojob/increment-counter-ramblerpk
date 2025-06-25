//your JS code here. If required.
let counter = 0;

function incrementCounter(){
	alert(counter);
	counter++;
	document.getElementById('counter').innerHTML = counter;
}

document.getElementById("incrementBtn").addEventListener('click', incrementCounter);