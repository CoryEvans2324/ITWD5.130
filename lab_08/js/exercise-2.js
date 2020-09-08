(function () {
	var name = prompt('What is your name?', 'Cory');
	if (name == null || name == '') {
		alert('You did not enter a valid name!');
	} else {
		alert('Hello ' + name + '. Welcome to ITWD5.130.\nHave a good day.');
	}

})();
