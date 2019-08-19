


$(function(){
	'use strict';
	
	
	//Adjust header hieght
	$(".header").height($(window).height());
	
	$(window).resize(function(){
		$(".header").height($(window).height());
	});
	
	
});