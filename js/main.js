$('#view-work[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate ({
            scrollTop: target.offset().top
        }, 1000);
    }

})


const text = baffle(".description-text");
text.set({
    characters : '▓█▓ ▓▒/░█ /></█ ▓>█ ▓▒▓▓█ /░░▓ ▒██ >▒█░ ▒█▒█',
    speed: 120
});
text.start();
text.reveal(4000);


