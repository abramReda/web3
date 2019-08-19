


$(function(){
	'use strict';
	
	
	//Adjust header hieght
	$(".header").height($(window).height());
	
	$(window).resize(function(){
		$(".header").height($(window).height());
	});
	
	
	//add active class to the link which is clicked
	
	$('.links li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
});