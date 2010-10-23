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
      
      for(var i=0; i<opts.number; i++){
         $this.append('<hr id="hr'+i+'" />');
         $('#hr'+i).css({
            "position": "absolute",
            "width": "100%",
            "left": 0,
            "top": (i*opts.lineheight+opts.offset)+"em",
            "height": "1px",
            "border-top": "1px dotted red",
            "opacity": "0.3",
            "z-index": -1000
         });
      }
    });
  };

   $.fn.VerticalRhythmGrid.defaults = {
      lineheight: 1,
      number: 100,
      offset: 0
   };
})(jQuery);