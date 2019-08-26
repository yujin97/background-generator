var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('random');

function setGradient() {
	body.style.background = 
	'linear-gradient(to right,' 
	+ color1.value
	+', ' 
	+color2.value
	+')';

	css.textContent = body.style.background;
}

function toHex (num) {
	let hex = num.toString(16);
	return hex;
}

function addZero(num) {
	let colorUnit = '';
	if(toHex(num).length<2){
		colorUnit = `0${toHex(num)}`;
	}
	else {
		colorUnit = toHex(num);
	}
	return colorUnit;
}

function toHexString(r,g,b) {
	let colorString = '#';
	colorString += addZero(r);
	colorString += addZero(g);
	colorString += addZero(b);
	return colorString;
}

function setRandomGradient() {
	let v1r = Math.floor(255 * Math.random());
	let v1g = Math.floor(255 * Math.random());
	let v1b = Math.floor(255 * Math.random());

	let v2r = Math.floor(255 * Math.random());
	let v2g = Math.floor(255 * Math.random());
	let v2b = Math.floor(255 * Math.random());

	body.style.background = 
	'linear-gradient(to right, ' 
	+ `rgb( ${v1r} , ${v1g} , ${v1b} )`
	+', ' 
	+ `rgb( ${v2r} , ${v2g} , ${v2b} )`
	+')';

	css.textContent = body.style.background;
	color1.value = toHexString(v1r,v1g,v1b);
	color2.value = toHexString(v2r,v2g,v2b);
}


color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

random.addEventListener('click',setRandomGradient);


css.textContent = 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))';