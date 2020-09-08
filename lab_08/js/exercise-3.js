function calculate_gst() {
	var v = document.getElementById('input-amount').value;
	var output = 'GST is $' + (0.15 * v).toFixed(2);

	document.getElementById('gst-value').innerText = output;
}
