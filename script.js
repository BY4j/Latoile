var banner_video = document.getElementById('video-back-loop');
var banner_image = document.getElementById('img-banner-background');
var banner_div = document.getElementById('video-back-loop');

banner_video.addEventListener('ended', function () {
    $(this).fadeOut('5000', function () {
        banner_image.fadeIn('5000');
    });
    banner_image.style.display = 'block';
}, false);


