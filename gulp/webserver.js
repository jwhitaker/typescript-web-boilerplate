var webserver = require("gulp-webserver");

module.exports = function(gulp, config, options) {
    return function() {
        gulp.src(config.paths.build_debug)
            .pipe(webserver({
                livereload: true,
                directoryListing: false,
                port: 3003,
                fallback: "index.html"
            }));
    }
}
