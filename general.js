$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 250){
		   $('header').addClass('sticky');
		   $('#logo').addClass('sticky');
		   $('#logo img').addClass('sticky');
		    $('nav').addClass('sticky');
		}
		else{
			   $('header').removeClass('sticky');
			   $('#logo').removeClass('sticky');
			   $('#logo img').removeClass('sticky');
			    $('nav').removeClass('sticky');
		}
});
	$(".handle img").on('click', function(){
	$('nav ul').slideToggle('showing');
	});
	$(window).resize(function() {windowsize = $(window).width();   
			if(windowsize>900) { 
			$('nav ul').css("display","block");   
			}else     
			$('nav ul').css("display","none"); 
			});﻿
			
			
});


