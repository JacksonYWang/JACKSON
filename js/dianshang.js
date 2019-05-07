$(function(){
	$('.daohang>ul>li').hover(function(){
		$(this).css('border-bottom', '1px solid cadetblue');
	},function(){
		$(this).css('border-bottom', '');
	})
})