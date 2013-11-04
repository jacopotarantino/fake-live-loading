(function() {
  jQuery(function($) {
    return $.fn.fakeLoading = function(options) {
      var $items, $that, defaults;
      $.fn.reverse = Array.prototype.reverse;
      $that = this;
      defaults = {
        childSelector: '> *',
        numberToLoad: 10,
        delay: 5000,
        interval: 10000,
        wiggle: 2000,
        animation: 'ease',
        expandedSize: '5em',
        direction: 'vertical'
      };
      if (options === void 0) {
        options = defaults;
      }
      if (typeof options === 'string') {
        options = {
          childSelector: options
        };
      }
      options = $.extend(defaults, options);
      $items = $that.find(options.childSelector).slice(0, options.numberToLoad).reverse().each(function() {
        var that, time;
        that = $(this);
        that.css({
          visibility: 'hidden',
          height: '0px',
          overflow: 'hidden',
          transition: 'height 0.3s ' + options.animation,
          '-webkit-transition': 'height 0.3s ' + options.animation
        });
        time = options.delay;
        options.delay += options.interval;
        time += Math.floor(Math.random() * options.wiggle);
        return setTimeout(function() {
          return that.css({
            visibility: 'visible',
            height: options.expandedSize,
            overflow: 'auto'
          });
        }, time);
      });
      return this;
    };
  });

}).call(this);
