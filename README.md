quark-imagine 0.1.4
====================

[Imagine](https://github.com/pyrsmk/imagine) module for [quark](https://github.com/pyrsmk/quark).

Install
-------

```shell
npm install quark-imagine
bower install quark-imagine
```

Use
---

```js
// Load one image
$('.myimage').load(function() {
	// loaded!
});

// Handle errors
$('.myimage').load(function() {
	// loaded!
}, function() {
	// boom!
});

// Load several images
$$('.images').load(function() {
	// Please note that the callback won't be triggered
	// when ALL images are loaded but for EACH loaded image.
	// To run your callback only when all images have been loaded
	// use imagine directly.
});
```

License
-------

Published under the [MIT license](http://dreamysource.mit-license.org).
