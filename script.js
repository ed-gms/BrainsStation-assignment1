$(document).ready(function () {
    $('.nav-link').css({ 'color': 'white', 'font-weight': 'bold', 'text-align': 'right' });
    $('.navbar-brand').css({ 'color': 'white', 'width': '30%', 'text-align': 'center', 'margin-top': '4px' })
    $('.animated-icon1').click(function () {
        $(this).toggleClass('open');
    });
    $('.appleMusic, icons-sm').attr('target', '_blank');
    $('.icons-sm').attr('target', '_blank');
    $('h3, p.hp-top').css('color','white');
    $('main').css('margin-top', '100px');

    $('#send').click(function () {
        $(this).text('Sent !');
    });

});
