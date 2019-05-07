$(function(){
	$('.daohang>ul>li').hover(function(){
		$(this).css('border-bottom', '1px solid cadetblue');
	},function(){
		$(this).css('border-bottom', '');
	})
	
	$(".jiejuefangan>ul>li>a>img").mouseenter(function(){
		$(this).css({'transform':'scale(1.1)','transition':'all 1s'});
	}).mouseleave(function(){
		$(this).css({'transform':'scale(1)','transition':'all 1s'});
	})
	
	
})
$(function(){
			var i= 0;
			var width=$('.lunbo>ul>li').width();
	        var clone= $(".lunbo>ul>li").first().clone();//克隆第一张图片
	        
	        $(".lunbo>ul").append(clone);                //复制到列表最后
	        var size = $(".lunbo>ul>li").size();         //返回匹配元素的数量
	        console.log(size);
	
	        /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	        for (var j = 0; j < size-1; j++) {
	            $(".lunbo .num").append("<li></li>");
	        }
	
	        $(".lunbo>.num>li").first().addClass("on");
	
	        /*自动轮播*/
	
	        var t=setInterval(function(){
	            i++;
	            move();
	        },2000);
	
	        /*鼠标悬停事件*/
	
	        $(".lunbo").hover(function () {
	            clearInterval(t);//鼠标悬停时清除定时器
	        }, function () {
	            t = setInterval(function () {
	                i++;
	                move();
	                }, 2000); //鼠标移出时开始定时器
	        });
	
	        /*移动事件*/
	        function move() {
	            if (i == size) {
	                $(".lunbo>ul").css({ left: 0 });
	                i = 1;
	            }
	            if (i == -1) {
	                $(".lunbo>ul").css({ left: -(size - 1) * width });
	                i = size - 2;
	            }
	            $(".lunbo>ul").stop().animate({ left: -i * width }, 500);
	
	            
	        }
	
		})


