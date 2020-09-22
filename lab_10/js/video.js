var video = document.getElementById('video');

function play_pause()
{
	if (video.paused)
	{
		video.play();
	} else
	{
		video.pause();
	}
}


function make_big()
{
	video.width = 560;
}

function make_small()
{
	video.width = 320;
}

function make_normal()
{
	video.width = 420;
}
