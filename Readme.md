# jQuery Fake Live Loading Plugin

A simple plugin to make it look like your recent posts list is live-populating.

## Usage

Here's an example of how to use the plugin with all of the default options. All times are in milliseconds.

```javascript
jQuery(function ($) {
  $('.recent_posts ul').fakeLoading({  // Just pass a regular selector to jQuery and call the fakeLoading method.
    childSelector: '> *',              // the items to load
    numberToLoad: 10,                  // number of items that should start hidden
    delay: 5000,                       // how long befor the first one loads
    interval: 10000,                   // how often an item "loads"
    wiggle: 2000,                      // varable amount of time to make the "loading" seem a little more random
    animation: 'ease'                  // css transition easing function
    before: noop                       // callback to execute before each animation starts
    after: noop                        // callback to execute after each animation finishes
  });
});
```

Note: This plugin relies on information in the body of the page. You'll need to wait for document ready event to fire(as seen above). If you put your plugin call in the footer of your site, this isn't an issue and you can skip straight to calling the function without the wrapper. ie ```javascript jQuery('.recent_posts ul').fakeLoading({ ```

The plugin conforms to jQuery standards and returns `this` so it's chainable. ie ```javascript $('.recent_posts ul').fakeLoading().show().css('background', 'blue')... ```

## Contributing

Want to improve the API, add a feature or fix a typo? Fork the repo and send me a pull request!

If you'd like to see a new feature but don't know how to contribute, email me and I'll try to add it.

## Changelog

* v0.1.0 - Initial Commit
* v0.1.1 - Cleaned up typos and grunt task
* v0.2.0 - Set height to compute automatically. Fixed namespace issue.
* v1.0.0 - Updated Readme, added callbacks, 

## Planned Features

* Allow a `horizontal` or directional option.

## Building from Source

requires node, npm, grunt-cli and coffeescript

* `cd` into the plugin directory
* run `npm install`
* run `grunt`
