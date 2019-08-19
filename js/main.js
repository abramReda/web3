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
	
	
	//add active class to the link which is clicked
	
	$('.links li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
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