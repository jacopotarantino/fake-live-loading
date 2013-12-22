# jQuery Fake-Loading Plugin
# Simulate Live-Loading Elements on a page by hiding them,
# then revealing them after a pseudo-random amount of time.
#
# Author: Jack Tarantino
# Version: 1.0.0

jQuery( ($) ->
  $.fn.fakeLoading = (options) ->
    $that = this

    defaults =
      childSelector: '> *' # the items to load
      numberToLoad: 10 # number of items that should start hidden
      delay: 5000 # how long befor the first one loads
      interval: 10000 # how often an item "loads"
      wiggle: 2000 # varable amount of time to make the "loading" seem a little more random
      animation: 'ease' # css transition easing function
      direction: 'vertical' # TODO horizontal or vertical loading

    # if nothing is passed then we want to use all the defaults
    if options == undefined
      options = defaults
  
    # if a string is passed in instead of an options object then it's a child selector
    if typeof(options) == 'string'
      options = {childSelector: options}

    #merge defaults with passed-in options
    options = $.extend defaults, options

    # find the items inside the parent selector
    $items = $that.find(options.childSelector)
      .slice(0, options.numberToLoad)
      # otherwise the bottom ones show up first
    $items = Array.prototype.reverse.call($items)
      # create the timeout for each one to load
    $items
      .each () ->
        that = $(this)

        that.originalHeight = that.height()
        # hide them to show again later
        that.css
          visibility: 'hidden'
          height: '0px'
          overflow: 'hidden'
          transition: 'height 0.3s ' + options.animation
          '-webkit-transition': 'height 0.3s ' + options.animation
          
        # setTimeout goes by milliseconds
        time = options.delay
        options.delay += options.interval
        time += Math.floor(Math.random()*options.wiggle)

        setTimeout () ->
          that.css
            visibility: 'visible'
            height: that.originalHeight + 'px'
        , time



    return this
)
