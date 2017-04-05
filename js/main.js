jQuery(document).ready(function($) {

	$(window).on('load',function() {
		$(".loading").delay(600).fadeOut("slow");
	});
	
	$('.my-slider').unslider({
	nav:true,
	autoplay:true,
	arrows:false,
	delay:3000,
	speed:750,
	animation:'horizontal',
	});
	
	function setEqualHeight(columns) { 
		var heightcolumn = 0; 
		columns.each( function() { 
		currentHeight = $(this).height(); 
		if(currentHeight > heightcolumn) { heightcolumn = currentHeight; } } ); 
		columns.height(heightcolumn); 
	};
	setEqualHeight($(".middle-wrapper")); 
	setEqualHeight($(".middle4-name h3"));
	
	$(".but_else").click(function() {
		if ($(this).attr("name")=="q1") {
			$(".article-hidden").fadeIn(1500);
			$(this).attr("name","q2").text("Скрыть");
		}
		else if ($(this).attr("name")=="q2") {
			$(".article-hidden").fadeOut(1500);
			$(this).attr("name","q1").text("Посмотреть ещё");
		};
	});
	
	var x=1;
	var y=1;
	$("#but_menu").click(function() {
		if (y==1 && x==1) {
			$(".menu").css("display","block");
			return x=2;
		}
		if (y==2 && x==1) {
			$(".contacts").css("display","none");
			$(".menu").css("display","block");
			return x=2, y=1;
		}
		if (x==2 && y==1) {
			$(".menu").css("display","none");
			return x=1;
		};
	});
	$("#but_contacts").click(function() {
		if (x==1 && y==1) {
			$(".contacts").css("display","block");
			return y=2;
		}
		if (x==2 && y==1) {
			$(".menu").css("display","none");
			$(".contacts").css("display","block");
			return y=2, x=1;
		}	
		if (y==2 && x==1) {
			$(".contacts").css("display","none");
			return y=1;
		};
	});
		
	
	$.fn.dataImg = function(options) {

  var settings = $.extend({
    sml: 400,
    med: 800,
    lrg: 1450,
    resize: false
  }, options );

  var elements = $(this);

  function getSrc(element) {
    var screen = $(window).width();
    if (screen > settings.med) { 
        return element.data('lrg');
    }
    else if (screen <= settings.med && screen > settings.sml) {
        return element.data('med');
    }
    return element.data('sml');
  }

  function breakpoints() {
    elements.each(function () {
        var e = $(this);
        var src = getSrc(e);
        if(src != undefined){
            if (e.is('img')) {
                e.attr('src', src);
            } 
        }        
    });
  }breakpoints();

  if(settings.resize == true){
    $(window).resize(function(){
      breakpoints();
    });
  }

};
$(function() {
	$(".data-img").dataImg({
	sml: 400,
    med: 800,
    lrg: 1450,
    resize: true,
	bgImg: true
  });
 });
});