
var img = document.getElementById('main-image');
const images = [
	"images/img_5terre_wide.jpg",
	"images/img_lights_wide.jpg",
	"images/img_mountains_wide.jpg",
	"images/img_nature_wide.jpg",
	"images/img_snow_wide.jpg",
	"images/img_woods_wide.jpg"
];
var current_index = 0;

function calcluate_index(offset)
{
	var tmp_index = (current_index + offset) % images.length;
	if (tmp_index < 0) { tmp_index = images.length + tmp_index }

	return tmp_index;
}

function move_index(offset)
{
	current_index = calcluate_index(offset);
	set_image(current_index);
}

function set_image(index)
{
	const src = images[index];
	img.attributes.src.value = src;
}
