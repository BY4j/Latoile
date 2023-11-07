var banner_video = document.getElementById('video-banner-loop');
var banner_image = document.getElementById('img-banner');
var h1= document.getElementById('h1-title');

banner_video.addEventListener('ended', function () {



    $(this).fadeOut('5000', function () {
        banner_image.fadeIn('5000');
        h1.fadeIn('5000');
    });
    banner_image.style.display = 'block';
    h1.style.display = 'block';
}, false);


$(window).on('mousewheel', function() {
	$('html, body').stop();
});



var scroll_vid = $('#video-banner-loop')[0];

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    scroll > 70 ? scroll_vid.pause() : scroll_vid.play();
  })
