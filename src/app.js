const css = require('./main.scss')
import $ from "jquery";
import jquery from "./js/jquery.js";
import  "./js/animatescroll.js";
import  "./js/animatescroll.noeasing.js";
import './js/slick.min.js';
import Data from'./data.js';
import ScrollReveal from 'scrollreveal';

function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();

function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}



var animationEvent = whichAnimationEvent();


var correo = $("#correo").val(),
	nombre = $("#nombre").val(),
	asunto = $("#asunto").val(),
	coments = $("#coments").val(),
	sActual = 0,
	correoValido = false,
	nombreValido = false,
	comentsValido = false,
	asuntoValido = false;
	asuntoValido = false;

var alexis = 'puto';

var validaCampoBlur = (campo) => {
	campo.blur(()=>{
		if(campo.val()==''){
			campo.siblings('.error').slideDown();
		}
	})
}






$(document).ready(()=>{	

	$('.slide').click(function(e){

		// var dataActive = $(e).target.attr('data');
		var dataActive = $(this).attr('data')
		var imgm = $(this).find('img').attr('src')

		$('.modal')
		.removeClass('dn')
		setTimeout(function(){
			$('.modal').addClass('op')
		.on(transitionEvent,function(){
		$('.modal .ventana').removeClass('dn').addClass('scale')
			$('.modal').off(transitionEvent)
		})

		},100)
		
		$('.modal .ventana').on(animationEvent,function(){
		$(this).removeClass('scale').off(animationEvent);			
		})

		$("#description").html(Data[dataActive].description);
		$("#titulo-pro").html(Data[dataActive].titulo);
		$("#img-pro").attr('src', imgm );

		console.log( Data[dataActive].img )

		$("#tecnologias").html('')
		for(var i=0; i<Data[dataActive].tecnologias.length; i++){
			$("#tecnologias").append("<span>"+ Data[dataActive].tecnologias[i]+"</span>, ")
		}

	})

	$('.close').click(function(){
		$('.modal .ventana').addClass('scale-off').on(animationEvent, function(){
			$('.modal').removeClass('op')
			$(this).removeClass('scale-off').off(animationEvent).addClass('dn')

		})
		$('.modal').on(transitionEvent,function(){
			$(this).addClass('dn').off(transitionEvent)

		})
	})


	function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

	$('#correo').keyup(function(){
		if(validateEmail($('#correo').val())){
			$('#correo').next('.error').slideUp();
			correoValido= true;
			if( asuntoValido && nombreValido && comentsValido){
				$("#send-email").removeAttr('disabled')
			}
		}else{
			correoValido= false;
		}
	})

	$('#correo').blur(function(){
		if(!validateEmail($('#correo').val())){
			$('#correo').next('.error').slideDown();
		}
	})

	$('#nombre,#asunto').blur(function(){
		if($(this).val().length<2){
			$(this).next('.error').slideDown()
		}
	})

	$('textarea').blur(function(){
		if($(this).val().length<20){
			$(this).next('.error').slideDown()
		}
	})



	$('#nombre,#asunto').keyup(function(){

		if($('#nombre').val().length>1){
			nombreValido = true;
			$(this).next('.error').slideUp()
		}else{
			nombreValido = false;
		}

		if($('#asunto').val().length>1){
			asuntoValido = true;
			$(this).next('.error').slideUp()
		}else{
			asuntoValido = false;
		}

		if( correoValido && asuntoValido && nombreValido && comentsValido){
			$("#send-email").removeAttr('disabled')
		}
	})

		$('textarea').keyup(function(){
			if($('textarea').val().length>19){
				comentsValido = true;
				$('textarea').next('.error').slideUp()
				
				if( correoValido && asuntoValido && nombreValido && comentsValido){
					$("#send-email").removeAttr('disabled')
				}
			}
		})

	ScrollReveal().reveal('.servicio , .s03 .titulo, .s06 h1,.s06 small',
		{ 
		 container: '.main-container',
		 distance: '100px'
		  });

		ScrollReveal().reveal('.slider ',
		{ 
		 container: '.main-container',
		 distance: '100px'
		  });

	ScrollReveal().reveal('.s03 .icono, .s06 .icono',
		{ 
		 container: '.main-container',
		 scale:.5
		  });

	ScrollReveal().reveal('.s04 .titulo', 
		{ 
		 container: '.main-container',
		 distance: '50px',
		 opacity:0,
		 origin:'top'
		  });

	ScrollReveal().reveal('.s05 .logo, .s06 .formulario', 
		{ 
		 container: '.main-container',
		 delay: 600,
		 distance: '100px',
		 opacity:0,
		 origin:'left'
		  });

	ScrollReveal().reveal('.s05 .texto, .s06 .texto', 
		{ 
		 container: '.main-container',
		 delay: 600,
		 distance: '100px',
		 opacity:0,
		 origin:'right'
		  });



	$('.menu-bar').click(function(){$('.menu').addClass('out')})
	$('.hide,.enlace').click(function(){$('.menu').removeClass('out')})

	$('span.en').addClass('dn');

	$('.error, .success').slideUp(0)

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


	$(".main-container").on('scroll', function(){

		var suma = $(".main-container").scrollTop();

		if($(window).width()>767){
					// $('.lineas').css('top', ( suma / 2.2))
			$('.s01 .cont-logo').css('top', ( suma / 2.5))
			$('.s01 .lineas').css('top', ( suma / 1.5))
			$('.s01 .cont-logo').next('.texto').css('top', ( suma / 2.5))
		}
	
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

	$('#send-email').click(function(event){
		event.preventDefault();


		$(this).addClass('loading').text('').attr('disabled',true)

		var data = {
	    correo:$("#correo").val(),
		nombre:$("#nombre").val(),
		asunto: $("#asunto").val(),
		comentarios: $("textarea").val()
	};


		console.log(data)

			$.ajax({
			    type: "POST",
			    url: "email.php",
			    data: data,
			    success: function(){
			     $('#send-email').removeClass('loading').text('Enviar')
			     
			     $("#correo").val('')
				 $("#nombre").val('')
				 $("#asunto").val('')
				 $("textarea").val('')	

				 $('.success').slideDown()

				 setTimeout(function(){
					$('.success').slideUp()					 	
				 },6000)
			    }
			});
	})

	$('.language').click(()=>{
		$('.en').toggleClass('dn')
		$('.es').toggleClass('dn')
	})



})


