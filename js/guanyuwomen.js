$(function(){
	$('.daohang>ul>li').hover(function(){
		$(this).css('border-bottom', '1px solid cadetblue');
	},function(){
		$(this).css('border-bottom', '');
	})
	$(".guanyu-tu>ul>li").mouseenter(function(){
		$(this).children().show();
	})
	$(".guanyu-tu>ul>li>span").mouseleave(function(){
		$(this).hide();
	})
})