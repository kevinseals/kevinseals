$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
		   
		   $('header').addClass('header-sticky');
		   $('logo img').addClass('logo-sticky img');
			$('#logo img').css("display","none"); 
		}
		else{
			   
			   $('header').removeClass('header-sticky');
			   $('logo img').removeClass('logo-sticky img');
				$('#logo img').css("display","block");
		}
});
	$(".handle img").on('click', function(){
	$('nav ul').slideToggle('showing');
	});
	$(window).resize(function() {windowsize = $(window).width();   
			if(windowsize > 850) { 
			$('#large nav ul').css("display","inline-block");   
			}else     
			$('#large nav ul').css("display","none"); 
			});﻿
			
			



});﻿