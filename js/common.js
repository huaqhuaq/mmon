var backTop = jQuery(".back-top");
$(window).scroll(function() {
    if($(window).scrollTop() > 150) {
        backTop.css("display", "block");
    } else {
        backTop.css("display", "none");
    }
})
$('.back-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
})
$('.dropdown').each(function () {
	$(this).mouseenter(function(event) {
		$(this).find(".topNav-item").addClass('active')
		$('.topdown').show()
		$(this).find('.topNav-menu').show()
	}).mouseleave(function(event) {
		$(this).find(".topNav-item").removeClass('active')
		$('.topdown').hide()
		$(this).find('.topNav-menu').hide()
	})
})
if($(window).width() < 768) {
    $('.top').on('click', function(e) {
        if($('.topNav-mobile').is(':hidden')){
            $('.topNav-mobile').slideDown()
            e.stopPropagation()
        }else {
            $('.topNav-mobile').slideUp()
            e.stopPropagation()
        }
    })
    $(document).bind('click', function(e){
        var target  = $(e.target)
        if(target.closest('.topNav-mobile').length == 0){
            $('.topNav-mobile').slideUp()
            e.stopPropagation()
        }
    })
}