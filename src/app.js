const css = require('./main.scss')
import $ from "jquery";
import './js/slick.min.js';

var correo = $("#correo"),
	nombre = $("#nombre"),
	asunto= $("#asunto"),
	comentarios = $("#comentarios"),
	sActual = 0;



$(document).ready(()=>{

	$('span.en').addClass('dn');

	$('.error').slideUp(0)

	$('.slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  arrows:true,
	  autoplay:true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.slider2').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  arrows:true,
	  autoplay:true,
	  slidesToShow: 5,
	  slidesToScroll: 2,
	   variableWidth: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow:2,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.right-a').click(function(){
    	$(".slider").slick('slickNext');
	});

	$('.left-a').click(function(){
    	$(".slider").slick('slickPrev');
	});

	var pos = parseInt($('.s05').offset().top);
	var pos1 = parseInt($('.s01').offset().top);
	var pos2 = parseInt($('.s02').offset().top);
	var pos3 = parseInt($('.s03 .mw').offset().top);
	var pos4 = parseInt($('.s05').offset().top);
	var pos5 = parseInt($('.s06').offset().top);


	$(".main-container").on('scroll', function(){


		var suma = $(".main-container").scrollTop();
		// $('.lineas').css('top', ( suma / 2.2))
		$('.s01 .cont-logo').css('top', ( suma / 2.5))
		$('.s01 .lineas').css('top', ( suma / 1.5))
		$('.s01 .cont-logo').next('.texto').css('top', ( suma / 2.5))
	

		if(suma > sActual ){
			$('header').addClass('h-out').removeClass('h-in')
		}else{
			$('header').addClass('h-in').removeClass('h-out')
			if(suma < ($(window).height()/2)){
				$('header').removeClass('h-in')
			}
		}

		sActual = suma;


	})

	$('.ll').click(() => {
		$('.main-container').animate({scrollTop: pos1},600)
	})


	$('.la').click(() => {
		$('.main-container').animate({scrollTop: pos2},600)
	})
	$('.lb').click(() => {
		$('.main-container').animate({scrollTop: pos3},600)
	})
	$('.lc').click(() => {
		$('.main-container').animate({scrollTop: pos4},600)
	})

	$('.ld').click(() => {
		$('.main-container').animate({scrollTop: pos5},600)
	})

	


		correo.keyup(()=>{
			if(correo.val() !== ''){
				correo.next('.error').slideUp()
			}
		})

		correo.blur(()=>{
			if(correo.val() === ''){
				correo.next('.error').slideDown()
			}
		})

		nombre.keyup(()=>{
			if(nombre.val() !== ''){
				nombre.next('.error').slideUp()
			}
		})

		nombre.blur(()=>{
			if(nombre.val() === ''){
				nombre.next('.error').slideDown()
			}
		})

		comentarios.keyup(()=>{
			if(comentarios.val() !== ''){
				comentarios.next('.error').slideUp()
			}
		})

		comentarios.blur(()=>{
			if(comentarios.val() === ''){
				comentarios.next('.error').slideDown()
			}
		})

		asunto.keyup(()=>{
			if(asunto.val() !== ''){
				asunto.next('.error').slideUp()
			}
		})

		asunto.blur(()=>{
			if(asunto.val() === ''){
				asunto.next('.error').slideDown()
			}
		})

		$('#send-email').click(function(event){
			event.preventDefault();
			$(this).addClass('loading').text('').attr('disabled',true)
		})

		$('.language').click(()=>{
			$('.en').toggleClass('dn')
			$('.es').toggleClass('dn')
		})



})


