# grunt-mdfiver

Calculates md5s for cache busting, at least it should, when done.

## Getting Started

well, not yet anyway.

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-mdfiver`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-mdfiver');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
'''javascript
mdfiver: {
    all: {
        htmlfile: "build-dir/index.html",
              basepath: "build-dir/",
              tags: [{tag:"script", attr:"src"}, {tag:"link", attr:"href"}, {tag:"script", attr:"data-main", suffix: ".js"}]
    }
}
'''

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Juha Heimonen  
Licensed under the MIT license.
