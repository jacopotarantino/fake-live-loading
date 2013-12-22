(function() {
  jQuery(function($) {
    return $.fn.fakeLoading = function(options) {
      var $items, $that, defaults, noop;
      $that = this;
      noop = function() {};
      defaults = {
        childSelector: '> *',
        numberToLoad: 10,
        delay: 5000,
        interval: 10000,
        wiggle: 2000,
        animation: 'ease',
        direction: 'vertical',
        before: noop,
        after: noop
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
      $items = $that.find(options.childSelector).slice(0, options.numberToLoad);
      $items = Array.prototype.reverse.call($items);
      $items.each(function() {
        var that, time;
        that = $(this);
        that.originalHeight = that.height();
        that.originalMargin = that.css('margin');
        that.css({
          margin: '0',
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
          options.before();
          that.css({
            margin: that.originalMargin,
            visibility: 'visible',
            height: that.originalHeight + 'px'
          });
          return option.after();
        }, time);
      });
      return this;
    };
  });

}).call(this);
