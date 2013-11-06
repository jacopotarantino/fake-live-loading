# jQuery Fake Live Loading Plugin

A simple plugin to make it look like your recent posts list is live-populating.

## Usage

Here's an example of how to use the plugin with all of the default options. All times are in milliseconds.

```javascript
jQuery(function($) {      // Only run after the document has loaded in case the script is above the document.
  $('.recent_posts ul').fakeLoading({
    childSelector: '> *', // the items to load
    numberToLoad: 10,     // number of items that should start hidden
    delay: 5000,          // how long befor the first one loads
    interval: 10000,      // how often an item "loads"
    wiggle: 2000,         // varable amount of time to make the "loading" seem a little more random
    animation: 'ease'    // css transition easing function
  });
});
```

## Contributing

Want to improve the API, add a feature or fix a typo? Fork the repo and send me a pull request!

If you'd like to see a new feature but don't know how to contribute, email me and I'll try to add it.

## Changelog

* v0.1.0 - Initial Commit
* v0.1.1 - Cleaned up typos and grunt task
* v0.2.0 - Set height to compute automatically. Fixed namespace issue.

## Planned Features

* Allow a `horizontal` option.

## Building from Source

requires node, npm, grunt-cli and coffeescript

* `cd` into the plugin directory
* run `npm install`
* run `grunt`
