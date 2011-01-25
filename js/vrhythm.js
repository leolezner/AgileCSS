/**
 * Plugin VerticalRhythmGrid
 *
 * @author Leonid Lezner
 */
(function($) {
    $.fn.VerticalRhythmGrid = function(options) {

    var opts = $.extend({}, $.fn.VerticalRhythmGrid.defaults, options);

    function setLine(index, i, main) {
      var h = (i*opts.lineheight+opts.offset) + (main ? 0 : (opts.lineheight / 2));
    
      $('#hr' + index).css({
         "position": "absolute",
         "width": "100%",
         "left": 0,
         "top": h + "em",
         "height": "1px",
         "border-top": "1px solid red",
         "opacity": main ? "0.3" : "0.15",
         "z-index": -1000,
         "margin": 0
      });
    }

    return this.each(function() {
      var $this = $(this);
      
      if(opts.lineheight == 0) {
         // line-height/font-size = line-height in em!
         opts.lineheight = parseInt($('body').css('line-height')) / parseInt($('body').css('font-size'));
      }

      for(var i=0; i<opts.number; i++){
         var index = i;
         
         $this.append('<hr id="hr'+index+'" />');
         setLine(index, i, true);

         $this.append('<hr id="hr'+index+'_sub" />');
         setLine(index+"_sub", i, false);
      }
    });
  };

   $.fn.VerticalRhythmGrid.defaults = {
      lineheight: 0,
      number: 150,
      offset: 0
   };
})(jQuery);