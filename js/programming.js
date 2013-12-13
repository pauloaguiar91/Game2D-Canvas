var lastActive = 'homepage';

$(document).ready(function() {
});

function goTo(to) {
    if(to == lastActive) {
        return;
    } else {
        $('.'+lastActive).removeClass('active');
        lastActive = to;

        $('#homepage,#about,#blog,#faq').hide();

        $('.'+lastActive).addClass('active');
        $('#'+lastActive).fadeIn(500);
    }
}

$(".navbar-collapse ul li").click(function() {
    $('.navbar-collapse').css('height', '1px').removeClass('in').addClass('collapse');
});