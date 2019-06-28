const config = require('./config');
const serve = require('metalsmith-serve');
const watch = require('metalsmith-watch');

config({
  metadata: {
    isDevMode: true
  }
})
  .use(serve({
    port: 8082,
    verbose: true
  }))
  .use(watch({
    paths: {
      "${source}/**/*": true,
      "layouts/**/*": "**/*",
      "partials/**/*": "**/*",
      "public/css/**/*": "*.css",
    },
    livereload: true
  }))
  .build(function (err) {
    if (err) throw err;
  });

// .use(screenshots())

