$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});

var myFullpage = new fullpage('#fullpage', {
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage','thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'],
	navigation: false,
	navigationPosition: 'right',
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	loopBottom: true,
	loopTop: true,
	loopHorizontal: true,

	//可访问
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,
});

function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
  }

  function myFunction2() {
	var popup = document.getElementById("myPopup2");
	popup.classList.toggle("show");
  }

  function myFunction3() {
	var popup = document.getElementById("myPopup3");
	popup.classList.toggle("show");
  }


  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides1");
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 6000); // Change image every 2 seconds
  }

  var slideIndex2 = 0;
  showSlides2();
  
  function showSlides2() {
	var i2;
	var slides2 = document.getElementsByClassName("mySlides2");
	for (i2 = 0; i2 < slides2.length; i2++) {
	  slides2[i2].style.display = "none";
	}
	slideIndex2++;
	if (slideIndex2 > slides2.length) {slideIndex2 = 1}
	slides2[slideIndex2-1].style.display = "block";
	setTimeout(showSlides2, 6000); // Change image every 2 seconds
  }

  var slideIndex3 = 0;
  showSlides3();
  
  function showSlides3() {
	var i3;
	var slides3 = document.getElementsByClassName("mySlides6");
	for (i3 = 0; i3 < slides3.length; i3++) {
	  slides3[i3].style.display = "none";
	}
	slideIndex3++;
	if (slideIndex3 > slides3.length) {slideIndex3 = 1}
	slides3[slideIndex3-1].style.display = "block";
	setTimeout(showSlides3, 7000); // Change image every 2 seconds
  }
