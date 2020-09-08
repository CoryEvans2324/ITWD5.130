// f -> c
function f_to_c(f) {
	return (f - 32) * 5/9;
}

function c_to_f(c) {
	return (c * 9/5) + 32;
}

function c_to_k(c) {
	return c + 273.15;
}

function f_to_k(f) {
	return c_to_k(f_to_c(f));
}

function k_to_c(k) {
	return k - 273.15;
}

function k_to_f(k) {
	return c_to_f(k_to_c(k));
}

function set_fahrenheit(f) {
	document.getElementById('input-fahrenheit').value = f.toFixed(2);
}
function set_celcius(c) {
	document.getElementById('input-celcius').value = c.toFixed(2);
}
function set_kelvin(k) {
	document.getElementById('input-kelvin').value = k.toFixed(2);
}

function convert_fahrenheit() {
	var f = document.getElementById('input-fahrenheit').value;
	f = Number(f);
	var c = f_to_c(f);
	var k = f_to_k(f);

	set_celcius(c);
	set_kelvin(k);
}

function convert_celcius() {
	var c = document.getElementById('input-celcius').value;
	c = Number(c);
	var f = c_to_f(c);
	var k = c_to_k(c);

	set_fahrenheit(f);
	set_kelvin(k);
}

function convert_kelvin() {
	var k = document.getElementById('input-kelvin').value;
	k = Number(k);
	var f = k_to_f(k);
	var c = k_to_c(k);

	set_fahrenheit(f);
	set_celcius(c);
}
