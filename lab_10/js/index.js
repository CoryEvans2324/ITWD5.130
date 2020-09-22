var img = document.getElementById('main-image');
var img_caption = document.getElementById('slideshow-caption');

const images = [
	{src: "images/img_5terre_wide.jpg", caption: "Terraces"},
	{src: "images/img_lights_wide.jpg", caption: "Northern Lights"},
	{src: "images/img_mountains_wide.jpg", caption: "Mountains with valley"},
	{src: "images/img_nature_wide.jpg", caption: "Clifface"},
	{src: "images/img_snow_wide.jpg", caption: "Snowy mountains"},
	{src: "images/img_woods_wide.jpg", caption: "Into the woods"}
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
	const src = images[index].src;
	img.attributes.src.value = src;

	const caption = images[index].caption;
	img_caption.innerText = caption;

}


// setInterval(
// 	() => { move_index(1); },
// 	2000
// );
