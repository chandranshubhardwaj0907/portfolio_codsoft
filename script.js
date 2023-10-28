(function ($) {
    $(function () {
        $('.nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });

        $('html').click(function () {
            $('.nav-dropdown').hide();
        });

        $('#nav-toggle').click(function () {
            $('.nav ul').slideToggle();
        });

        $('#nav-toggle').on('click', function () {
            $('.nav ul').toggleClass('active');
        });
    });
})(jQuery);
// JavaScript for typing animation
const text = "Hey Everyone, I'm Chandranshu Bhardwaj";
let index = 0;
let isTyping = true;

function typeText() {
    if (isTyping) {
        document.querySelector('.hero h1').textContent = text.slice(0, index);
        index++;
        if (index > text.length) {
            isTyping = false;
        }
        setTimeout(typeText, 100); // Adjust typing speed
    }
}

window.addEventListener('load', () => {
    typeText();
});
