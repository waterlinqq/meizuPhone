$('.hamburger-menu').on('click',function(){
	$('.menu').slideToggle(400)
})

$('#fullpage').fullpage({
        verticalCentered:false, 
		navigation:true, 
		scrollingSpeed:700, 
		//anchors:['','qingnian','duocai','yitihua','1080P','64CPU','dual4G','1300w','3100mAh','Android',''], // 设置锚链接
		//頁面離開
		onLeave: function(index){
			switch(index){
				case 1:
					$('.s1>*').animate({'opacity':'0.5'},500);
					break;
				case 2:
					$('.s2 .blue').animate({'left': '-50%'},1000);
					$('.s2 .white').animate({'right': '-50%'},1000);
					break;
				case 3:
					$('.s3 .detail').animate({'bottom': '-50%'},1000);
					break;
				case 4:
					break;
				case 5:
					$('.s5 .detail h2').animate({'left': '2000px'},500)
					$('.s5 .detail p').animate({'right': '2000px'},500)
					break;
				case 6:
					$('.s6 .cc-a').animate({'left': '54%', 'bottom': '20%'},500)
					break;
				case 7:
					$('.s7').animate({'opacity': '0.2'}, 1000);
					break;
				case 8:
					$('.s8 .detail h2').animate({'bottom': '1000px'},1000)
					$('.s8 .detail p').animate({'top': '1000px'},1000)
					break;
			}
		},
		//頁面加載完成後回調
		afterLoad:function (anchorLink,index) {
			switch (index) {
				case 1:
					$('.s1>*').animate({'opacity':'1'},1000);
					break;
				case 2:
					$('.s2 .blue').animate({'left': '25%'},1000);
					$('.s2 .white').animate({'right': '25%'},1000);
					break;
				case 3:
					$('.s3 .detail').animate({'bottom': '10%'},1000);
					break;
				case 4:
					$('.s4 p:first~p').fadeOut('fast','linear').fadeIn('fast','linear');
					break;
				case 5:
					$('.s5 .detail h2').animate({'left': '0px'},500)
					$('.s5 .detail p').animate({'right': '0px'},500)
					break;
				case 6:
					$('.s6 .cc-a').animate({'left': '44%', 'bottom': '27%'},500);
					break;
				case 7:
					$('.s7').animate({'opacity': '1'}, 1000);
					break;
				case 8:
					$('.s8 .detail h2').animate({'bottom': '0px'},1000)
					$('.s8 .detail p').animate({'top': '0px'},1000)
					break;
			}
		}
})