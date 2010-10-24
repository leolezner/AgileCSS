/**
 * Plugin VerticalRhythmGrid
 *
 * @author Leonid Lezner
 */
(function($) {
    $.fn.VerticalRhythmGrid = function(options) {

    var opts = $.extend({}, $.fn.VerticalRhythmGrid.defaults, options);

    return this.each(function() {
      var $this = $(this);
      
      if(opts.lineheight == 0) {
         // line-height/font-size = line-height in em!
         opts.lineheight = parseInt($('body').css('line-height')) / parseInt($('body').css('font-size'));
      }

      for(var i=0; i<opts.number; i++){
         $this.append('<hr id="hr'+i+'" />');
         $('#hr'+i).css({
            "position": "absolute",
            "width": "100%",
            "left": 0,
            "top": (i*opts.lineheight+opts.offset)+"em",
            "height": "1px",
            "border-top": "1px solid red",
            "opacity": "0.3",
            "z-index": -1000,
            "margin": 0
         });
      }
    });
  };

   $.fn.VerticalRhythmGrid.defaults = {
      lineheight: 0,
      number: 150,
      offset: 0
   };
})(jQuery);