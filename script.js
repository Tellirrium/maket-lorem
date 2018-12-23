$('.scroll').slick({
	autoplay:true,
	dots:true,
	speed:1000,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        arrows: false,
      }
    }
  ]  
});
$('.scroll-footer').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed:600,
  dots: false,	
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});