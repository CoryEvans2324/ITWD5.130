function get_dom(id) {
	return document.getElementById(id);
}

function input_styler (input, e) {
	if (input.value) {
		input.nextElementSibling.classList.add('has-data');
	} else {
		input.nextElementSibling.classList.remove('has-data');
	}
}

function get_all_inputs() {
	return get_dom('content').getElementsByTagName('input');
}

const inputs = get_all_inputs();
for (let index = 0; index < inputs.length; index++) {
	const element = inputs[index];
	element.onkeydown = (e) => {
		setTimeout(() => {
			input_styler(element, e);
		}, 1);
	}
}
