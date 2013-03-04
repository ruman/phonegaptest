;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
   // $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    //$.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    //$.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    //$.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    //$.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    //$.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    //$.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    //$.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  if(jQuery.browser.msie && parseInt(jQuery.browser.version) < 9 ){
    jQuery('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
    jQuery('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
    jQuery('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
    jQuery('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});
    jQuery('.topmenu .nav-bar >li:last-child').css({background:'none;'});
    jQuery('.topmenu .nav-bar >li:last-child >a span').css({width:248});
    jQuery('.topmenu .nav-bar >li:last-child >a').hover(function(){
      jQuery(this).find('span').css({backgroundPosition:'right -86px'});
    },function(){
      jQuery(this).find('span').css({backgroundPosition:'-999px -9999px'});
    });
  }
  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        // At load, if user hasn't scrolled more than 20px or so...
  			if( $(window).scrollTop() < 20 ) {
          window.scrollTo(0, 1);
        }
      }, 0);
    });
  }

})(jQuery, this);
$(window).load(function(){
  if(jQuery("#homeSlider").length){
    jQuery('#homeSlider').flexslider({
      animation: "fade",
      start: function(slider){
        jQuery('.homepageGallery').removeClass('loading');
      }
    });
  }
});