$(function(){
	'use strict';
	
	
	//Adjust header hieght
	var myHeader =$(".header"); //cashing header class
	var mySlider =$('.slider'); //caching slider
	
	myHeader.height($(window).height());
	
	$(window).resize(function(){
		myHeader.height($(window).height());
		//make slider div in center of ccreen		
		mySlider.each(function(){
			$(this).css('paddingTop',($(window).height()-$('.slider div').height()) /2);
		});
	});
	
	
	
	
	
	$('.links li a').click(function(){	

        //add active class to the link which is clicked	.
		$(this).parent().addClass("active").siblings().removeClass("active");
		
		//add themooth scrolling when i click the the link
		$('html, body').animate({
			scrollTop: $('#'+$(this).data('value')).offset().top   // change this to  scrollTop: $('#'+$(this).data('value')).offset().top
		}, 1000);
		console.log("linke is click we will go to"+$(this).data('value'));
	});
	
	
	
	
	
	
	//make slider div in center of ccreen
	
	mySlider.each(function(){
		$(this).css('paddingTop',($(window).height()-$(this).height()) /2);
	});
	
	// Initialize the slider
	mySlider.bxSlider({
		pager:false
	});
	
	
	
	
});