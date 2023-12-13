var banner_video = document.getElementById('video-banner-loop');
var banner_image = document.getElementById('img-banner');
var h1 = document.getElementById('h1-title');

banner_video.addEventListener('ended', function () {

    /*Sa marche absolument pas ! :D En tout cas pas comme prévu. Tant pis*/

    // $(this).fadeOut('5000', function () {
    //     banner_image.fadeIn('5000');
    //     h1.fadeIn('5000');
    // });
    banner_image.style.display = 'block';
    h1.style.display = 'inline';
}, false);


$(window).on('mousewheel', function () {
    $('html, body').stop();
});


/*Page offset vertical. Pas eu le temps d'investiguer son utilisation*/
var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
console.log(scrollPos);


/* Sa marche pas, sa saoul. Donc le code à été freeze jusqu'à nouvel ordre*/

/* Vidéos Banner*/

// var scroll_vid_banner = $('#video-banner-loop')[0];

// $(window).scroll(function () {
//     var scroll = $(this).scrollTop();
//     scroll > 70 ? scroll_vid_banner.pause() : scroll_vid_banner.play();
// })

/* Vidéos Fast Paced Combat*/

var scroll_vid_fast = $('#fast-paced-scroll')[0];

$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if scroll < 2907 {}
    scroll > 2907 ? scroll_vid_fast.pause() : scroll_vid_fast.play();
})   3621

/* Vidéos Boss fight prediction*/
// var scroll_vid_boss = $('#boss-fight-scroll')[0];

// $(window).scroll(function () {
//     var scroll = $(this).scrollTop();
//     scroll > 70 ? scroll_vid_boss.pause() : scroll_vid_fast.play();
// })
