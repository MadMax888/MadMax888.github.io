$(document).ready(function() {
	$("#mainreverse").scroolly([
                {
                    to: 'con-top + 100el',
                    direction: 1,
                    css: {
                        '-transition': 'none',
                        position: 'absolute',
                        top: ''
                    }
                },
                {
                    direction: 1,
                    from: 'con-top + 100el',
                    css: {
//                        '-transition': 'all .2s',
                        '-transition': 'none',
                        position: 'fixed',
                        top: '-100px'
                    }
                },
                {
                    to: 'con-top',
                    direction: -1,
                    css: {
                        '-transition': 'none',
                        position: 'absolute',
                        top: ''
                    }
                },
                {
                    direction: -1,
                    from: 'con-top',
                    css: {
                        '-transition': 'all .2s',
                        position: 'fixed',
                        top: '0'
                    }
                }	
	]);


	$(".fancybox-thumb").fancybox({
		width  : '90%',
		height : '70%',
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			// title	: {
			// 	type: 'outside'
			// },
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
	
	$(".fancybox").fancybox(); 

 //-------------------- TML-SLIDER----------------------------------
	$("#slider").owlCarousel({
 
	  navigation : false, // Show next and prev buttons
	  slideSpeed : 200,
	  paginationSpeed : 200,
	  singleItem:true,
	  lazyLoad : true
	});
	
	$(".b-slider__btn_prev").click(function(){
		$("#slider").trigger("owl.next");
	});
	$(".b-slider__btn_next").click(function(){
		$("#slider").trigger("owl.prev");
	});
//------------------------------------------------------------/

//-------------------- B-TM-SLIDER----------------------------------

	 $("#tml-slider").owlCarousel({
 
	  navigation : false, // Show next and prev buttons
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem:true,
	  autoPlay : 3000 
	});
//------------------------------------------------------------/

//--------------------- Animated content ------------------------------------------/
	$('.b-feautures__item').addClass("hidden-animation").viewportChecker({
		classToAdd: 'visible-animation animated fadeInUp',
		offset: 100
		});	
	$('.screenshot').addClass("hidden-animation").viewportChecker({
		classToAdd: 'visible-animation animated fadeInUp',
		offset: 100
		});
	$('.b-package').addClass("hidden-animation").viewportChecker({
		classToAdd: 'visible-animation animated zoomIn',
		offset: 100
		});
});


var m1 = new menu__list('.b-menu__list');	
var m2 = new mobile_menu('.b-mobile-menu');	

function mobile_menu (sSelector) {
	var m = this;

	//1. Секция данных (переменніе, массиві, ...) ======================
	m.menu = $(sSelector);

	m.popupmenu = function() {
		$(".b-mobile-menu__popup").slideToggle(700);
		// consloe.log($(".b-mobile-menu__popup").slideToggle() );
		if( !$(".menu-icons").hasClass("active") ) {
			$(".menu-icons").addClass("active");
			}
		else {
			$(".menu-icons").removeClass("active");
			}
		}

	//3. Секция собитый ================================================
	// При клике на кнопку меню , открывает мобильное меню
	m.menu.children('.b-mobile-menu__icons').on('click', m.popupmenu);
	};


function menu__list (sSelector) {
	var m = this; // жесткий указатель на ф-ю menu__list()
	//1. Секция данных (переменніе, массиві, ...) ======================
	m.menu = $(sSelector);

	//2. Секция локиги (функции) =======================================
	m.hashnavigation = function(e) {
		$("html, body").stop().animate({ scrollTop: $(this.hash).offset().top }, 500);
		e.preventDefault();
		$(m.menu).find(".b-menu__item_active").removeClass("b-menu__item_active");
		$(this).parent(".b-menu__item").addClass("b-menu__item_active");
		$(".b-mobile-menu__popup").slideToggle(700);
		$(".menu-icons").removeClass("active");
		}

	//3. Секция собитый ================================================
	// При клике на пункт меню , скролит к нужной сексции в док-те
	m.menu.find(".b-menu__link").on("click", m.hashnavigation);
	}