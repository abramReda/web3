


$(function(){
	'use strict';
	
	
	//Adjust header hieght
	var myHeader =$(".header"); //cashing header class
	myHeader.height($(window).height());
	
	$(window).resize(function(){
		myHeader.height($(window).height());
	});
	
	
	//add active class to the link which is clicked
	
	$('.links li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
});